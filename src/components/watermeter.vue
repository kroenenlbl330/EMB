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
            placeholder="通过图纸编号搜索EMB..."
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
              <th class="row-2">图纸编号</th>
              <th class="row-4">表具名称</th>
              <th class="row-4">安装位置</th>
              <th class="row-2">关联采集</th>
              <th class="row-1" align="right">系数</th>
              <th class="row-1" align="right">管径</th>
              <th class="row-1" align="right">表级</th>
            </tr>
          </thead>
          <tbody v-if="searchVal">
            <tr>
              <td class="row-4 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <th class="row-2 row-empty"></th>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
            </tr>
            <!-- Nothing more... -->
            <tr v-for="(WaterMeter, index) in search" :key="index">
              <td class="row-4 text-gray" v-bind:title="WaterMeter.Note">
                <span>{{WaterMeter.Note}}</span>
              </td>
              <td class="row-1" align="center">
                <!-- <label>
                <input class="radio" type="radio" value="index" @click='selectRadio(WaterMeter.DrawingNumber)' hidden>
                <span></span>
                <span class="radioCheck" :class="{'radioChecked':ind === index}"></span>
                </label>-->
                <div
                  :class="{'radioChecked':ind === index}"
                  class="radioCheck"
                  @click="selectRadio(WaterMeter.DrawingNumber,index)"
                ></div>
              </td>
              <td class="row-1 text-bottom">{{addPreZero(index + 1)}}</td>
              <td class="row-2 text-bottom text-border">
                <span>{{WaterMeter.DrawingNumber}}</span>
              </td>
              <td class="row-4 text-bottom text-border">
                <span>{{WaterMeter.WaterMeterName}}</span>
              </td>
              <td class="row-4 text-bottom">
                <span>{{WaterMeter.InstallationSite}}</span>
              </td>
              <td class="row-2 text-bottom">
                <span>{{WaterMeter.AssociationCollect}}</span>
              </td>
              <td class="row-1 text-bottom" align="right">
                <span>{{WaterMeter.Coefficient}}</span>
              </td>
              <td class="row-1 text-bottom" align="right">
                <span>{{WaterMeter.PipeDiameter}}</span>
              </td>
              <td class="row-1 text-bottom" align="right">
                <span>{{WaterMeter.WaterMeterLevel}}</span>
              </td>
            </tr>
            <!-- Nothing more... -->
            <tr>
              <td class="row-4 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td class="row-4 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <th class="row-2 row-empty"></th>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
            </tr>
            <!-- Nothing more... -->
            <tr v-for="(WaterMeter, index) in WaterMeterList" :key="index">
              <td class="row-4 text-gray" v-bind:title="WaterMeter.Note">
                <span>{{WaterMeter.Note}}</span>
              </td>
              <td class="row-1" align="center">
                <!-- <label>
                  <input class="radio" type="radio" value="index" @click='selectRadio(WaterMeter.DrawingNumber)' hidden>
                  <span></span>
                  <span class="radioCheck" :class="{'radioChecked':ind === index}"></span>
                </label>-->
                <div
                  :class="{'radioChecked':ind === index}"
                  class="radioCheck"
                  @click="selectRadio(WaterMeter.DrawingNumber,index)"
                ></div>
              </td>
              <td class="row-1 text-bottom">{{addPreZero(index + 1)}}</td>
              <td class="row-2 text-bottom text-border">
                <span>{{WaterMeter.DrawingNumber}}</span>
              </td>
              <td class="row-4 text-bottom text-border">
                <span>{{WaterMeter.WaterMeterName}}</span>
              </td>
              <td class="row-4 text-bottom">
                <span>{{WaterMeter.InstallationSite}}</span>
              </td>
              <td class="row-2 text-bottom">
                <span>{{WaterMeter.AssociationCollect}}</span>
              </td>
              <td class="row-1 text-bottom" align="right">
                <span>{{WaterMeter.Coefficient}}</span>
              </td>
              <td class="row-1 text-bottom" align="right">
                <span>{{WaterMeter.PipeDiameter}}</span>
              </td>
              <td class="row-1 text-bottom" align="right">
                <span>{{WaterMeter.WaterMeterLevel}}</span>
              </td>
              <!-- <td class="row-1 alter" align="right" @click.stop='alter(index)'>
                <img class="alter" align="AbsMiddle" v-bind:src="edit" v-bind:title="Operation"/>
              </td>-->
            </tr>
            <!-- Nothing more... -->
            <tr>
              <td class="row-4 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-4 row-empty"></td>
              <td class="row-2 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
              <td class="row-1 row-empty"></td>
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
      WaterMeterList: [],
      NothingMore: "Nothing more...",
      Operation: "修改",
      isActive: -1,
      check: "",
      ind: "",
      searchVal: "",
      DrawingNumber: "",
      AssociationCollect: "",

      IconAdd,
      IconBack,
      IconDetail,
      IconEdit,
      IconDel,
      IconSearch
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
      url: "/watermeter"
      // data: {}
    })
      .then(response => {
        this.WaterMeterList = response.data;
        // console.log(this.WaterMeterList)
      })
      .catch(error => {
        console.log(error);
      });
  },

  methods: {
    // 补零
    addPreZero(index) {
      return ("00" + index).slice(-3);
    },
    // 点击修改
    alter(index) {
      alert(
        "/watermeter/alter?DrawingNumber=" +
          this.WaterMeterList[index].DrawingNumber
      );
      // location.href = '/watermeter' + window.location.search + '?DrawingNumber=' + this.WaterMeterList[index].DrawingNumber
    },
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
    // 添加新设备
    selectRadio: function(DN, IN) {
      // Bus.$emit('val', DN)
      this.ind = IN;
      this.check = DN;
    },
    addNewMeter: function() {
      this.$router.push({
        path: "/watermeter/add/"
        // query: { id: this.ind, dn: this.check }
      });
    },
    // 详情页
    detail: function() {
      if (this.check == "") {
        alert("请选择一个表具进行查看");
        return;
      } else {
        // location.href = '/#/watermeter/detail/' + this.select
        this.$router.push({
          path: '/watermeter/detail',
          query: { id: this.ind, dn: this.check }
        });
      }
    },
    // 修改
    edit: function() {
      if (this.check == "") {
        alert("请选择一个表具进行修改");
        return;
      } else {
        this.$router.push({
          path: '/watermeter/edit/',
          query: { id: this.ind, dn: this.check }
        });
      }
    },
    // 删除
    del: function() {
      this.$ajax({
        method: "post",
        url: "/watermeter/del",
        data: {
          DelData: this.check
        }
      })
        .then(response => {
          alert("删除成功");
          location.reload();
        })
        .catch(error => {
          console.log(error);
        });
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
      // 逻辑-->根据input的value值筛选WaterMeterList中的数据
      // 声明一个空数组来存放数据
      var waterMeterListArr = []
      for (var i = 0; i < this.WaterMeterList.length; i++) {
        // for循环数据中的每一项（根据name值）
        if (this.WaterMeterList[i].DrawingNumber.indexOf(this.searchVal.toUpperCase()) != -1) {
          // 判断输入框中的值是否可以匹配到数据，如果匹配成功
          // 向空数组中添加数据
          waterMeterListArr.push(this.WaterMeterList[i])
        }
      }
      return waterMeterListArr;
    }
  }
}
</script>

<style>
table > tbody > tr > td:nth-child(n + 7) span,
table > thead > tr > th:nth-child(n + 7) {
  padding-right: 24px;
}

.water-meter-name {
  font-weight: bolder;
}

.water-meter-note {
  color: var(--gray-text);
}

.empty-list {
  font-size: 1rem;
  color: var(--prompt);
}

/* .icon {
  width: 18px;
  height: 18px;
}

.alter img {
  color: #294cb0;
  cursor: pointer;
  border-bottom: none;
} */

/* input[type=radio] + span {
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: var(--gray);
  vertical-align: middle;
}

label:hover{
  border-bottom: none;
}

input[type=radio]:checked + span {
  background-color: var(--black);
} */

.radioCheck {
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: var(--gray);
  vertical-align: middle;
}

.radioCheck:hover {
  border-bottom: none;
  cursor: pointer;
}

.radioChecked {
  background-color: var(--black) !important;
}

.button-normal-margin {
  margin-bottom: 24px;
}

/* 搜索 */
.search {
  display: flex;
  /* justify-content: flex-start;
  align-items: center; */
  margin-bottom: 8px;
}

.search input {
  min-width: 312px;
  border: 0px;
  outline: none;
  height: 32px;
  font-size: 1.375rem;
  line-height: 32px;
  caret-color: var(--black);
  vertical-align: bottom;
}

.search img{
  width: 32px;
}

.search button {
  height: 32px;
  border: none;
  /* background-color: var(--white); */
  padding: 0 8px;
}
</style>

