const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ClanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack')

const glob = require('glob')
const PAGE_PATH = path.resolve('./src/pages')

//多入口配置 entries()
var entries= function () {
  var entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
  var map = {}
 
  for (var i = 0; i < entryFiles.length; i++) {
   var filePath = entryFiles[i]
   var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
   map[filename] = filePath
  }
  return map
 }

//多页面输出配置 htmlPlugin()
var htmlPlugin = function () {
  let entryHtml = glob.sync(PAGE_PATH + '/*/*.html')
  let arr = []
  entryHtml.forEach((filePath) => {
      let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
      let conf = {
          // 模板来源
          template: filePath,
          // 文件名称
          filename: filename + '.html',
          // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
          chunks: ['manifest', 'vendor', filename],
          inject: true
      }
      if (process.env.NODE_ENV === 'production') {
          conf = merge(conf, {
              minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeAttributeQuotes: true
              },
              chunksSortMode: 'dependency'
          })
      }
      arr.push(new HtmlWebpackPlugin(conf))
  })
  return arr
}


module.exports = {
  //函数入口配置
  // entry: entries(),

  //标准入口配置
  entry: {
    home: './src/pages/home/home.js',//不写index: 'xxxxxx'，那入口名称的话默认为main
    login: './src/pages/login/login.js',
    school: './src/pages/school/school.js',
    main: './src/pages/main/main.js'
  },

  //函数出口配置
  // output: htmlPlugin(),

  //出口配置
  output: {
    path: path.resolve('./dist'),//或者 path: path.join(__dirname, "dist"),
    filename: '[name]/[name].js'
    // publicPath: 'public' 
    // chunkFilename: //按需加载的文件名
  },

  mode: 'development',
  devServer: {
      contentBase: './dist',
      open: true,
      port: 4444
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'home/home.html',//生成内存中的文件名称
      template: './src/pages/home/home.html',//源文件; path.join(__dirname,'')代表根目录
      // title: 'test_title',
      // hash: true,
      // minify: {
      //     emoveAttributeQuotes: true,  去引号
      //     collapseWhitespace: true     折成一行
      // }压缩设置
      inject: 'body', //可以选择插入在body或head中
      chunks: ['home']//将index.js引入html
    }),
    new HtmlWebpackPlugin({
      filename: 'login/login.html',
      template: './src/pages/login/login.html',
      inject: 'body',
      chunks: ['login']
    }),
    new HtmlWebpackPlugin({
      filename: 'school/school.html',
      template: './src/pages/school/school.html',
      inject: 'body',
      chunks: ['school']
    }),
    new HtmlWebpackPlugin({
      filename: 'main/main.html',
      template: './src/pages/main/main.html',
      inject: 'body',
      chunks: ['main']
    }),
    new ClanWebpackPlugin(['./dist']),

    //MiniCssExtractPlugin
    //只提取css 并不会合并 需要合并要使用extract-text-webpack-plugin@next 只不过wepack4.x不建议使用...
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   // chunkFilename: "[id].css"
    //   // filename: "[name]/[name].css",//制定编译后的目录
    // }),

    //ExtractTextWebpackPlugin
    //webpack4.x以前的打包css插件 但可以合并css
    new ExtractTextWebpackPlugin({ 
      // filename: '[name].min.css' // 配置提取出来的css名称
      filename: 'style.css'
    }),

    //使用vue-loader需要添加此配置
    new VueLoaderPlugin()    
  ],
  //提取公共jquery到jquery文件加下(存在问题...)
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /\.js$/,
  //         // name: "jquery",
  //         // filename: "jquery.js",
  //         chunks: "all", //有三个可选值，”initial”, “async” 和 “all”. 分别对应优化时只选择初始的chunks，所需要的chunks 还是所有chunks
  //         minChunks: 2
  //       }
  //     }
  //   }
  // },
  module: {
    rules: [
      //Jquery打包 可以使用如下被注释的配置
      // {
      //   test: require.resolve('jquery'), //require.resolve 用来获取模块的绝对路径
      //   use: [
      //     {
      //       loader: 'expose-loader',
      //       options: 'jQuery'
      //     }, 
      //     {
      //       loader: 'expose-loader',
      //       options: '$'
      //     }
      //   ]
      // },
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/, //排除node_modules文件 ** 或者写成：exclude: [path.resolve(__dirname,'node_modules')]
        // options: {
        //   presets: ['es2015']
        // }
        options:{
          presets:[
            "@babel/preset-env"
          ],
          plugins: [
            "@babel/plugin-transform-runtime"
          ]
        }
      },
      {
        test: /\.css$/, 

        // 不使用MiniCssExtractPlugin 可以使用以下配置
        // use: [
        //   'style-loader',
        //   'css-loader'
        // ]

        // 使用MiniCssExtractPlugin 可以使用以下配置     
        // use:[
        //   MiniCssExtractPlugin.loader,
        //   "css-loader"
        // ]

        // 使用ExtractTextWebpackPlugin 可以使用以下配置 
        use: ExtractTextWebpackPlugin.extract({ // 使用ExtractTextWebpackPlugin的extract方法
          // fallback: {// 这里表示不提取的时候，使用什么样的配置来处理css
          //   loader: 'style-loader',
          //   options: {
          //     singleton: true // 表示将页面上的所有css都放到一个style标签内
          //   }
          // },
          use: [ // 提取的时候，继续用下面的方式处理
            {
              loader: 'css-loader',
              // options: {
              //   minimize: true  // 开启压缩
              // }
            }
          ]
        })
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        // include: [
        //   path.resolve(__dirname, '../src/assets'),
        // ],
        options: {
          limit: 10000,
          name: '[hash:8].[name].[ext]' //不知道什么效果...
        }  
      }
    ]//.concat(htmlPlugin())
  },
  resolve: {
    alias: {
        'vue': 'vue/dist/vue.js',//给 vue 起别名
        //'jquery': 'src/assets/jquery-vendor.js'//将其指向jquery-vendor.js所在位置
    },
    modules: [
      path.resolve('./node_modules')
    ]
  },
  watch: true //webpack 将继续监听任何已解析文件的更改
}

