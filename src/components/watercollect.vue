<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        <div class="search" slot="search">
          <img :src="IconSearch">
          <input
            type="text"
            autocomplete="off"
            class="search-box"
            placeholder="通过通讯编号搜索EMB..."
            v-model="searchVal"
          >
          <!-- <button type="submit">搜索</button> -->
        </div>
      </Header>
      <div>
        <table>
          <thead>
            <tr>
              <th class="row-4">备注</th>
              <th class="row-1" align="center"></th>
              <th class="row-1"></th>
              <th class="row-2">通讯编号</th>
              <th class="row-4">硬件编号</th>
              <th class="row-6">安装位置</th>
              <th class="row-2">挂载数量</th>
              <!-- <th class="row-1" align="right">系数</th>
              <th class="row-1" align="right">管径</th>
              <th class="row-1" align="right">表级</th> -->
            </tr>
          </thead>
          <tbody v-if="searchVal">
            <tr>
              <td class="row-4 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-6 row-empty"></td>
              <th class="row-2 row-empty"></th>
              <!-- <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td> -->
            </tr>
            <!-- Nothing more... -->
            <tr v-for="(WaterCollect, index) in WaterCollectList" :key="index">
              <td class="row-4 text-gray" v-bind:title="WaterCollect.Note">
                <span>{{WaterCollect.Note}}</span>
              </td>
              <td class="row-1" align="center">
                <div
                  :class="{'radioChecked':ind === index}"
                  class="radioCheck"
                  @click="selectRadio(WaterCollect.CommunicationNumber, index, WaterCollect.MeterID)"
                ></div>
              </td>
              <td class="row-1 text-bottom">{{addPreZero(index + 1)}}</td>
              <td class="row-2 text-bottom text-border">
                <span>{{WaterCollect.CommunicationNumber}}</span>
              </td>
              <td class="row-4 text-bottom text-border">
                <span>{{WaterCollect.HardwareSerialNumber}}</span>
              </td>
              <td class="row-6 text-bottom">
                <span>{{WaterCollect.InstallationSite}}</span>
              </td>
              <td class="row-2 text-bottom">
                <span>{{WaterCollect.AssociationMeter}}</span>
              </td>
            </tr>
            <!-- Nothing more... -->
            <tr>
              <td class="row-4 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-6 row-empty"></td>
              <td class="row-2 row-empty"></td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td class="row-4 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-6 row-empty"></td>
              <th class="row-2 row-empty"></th>
            </tr>
            <!-- Nothing more... -->
            <tr v-for="(WaterCollect, index) in WaterCollectList" :key="index">
              <td class="row-4 text-gray" v-bind:title="WaterCollect.Note">
                <span>{{WaterCollect.Note}}</span>
              </td>
              <td class="row-1" align="center">
                <div
                  :class="{'radioChecked':ind === index}"
                  class="radioCheck"
                  @click="selectRadio(WaterCollect.CommunicationNumber,index,WaterCollect.MeterID)"
                ></div>
              </td>
              <td class="row-1 text-bottom">{{addPreZero(index + 1)}}</td>
              <td class="row-2 text-bottom text-border">
                <span>{{WaterCollect.CommunicationNumber}}</span>
              </td>
              <td class="row-4 text-bottom text-border">
                <span>{{WaterCollect.HardwareSerialNumber}}</span>
              </td>
              <td class="row-6 text-bottom">
                <span>{{WaterCollect.InstallationSite}}</span>
              </td>
              <td class="row-2 text-bottom">
                <span>{{WaterCollect.AssociationMeter}}</span>
              </td>
            </tr>
            <!-- Nothing more... -->
            <tr>
              <td class="row-4 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-6 row-empty"></td>
              <td class="row-2 row-empty"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <RightBar>
      <img slot="add-button" class="button-normal" :src="IconAdd" @click="addNewMeter" title="新增">
      <!-- <img slot="back-button" class="button-normal" :src="IconBack" @click="backPage" title="返回上一页"> -->
      <img
        slot="detail-button"
        class="button-normal button-normal-margin"
        :src="IconDetail"
        @click="detail"
        title="详情"
      >
      <img
        slot="edit-button"
        class="button-normal button-normal-margin"
        :src="IconEdit"
        @click="edit"
        title="修改"
      >
      <img
        slot="delete-button"
        class="button-normal button-normal-margin"
        :src="IconDel"
        @click="del"
        title="删除"
      >
    </RightBar>
  </div>
</template>

<script>
import Header from "./header.vue"
import RightBar from "./rightbar.vue"

import IconAdd from "../assets/add@32x32_black.png"
import IconBack from "../assets/back@32x32_black.png"
import IconDetail from "../assets/detail@32x32_black.png"
import IconEdit from "../assets/edit@32x32_black.png"
import IconDel from "../assets/del@32x32_black.png"
import IconSearch from "../assets/search@32x32_black.png"

import Bus from "../static/bus.js"
import $ from "../static/jquery-vendor.js"

export default {
  components: {
    Header,
    RightBar
  },
  data() {
    return {
      WaterCollectList: [],
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

      IconAdd,
      IconBack,
      IconDetail,
      IconEdit,
      IconDel,
      IconSearch
    }
  },
  mounted: function() {
    // 使用箭头函数
    this.$ajax({
      method: "post",
      url: "/watercollect"
      // data: {}
    })
      .then(response => {
        this.WaterCollectList = response.data
        // console.log(this.WaterCollectList)
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
    // 点击修改
    alter(index) {
      alert(
        "/WaterCollect/alter?DrawingNumber=" + this.WaterCollectList[index].DrawingNumber
      )
    },
    selectRadio: function(checkCN, IN, checkID) {
      // Bus.$emit('val', DN)
      this.checkCN = checkCN
      this.ind = IN
      this.checkID = checkID
    },
    // 添加新设备
     addNewMeter: function() {
      this.$router.push({
        path: "/watercollect/add"
        // query: { id: this.ind, dn: this.check }
      })
    },
    // 详情页
    detail: function() {
      if (this.checkID == "") {
        alert("请选择一个表具进行查看")
        return
      } else {
        // location.href = '/#/WaterCollect/detail/' + this.select
        this.$router.push({
          path: "/watercollect/detail/",
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
          path: "/WaterCollect/edit/",
          query: {id: this.checkID }
          //  id: this.ind, 
        })
      }
    },
    // 删除
    del: function() {
      if(this.checkID !== '') {
        this.$ajax({
        method: "post",
        url: "/watercollect/delete",
        data: {
          delID: this.checkID
        }
      })
        .then(response => {
          alert("删除成功")
          this.$router.go(0)
        })
        .catch(error => {
          console.log(error)
        })
      }else {
        alert('请选择一个表具')
      }
    },
    // 返回上一页
    // backPage: function() {
    //   this.$router.go(-1)
    // }
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
        if (this.WaterCollectList[i].CommunicationNumber.toString().indexOf(this.searchVal) != -1) {
          // 判断输入框中的值是否可以匹配到数据，如果匹配成功
          // 向空数组中添加数据
          WaterCollectListArr.push(this.WaterCollectList[i])
        }
      }
      return WaterCollectListArr
    }
  }
}
</script>

<style>

</style>

