<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        <div slot="search" class="search">
          <div>
            <img :src="IconSearch">
          </div>
          <input type="text"
            autocomplete="off"
            placeholder="通过图纸编号搜索EMB..."
            v-model="searchVal"
          >
        </div>
        <div class="add-button" slot="add-button" @click="addNewMeter">
          <div>
            <img :src="IconAdd" title="新增">
          </div>
          <span>添加设备</span>
        </div>
        <div class="detail-button" slot="detail-button" @click="detail">
          <div>
            <img :src="IconDetail" title="详情">
          </div>
          <span>详细信息</span>
        </div>
        <div class="edit-button" slot="edit-button" @click="edit">
          <div>
            <img :src="IconEdit" title="修改">
          </div>
          <span>修改</span>
        </div>
        <div class="delete-button" slot="delete-button" @click="del">
          <div>
            <img :src="IconDel" title="删除">
          </div>
          <span>删除</span>
        </div>
        
      </Header>
      <div>
        <table>
          <thead>
            <tr>
              <!-- <th class="row-3">备注</th> -->
              <th class="row-1" align="center"></th>
              <th class="row-1 table-dividers"></th>
              <th class="row-2 table-dividers"><span>图纸编号</span></th>
              <th class="row-4 table-dividers"><span>表具名称</span></th>
              <th class="row-4 table-dividers"><span>安装位置</span></th>
              <th class="row-2 table-dividers"><span>关联采集</span></th>
              <th class="row-2 table-dividers"><span>电源</span></th>
              <th class="row-1 table-dividers" align="right"><span>表级</span></th>
              <th class="row-1 table-dividers" align="right"><span>系数</span></th>
              <th class="row-1 table-dividers" align="right"><span>管径</span></th>
              <th class="row-1" align="right"><span>状态</span></th>
            </tr>
          </thead>
          <tbody v-if="searchVal">
            <tr>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
            </tr>
            <!-- Nothing more... -->
            <tr v-for="(WaterMeter, index) in search" :key="index" @click="selectRadio(WaterMeter.drawingcode,index,WaterMeter.id)">
              <!-- <td class="row-3 text-gray" v-bind:title="WaterMeter.remark">
                <span>{{WaterMeter.remark}}</span>
              </td> -->
              <td class="row-1" align="center">
                <div
                  :class="{'radioChecked':ind === index}"
                  class="radioCheck"
                  
                ></div>
              </td>
              <td class="row-1 text-bottom">
                <span>{{addPreZero(index + 1)}}</span>
              </td>
              <td class="row-2 text-bottom text-border">
                <span>{{WaterMeter.drawingcode}}</span>
              </td>
              <td class="row-4 text-bottom text-border">
                <span>{{WaterMeter.name}}</span>
              </td>
              <td class="row-4 text-bottom">
                <span>{{WaterMeter.site}}</span>
              </td>
              <td class="row-2 text-bottom">
                <span>{{WaterMeter.relevance}}</span>
              </td>
              <td class="row-2 text-bottom">
                <span>{{WaterMeter.supply}}</span>
              </td>
               <td class="row-1 text-bottom" align="right">
                <span>{{WaterMeter.level}}</span>
              </td>
              <td class="row-1 text-bottom" align="right">
                <span>{{WaterMeter.coefficient}}</span>
              </td>
              <td class="row-1 text-bottom" align="right">
                <span>{{WaterMeter.diameter}}</span>
              </td>
              <td class="row-1 text-bottom" align="right">
                <span v-if="WaterMeter.state == 0">激活</span>
                <span v-else-if="WaterMeter.state == 1">停用</span>
                <span v-else-if="WaterMeter.state == 2">删除</span>
              </td>
            </tr>
            <!-- Nothing more... -->
            <tr>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
            </tr>
          </tbody>
          <tbody v-else>
            <!-- <tr>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
            </tr> -->
            <!-- Nothing more... -->
            <tr v-for="(WaterMeter, index) in WaterMeterList" :key="index" @click="selectRadio(WaterMeter.drawingcode,index,WaterMeter.id)">
              <!-- <td class="row-3 text-gray" v-bind:title="WaterMeter.remark">
                <span>{{WaterMeter.remark}}</span>
              </td> -->
              <td class="row-1" align="center">
                <div
                  :class="{'radioChecked':ind === index}"
                  class="radioCheck"
                  
                ></div>
              </td>
              <td class="row-1 text-bottom">
                <span>{{addPreZero(index + 1)}}</span>
              </td>
              <td class="row-2 text-border">
                <span>{{WaterMeter.drawingcode}}</span>
              </td>
              <td class="row-4 text-border">
                <span>{{WaterMeter.name}}</span>
              </td>
              <td class="row-4">
                <span>{{WaterMeter.site}}</span>
              </td>
              <td class="row-2">
                <span>{{WaterMeter.relevance}}</span>
              </td>
              <td class="row-2">
                <span>{{WaterMeter.supply}}</span>
              </td>
               <td class="row-1" align="right">
                <span>{{WaterMeter.level}}</span>
              </td>
              <td class="row-1" align="right">
                <span>{{WaterMeter.coefficient}}</span>
              </td>
              <td class="row-1 text-bottom" align="right">
                <span>{{WaterMeter.diameter}}</span>
              </td>
              <td class="row-1 text-bottom" align="right">
                <span v-if="WaterMeter.state == 0">激活</span>
                <span v-else-if="WaterMeter.state == 1">停用</span>
                <span v-else-if="WaterMeter.state == 2">删除</span>
              </td>
            </tr>
            <!-- Nothing more... -->
            <!-- <tr>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>
    <!-- <RightBar>
      <img slot="add-button" class="button-normal" :src="IconAdd" @click="addNewMeter" title="新增">
      <img slot="back-button" class="button-normal" :src="IconBack" @click="backPage" title="返回上一页">
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
    </RightBar> -->
  </div>
</template>

<script>
import Header from "./header.vue"
// import RightBar from "./rightbar.vue"

import IconAdd from "../assets/add@24x24_gray.png"
import IconBack from "../assets/back@32x32_black.png"
import IconDetail from "../assets/detail@24x24_gray.png"
import IconEdit from "../assets/edit@24x24_gray.png"
import IconDel from "../assets/del@24x24_gray.png"
import IconSearch from "../assets/search@24x24_gray.png"

import Bus from "../static/bus.js"
import $ from "../static/jquery-vendor.js"

export default {
  components: {
    Header,
    // RightBar,
  },
  data() {
    return {
      WaterMeterList: [],
      NothingMore: "Nothing more...",
      Operation: "修改",
      isActive: -1,
      check: "",
      ind: "",
      searchVal: "",
      DrawingNumber: "",
      AssociationCollect: "",
      checkID: "",

      IconAdd,
      IconBack,
      IconDetail,
      IconEdit,
      IconDel,
      IconSearch,
    }
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
    this.$ajax({
      method: "post",
      url: "/watermeter/a"
      // data: {}
    })
      .then(response => {
        this.WaterMeterList = response.data
        // console.log(this.WaterMeterList)
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
    // // 点击修改
    // alter(index) {
    //   alert(
    //     "/watermeter/alter?DrawingNumber=" +
    //       this.WaterMeterList[index].DrawingNumber
    //   );
    //   // location.href = '/watermeter' + window.location.search + '?DrawingNumber=' + this.WaterMeterList[index].DrawingNumber
    // },
    // 鼠标移入修改
    // enterAlter(index) {
    //   this.isActive = index
    // },
    // 点击明细
    // detail(index) {
    //   // alert("/watermeter?DrawingNumber=" + this.WaterMeterList[index].DrawingNumber)
    //   // location.href = '/#/watermeter/detail/' + this.WaterMeterList[index].DrawingNumber
    //   // this.ind = index
    // },
    
    selectRadio: function(DN, IN, ID) {
      // Bus.$emit('val', DN)
      this.ind = IN
      this.check = DN
      this.checkID = ID
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
          query: { drawingcode: this.check }
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
          query: { drawingcode: this.check }
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
  }
}
</script>

<style>
.table-dividers {
  margin-right: 8px;
  border-right: 2px solid #eee;
}
</style>

