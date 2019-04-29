** scr/static/jquery-vendor.js **
包装jquery
此方法只依赖于自己，完全不需要任何其他插件与加载器，创建jquery的包装对象jquery-vendor.js
为了调用方便，可在webpack配置文件中创建jquery-vendor.js的别名
  alias: {
      jquery: 'src/assets/jquery-vendor.js'
  }   
