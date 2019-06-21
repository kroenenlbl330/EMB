import Vue from 'vue'
import Router from 'vue-router'

import Home from '../../components/home.vue'

import WaterMeter from '../../components/watermeter.vue'
import WaterMeterDetail from '../../components/watermeter.detail.vue'
import WaterMeterEdit from '../../components/watermeter.edit.vue'
import WaterMeterAdd from '../../components/watermeter.add.vue'

import WaterCollect from '../../components/watercollect.vue'
import WaterCollectAdd from '../../components/watercollect.add.vue'
import WaterCollectDetail from '../../components/watercollect.detail.vue'
import WaterCollectEdit from '../../components/watercollect.edit.vue'

import WaterRepeater from '../../components/waterrepeater.vue'
import WaterRepeaterAdd from '../../components/waterrepeater.add.vue'
import WaterRepeaterDetail from '../../components/waterrepeater.detail.vue'
import WaterRepeaterEdit from '../../components/waterrepeater.edit.vue'

import WaterConcentrator from '../../components/waterconcentrator.vue'
import WaterConcentratorAdd from '../../components/waterconcentrator.Add.vue'
import WaterConcentratorDetail from '../../components/waterconcentrator.Detail.vue'
import WaterConcentratorEdit from '../../components/waterconcentrator.Edit.vue'


// 以懒加载方式加载模块
// 使用webpack的[require.ensure](https://doc.webpack-china.org/api/module-methods#require-ensure)技术，也可以实现按需加载。
// 这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件；如果不指定chunkName，则和使用vue的异步组件一样，每个组件生产打包成一个js文件。
// 这个组件Hello，指定了相同的chunkName(名字为：demo)，因此会合并打包成一个js文件。
// const Home = resolve => require.ensure([], () => resolve(require('../../components/home.vue')), 'demo')


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // { path: '*', component: NotFoundComponent },
    //WATERMETER
    {
      path: '/home',
      alias: '/home',
      name: 'Home',
      // 以懒加载方式加载模块，一个组件生成一个js文件
      // component: resolve => require(['../../components/home.vue'],resolve)
      component: Home
    },
    {
      path: '/',
      alias: '/watermeter',
      name: 'watermeter',
      component: WaterMeter
    },
    {
      // path: '/watermeter/detail/:id',
      path: '/watermeter/detail/',
      name: 'watermeter',
      // name: 'watermeterdetail',
      component: WaterMeterDetail
    },
    {
      path: '/watermeter/edit/',
      name: 'watermeter',
      // name: 'watermeteredit',
      component: WaterMeterEdit
    },
    {
      path: '/watermeter/add/',
      name: 'watermeter',
      // name: 'watermeteradd',
      component: WaterMeterAdd
    },
    //WATERCOLLECT
    {
      path: '/watercollect',
      name: 'watercollect',
      component: WaterCollect
    },
    {
      path: '/watercollect/add/',
      name: 'watercollect',
      component: WaterCollectAdd
    },
    {
      path: '/watercollect/detail/',
      name: 'watercollect',
      component: WaterCollectDetail
    },
    {
      path: '/watercollect/edit/',
      name: 'watercollect',
      // name: 'watermeteredit',
      component: WaterCollectEdit
    },
    //WATERREPEATER
    {
      path: '/waterrepeater',
      name: 'waterrepeater',
      component: WaterRepeater
    },
    {
      path: '/waterrepeater/add/',
      name: 'waterrepeater',
      component: WaterRepeaterAdd
    },
    {
      path: '/waterrepeater/detail/',
      name: 'waterrepeater',
      component: WaterRepeaterDetail
    },
    {
      path: '/waterrepeater/edit/',
      name: 'waterrepeater',
      component: WaterRepeaterEdit
    },
    //WATERCONCENTRATOR
    {
      path: '/waterconcentrator',
      name: 'waterconcentrator',
      component: WaterConcentrator
    },
    {
      path: '/waterconcentrator/add/',
      name: 'waterconcentrator',
      component: WaterConcentratorAdd
    },
    {
      path: '/waterconcentrator/detail/',
      name: 'waterconcentrator',
      component: WaterConcentratorDetail
    },
    {
      path: '/waterconcentrator/edit/',
      name: 'waterconcentrator',
      component: WaterConcentratorEdit
    },
  ]
})
