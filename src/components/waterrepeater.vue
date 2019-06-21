<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        <!-- <div slot="screening-area">
          
        </div> -->
<!-- 
        <div slot="title-area">
          
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
      <div class="autoheight" :style="autoheight">
        <table>
          <thead>
            <tr>
              <th class="row-1" align="center"></th>
              <th class="row-1"></th>
              <th class="row-3"><span>通讯编号</span></th>
              <th class="row-5"><span>硬件编号</span></th>
              <th class="row-5"><span>安装位置</span></th>
              <th class="row-2"><span>关联集中器</span></th>
              <th class="row-2"><span>电源类型</span></th>    
              <th class="row-1" align="right"><span>状态</span></th>
            </tr>
          </thead>
          <tbody v-if="searchVal">
            <tr v-for="(WaterCollect, index) in search" :key="index" @click="selectRadio(WaterCollect.communicationcode,index,WaterCollect.id)">
              <td class="row-1" align="center">
                <div :class="{'radioChecked':ind === index + 1}" class="radioCheck">
                  <!-- 选择框 -->
                </div>
              </td>
              <td class="row-1">
                <span>{{addPreZero(index + 1)}}</span>
              </td>
              <td class="row-3 text-border">
                <span>{{WaterCollect.communicationcode}}</span>
              </td>
              <td class="row-5 text-border">
                <span>{{WaterCollect.equipmentcode}}</span>
              </td>
              <td class="row-5">
                <span>{{WaterCollect.site}}</span>
              </td>
              <td class="row-2">
                <span>{{WaterRepeater.relevance}}</span>
              </td>
              <td class="row-2" align="right">
                <span>{{WaterCollect.supply}}</span>
              </td>
              <td class="row-1" align="right">
                <span v-if="WaterCollect.state == 0">激活</span>
                <span v-else-if="WaterCollect.state == 1">停用</span>
                <span v-else-if="WaterCollect.state == 2">删除</span>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr v-for="(WaterRepeater, index) in waterRepeaterList" :key="index" @click="selectRadio(WaterRepeater.communicationcode,index,WaterRepeater.id)">
              <td class="row-1" align="center">
                <div :class="{'radioChecked':ind === index + 1}" class="radioCheck">
                  <!-- 选择框 -->
                </div>
              </td>
              <td class="row-1">
                <span>{{addPreZero(index + 1)}}</span>
              </td>
              <td class="row-3 text-border">
                <span>{{WaterRepeater.communicationcode}}</span>
              </td>
              <td class="row-5 text-border">
                <span>{{WaterRepeater.equipmentcode}}</span>
              </td>
              <td class="row-5">
                <span>{{WaterRepeater.site}}</span>
              </td>
              <td class="row-2" v-bind:title="WaterRepeater.relevance">
                <span v-if="WaterRepeater.relevance != null">{{relevanceCode(WaterRepeater.relevance)}}</span>
                <!-- <span>{{WaterRepeater.relevance}}</span> -->
              </td>
              <td class="row-2">
                <span>{{WaterRepeater.supply}}</span>
              </td>
              <td class="row-1" align="right">
                <span v-if="WaterRepeater.state == 0">激活</span>
                <span v-else-if="WaterRepeater.state == 1">停用</span>
                <span v-else-if="WaterRepeater.state == 2">删除</span>
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
import IconBack from "../assets/back@32x32_black.png"
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
import $ from "../static/jquery-vendor.js"

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      waterRepeaterList: [],
      waterCollectList: [],
      NothingMore: "Nothing more...",
      Operation: "修改",
      isActive: -1,
      check: "",
      ind: "",
      searchVal: "",
      DrawingNumber: "",
      AssociationCollect: "",
      checkCN: "",
      checkID: "",

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
      IconBack,
      DetailGray,
      EditGray,
      DelGray,
      SearchGray,

      autoheight:{
　　　　　　height:''
　　　 },
    }
  },
  mounted: function() {
    // 使用箭头函数
    this.$ajax({
      method: "post",
      url: "/waterrepeater"
    })
      .then(response => {
        // this.waterRepeaterList = response.data
        for(let i=0;i<response.data.length;i++){
          if(response.data[i].state !== 2){
            this.waterRepeaterList.push(response.data[i])
          }
        }
      })
      .catch(error => {
        console.log(error)
      })

    // 获得采集列表
    this.$ajax({
      method: "post",
      url: "/watercollect"
    })
      .then(response => {
        this.waterCollectList = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    // 补零
    addPreZero(index) {
      return ("00" + index).slice(-3)
    },
    relevanceCode(relevance) {   
      return relevance.split(' ')[0]
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
        path: "/waterrepeater/add"
        // query: { id: this.ind, dn: this.check }
      })
    },
    // 详情页
    detail: function() {
      if (this.checkID == "") {
        alert("请选择一个表具进行查看")
        return
      } else {
        this.$router.push({
          path: "/waterrepeater/detail/",
          query: { id: this.checkID }
        })
      }
    },
    // 修改
    edit: function() {
      if (this.checkID == "") {
        alert("请选择一个表具进行修改");
        return
      } else {
        this.$router.push({
          path: "/waterrepeater/edit/",
          query: { communicationcode: this.check, id: this.checkID }
          //  id: this.ind, 
        })
      }
    },
    // 删除
    del: function() {
      if(this.checkID !== '') {
        this.$ajax({
          method: "post",
          url: "/waterrepeater/del",
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

        // 从采集relevance_di与当前采集id对应的采集中删除
        for(let i=0;i<this.waterCollectList.length;i++){
          // 如果水表relevance_id的值等于当前采集id
          if(this.waterCollectList[i].relevance_id == this.checkID){
            // 清空这个水表中的relevance的值
            this.$ajax({
              method: "post",
              url: "/watercollect/empty/relevance",
              data: {
                id: this.waterCollectList[i].id,
                relevance: "",
                relevance_id: "",
              }
            })
              .then(response => {
                console.log('s')
              })
              .catch(error => {
                console.log(error)
              })
          }
        }
      }else {
        alert('请选择一个表具')
      }
    },
    getHeight(){
      this.autoheight.height = window.innerHeight-296+'px'
    },
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
      // 逻辑-->根据input的value值筛选WaterCollectList中的数据
      // 声明一个空数组来存放数据
      var WaterCollectListArr = []
      for (var i = 0; i < this.WaterCollectList.length; i++) {
        // for循环数据中的每一项（根据name值）
        if (this.WaterCollectList[i].communicationcode.toString().indexOf(this.searchVal) != -1) {
          // 判断输入框中的值是否可以匹配到数据，如果匹配成功
          // 向空数组中添加数据
          WaterCollectListArr.push(this.WaterCollectList[i])
        }
      }
      return WaterCollectListArr
    }
  },
  // 在实例创建完成后被立即调用
  created() {
    // 实例创建完成后为window添加resize(调整)事件
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
  },
  // 实例销毁后调用 Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
  destroyed() {
    // 实例销毁后为window移除resize(调整)事件
    window.removeEventListener('resize', this.getHeight)
  },
}
</script>

<style>

</style>

