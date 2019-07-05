<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header :message="WaterMeterList.length">
        <!-- <span slot="screening-area">水表设备</span> -->

        <!-- <div slot="title-area">
          <p>水表表具设备中&nbsp;共有设备&nbsp;&nbsp;{{WaterMeterList.length}}</p>
          <p>激活&nbsp;{{activateNum()}}&nbsp;&nbsp;停用&nbsp;{{disableNum()}}&nbsp;&nbsp;关联采集的水表&nbsp;{{relevance()}}</p>
        </div> -->

        <div slot="search" class="search">
          <div>
            <img :src="SearchGray">
          </div>
          <input type="text"
            autocomplete="off"
            placeholder="通过图纸编号搜索EMB..."
            v-model="searchVal">
            <!-- @focus.prevent="Focus(),SearchGray=overSearchPurple"
            @blur.prevent="loseFocus(),SearchGray=outSearchGray" -->
        </div>
        <div class="detail-button" slot="detail-button" @click="detail" 
          @mouseover="DetailGray=overDetailPurple" @mouseout="DetailGray=outDetailGray" title="详情">
          <div>
            <img :src="DetailGray">
          </div>
        </div>
        <div class="edit-button" slot="edit-button" @click="edit" 
          @mouseover="EditGray=overEditPurple" @mouseout="EditGray=outEditGray" title="修改">
          <div>
            <img :src="EditGray">
          </div>
        </div>
        <div class="delete-button" slot="delete-button" @click="del" 
          @mouseover="DelGray=overDelPurple" @mouseout="DelGray=outDelGray" title="删除">
          <div>
            <img :src="DelGray">
          </div>
        </div>
        <div class="add-button" slot="add-button" @click="addNewMeter" 
          @mouseover="AddGray=overAddPurple" @mouseout="AddGray=outAddGray"  title="添加新的水表设备">
          <div>
            <img :src="AddGray">
          </div>
          <span>添加</span>
        </div>

      </Header>
      <div class="content">
        <table class="meter-table">
          <thead>
            <tr>
              <th class="row-1" align="center"></th>
              <th class="row-1"></th>
              <th class="row-2"><span>图纸编号</span></th>
              <th class="row-4"><span>表具名称</span></th>
              <th class="row-4"><span>安装位置</span></th>
              <th class="row-2"><span>关联采集</span></th>
              <th class="row-2"><span>电源类型</span></th>
              <th class="row-1 th-space" align="right"><span>表级</span></th>
              <th class="row-1 th-space" align="right"><span>系数</span></th>
              <th class="row-1 th-space" align="right"><span>管径</span></th>
              <th class="row-1 th-space" align="right"><span>状态</span></th>
            </tr>
          </thead>

          <!-- 搜索 -->
          <tbody class="autoheight" :style="autoheight" v-if="searchVal">
            <tr v-for="(WaterMeter, index) in search" :key="index" @click="selectRadio(WaterMeter.drawingcode,index,WaterMeter.id)">
              <td class="row-1" align="center">
                <div :class="{'radioChecked':ind === index + 1}" class="radioCheck">
                  <!-- 选择框 -->
                </div>
              </td>
              <td class="row-1">
                <span>{{addPreZero(index + 1)}}</span>
              </td>
              <td class="row-2">
                <span><b>{{WaterMeter.drawingcode}}</b></span>
              </td>
              <td class="row-4">
                <span><b>{{WaterMeter.name}}</b></span>
              </td>
              <td class="row-4">
                <span>{{WaterMeter.site}}</span>
              </td>
              <td class="row-2" v-bind:title="WaterMeter.relevance">
                <span v-if="WaterMeter.relevance != null">{{relevanceCode(WaterMeter.relevance)}}</span>
              </td>
              <td class="row-2">
                <span>{{WaterMeter.supply}}</span>
              </td>
               <td class="row-1 td-space" align="right">
                <span>{{WaterMeter.level}}</span>
              </td>
              <td class="row-1 td-space" align="right">
                <span>{{WaterMeter.coefficient}}</span>
              </td>
              <td class="row-1 td-space" align="right">
                <span>{{WaterMeter.diameter}}</span>
              </td>
              <td class="row-1 td-space" align="right">
                <span v-if="WaterMeter.state == 0">激活</span>
                <span v-else-if="WaterMeter.state == 1">停用</span>
                <span v-else-if="WaterMeter.state == 2">删除</span>
              </td>
            </tr>
          </tbody>

          <tbody class="autoheight" :style="autoheight" v-else>
            <tr v-for="(WaterMeter, index) in WaterMeterList" :key="index" @click="selectRadio(WaterMeter.drawingcode,index,WaterMeter.id)">
              <td class="row-1" align="center">
                <div :class="{'radioChecked':ind === index + 1}" class="radioCheck">
                  <!-- 选择框 -->
                </div>
              </td>
              <td class="row-1">
                <span>{{addPreZero(index + 1)}}</span>
              </td>
              <td class="row-2">
                <span><b>{{WaterMeter.drawingcode}}</b></span>
              </td>
              <td class="row-4">
                <span><b>{{WaterMeter.name}}</b></span>
              </td>
              <td class="row-4">
                <span>{{WaterMeter.site}}</span>
              </td>
              <td class="row-2" v-bind:title="WaterMeter.relevance">
                <span v-if="WaterMeter.relevance != null">{{relevanceCode(WaterMeter.relevance)}}</span>
              </td>
              <td class="row-2">
                <span>{{WaterMeter.supply}}</span>
              </td>
               <td class="row-1 td-space" align="right">
                <span>{{WaterMeter.level}}</span>
              </td>
              <td class="row-1 td-space" align="right">
                <span>{{WaterMeter.coefficient}}</span>
              </td>
              <td class="row-1 td-space" align="right">
                <span>{{WaterMeter.diameter}}</span>
              </td>
              <td class="row-1 td-space" align="right">
                <span v-if="WaterMeter.state == 0">激活</span>
                <span v-else-if="WaterMeter.state == 1">停用</span>
                <span v-else-if="WaterMeter.state == 2">删除</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer>
        <div slot="footer-msg" class="footer-msg"></div>
      </Footer>
    </div>
  </div>
</template>

<script>
import Header from "./header.vue"
import Footer from "./footer.vue"

import AddGray from "../assets/add@24x24_gray.png"
import DetailGray from "../assets/detail@24x24_gray.png"
import EditGray from "../assets/edit@24x24_gray.png"
import DelGray from "../assets/del@24x24_gray.png"
import SearchGray from "../assets/search@24x24_gray.png"

import AddPurple from "../assets/add@24x24_purple.png"
import DetailPurple from "../assets/detail@24x24_purple.png"
import EditPurple from "../assets/edit@24x24_purple.png"
import DelPurple from "../assets/del@24x24_purple.png"
import SearchPurple from "../assets/search@24x24_Purple.png"

import Bus from "../static/bus.js"
// import $ from "../static/jquery-vendor.js"
// import {mapGetters, mapActions} from 'vuex'



export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      WaterMeterList: [],
      Operation: "修改",
      isActive: -1,
      check: "",
      ind: 0,
      searchVal: "",
      DrawingNumber: "",
      AssociationCollect: "",
      checkID: "",
      // inputCss: false,

      overAddPurple: AddPurple,
      outAddGray: AddGray,

      overDetailPurple: DetailPurple,
      outDetailGray: DetailGray,

      overEditPurple: EditPurple,
      outEditGray: EditGray,

      overDelPurple: DelPurple,
      outDelGray: DelGray,

      overSearchPurple: SearchPurple,
      outSearchGray: SearchGray,

      AddGray,
      DetailGray,
      EditGray,
      DelGray,
      SearchGray,

      autoheight:{
　　　　　　height:''
　　　 },

      WaterCollectList: [],

      // shangyy: false,
      // Y: 0,
    }
  },



  // 在实例创建完成后被立即调用
  created() {
    // 实例创建完成后为window添加resize(调整)事件
    window.addEventListener('resize', this.getHeight)
    // window.addEventListener('mousewheel',this.handleScroll,false)
    this.getHeight()
  },



  // 在请求执行成功后执行回调函数中的内容，回调函数处于其它函数的内部this不会与任何对象绑定，为undefined:

  // 将指向vue对象的this赋值给外部方法定义的属性，然后在内部方法中使用该属性
  // mounted: function() {
  //   var _this = this
  //   this.$ajax({
  //     method: "post",
  //     url: "/watermeter"
  //     // data: {}
  //   })
  //     .then(function(response) {
  //       _this.WaterMeterList = response.data
  //       console.log(_this.WaterMeterList)
  //     })
  //     .catch(function(error) {
  //       console.log(error)
  //     })
  // }

  // 使用箭头函数
  mounted: function() {
    // 获取采集
    this.$ajax({
      method: "post",
      url: "/watercollect"
    })
      .then(response => {
        this.WaterCollectList = response.data
      })
      .catch(error => {
        console.log(error)
      })
    
    // 获取表具
    this.$ajax({
      method: "post",
      url: "/watermeter"
    })
      .then(response => {
        // this.WaterMeterList = response.data
        for(let i=0;i<response.data.length;i++){
          if(response.data[i].state !== 2){
            this.WaterMeterList.push(response.data[i])
          }
        }
      })
      .catch(error => {
        console.log(error)
      })   
  },



  methods: {
    // 获得设备激活或停用状态数量
    activateNum() {    
      var activateNum = 0
      for(var i=0; i<this.WaterMeterList.length; i++){
        if(this.WaterMeterList[i].state == 0){
          activateNum++
        }    
      }       
      return activateNum
    },
    disableNum() {
      var disableNum = 0
      for(var i=0; i<this.WaterMeterList.length; i++){
        if(this.WaterMeterList[i].state == 1){
          disableNum++
        }    
      }       
      return disableNum
    },
    relevance() {
      var relevance = 0
      for(var i=0; i<this.WaterMeterList.length; i++){
        if(this.WaterMeterList[i].relevance == ""){
          relevance++
        }    
      }       
      return relevance
    },
    relevanceCode(relevance) {   
      return relevance.split(' ')[0]
    },

    // Focus() {
    //   this.inputCss = true
    // },
    // loseFocus() {
    //   this.inputCss = false
    // },

    // 补零
    addPreZero(index) {
      return ("00" + index).slice(-3)
    },

    selectRadio: function(DN, IN, ID) {
      // Bus.$emit('val', DN)
      if(this.ind != 0 && this.ind == IN + 1){
        this.ind = ""
        this.check = ""
        this.checkID = ""
      }else{
        this.ind = IN + 1
        this.check = DN
        this.checkID = ID
      }
    },

    // 添加新设备
    addNewMeter: function() {
      this.$router.push({
        path: "/watermeter/add/"
      })
    },

    // 详情页
    detail: function() {
      if (this.check == "") {
        alert("请选择一个表具进行查看")
        return
      } else {
        this.$router.push({
          path: '/watermeter/detail',
          query: { drawingcode: this.check, id: this.checkID, }
        })
      }
    },

    // 修改
    edit: function() {
      if (this.check == "") {
        alert("请选择一个表具进行修改");
        return
      } else {
        this.$router.push({
          path: '/watermeter/edit/',
          query: { drawingcode: this.check, id: this.checkID, }
        })
      }
    },

    // 删除
    del: function() {
      if(this.checkID !== ''){
        this.$ajax({
        method: "post",
        url: "/watermeter/del",
        data: {
          delID: this.checkID,
          state: "2",
        }
      })
        .then(response => {
          alert("删除成功")
          this.$router.go(0)
        })
        .catch(error => {
          console.log(error)
        })
      }else{
        alert('请选择一个表具')
      }
    },

    // 自动设置.content的高度
    getHeight() {
      this.autoheight.height = window.innerHeight-400+'px'
    },

    // 滚动事件
    handleScroll(e) {
      // if(e.deltaY){
      //   if(e.deltaY>0) {
      //     console.log("1")
      //   }else if(e.deltaY<0) {
      //     console.log("2")
      //   }
      // }else{
      //   console.log("3")
      // }
      
      // this.Y=0
      // if(e.deltaY>0){
      //   this.shangyy = !this.shangyy
      //   console.log("aaa")
      //   setTimeout(function(){
      //       this.shangyy = false
      //       console.log(this.shangyy)
      //     },1000)
      //   // this.Y = 1
      // }else if(e.deltaY<0) {
      //   this.Y = 2
      // }
      // console.log(this.Y)
      // 
      // else if (this.Y < 1) {
      //   this.shangyy = false
      // }else if (this.Y = 0) {
      //   this.shangyy = false
      // }
      // if(document.getElementsByTagName("li").length == 1){   //此处决定无论一次滚轮滚动的距离是多少，此事件都得等上次滚动结束，才会执行本次
      //      this.isShow = false
      //       setTimeout(() => {
      //           this.isShow = true
      //           ++ this.nowIndex
      //           if(this.nowIndex == 3){
      //           this.nowIndex = 0
      //       }
      //       }, 10)
      //   }
      // console.log(direction)
    }
  },

  watch: {
    
  },

  computed: {
    // 逻辑-->升序降序排列  false: 默认从小到大  true：默认从大到小
    // 判断，如果要letter不为空，说明要进行排序
    // if(this.letter != ''){
    //     arrByZM.sort(function( a , b){
    //         if(_this.original){
    //             return b[_this.letter] - a[_this.letter];
    //         }else{
    //             return a[_this.letter] - b[_this.letter];
    //         }
    //     });
    // }
    // 一定要记得返回筛选后的数据
    search: function() {
      // 逻辑-->根据input的value值筛选WaterMeterList中的数据
      // 声明一个空数组来存放数据
      var waterMeterListArr = []
      for (var i = 0; i < this.WaterMeterList.length; i++) {
        // for循环数据中的每一项（根据name值）
        if (this.WaterMeterList[i].drawingcode.indexOf(this.searchVal.toUpperCase()) != -1) {
          // 判断输入框中的值是否可以匹配到数据，如果匹配成功
          // 向空数组中添加数据
          waterMeterListArr.push(this.WaterMeterList[i])
        }
      }
      return waterMeterListArr
    }
  },
  


  // 实例销毁后调用 Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
  destroyed() {
    // 实例销毁后为window移除resize(调整)事件
    window.removeEventListener('resize', this.getHeight)
    window.removeEventListener('mousewheel',this.handleScroll,false)
  },



  filters: {
    
  },
}
</script>

<style>
.a {
  box-shadow:inset 0px 15px 10px -15px #000;
  background-color: hotpink; 
}
</style>

