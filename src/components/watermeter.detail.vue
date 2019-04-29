<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        <div class="header-title" slot="search">
          <p>水表表具设备 -- 表具详情</p>
        </div>
      </Header>
      <div class="main row-20">
        <!-- <div class="main-title">
          <div>
            <span>水表表具设备-表具详情</span>
          </div>
        </div> -->
        <div class="main-content">
          <div class="main-content-list">
            <div>
              <div>
                <span>能源数据编号</span>
              </div>
              <div>
                <span>{{WaterMeterDetail.energycode}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>图纸编号</span>
              </div>
              <div>
                <span>{{WaterMeterDetail.drawingcode}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>表具名称</span>
              </div>
              <div>
                <span>{{WaterMeterDetail.name}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>安装位置</span>
              </div>
              <div>
                <span>{{WaterMeterDetail.site}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>关联采集</span>
              </div>
              <div>
                <span>{{WaterMeterDetail.relevance | empty}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>上级表</span>
              </div>
              <div>               
                <span>{{WaterMeterDetail.superior}}</span>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>所属楼宇</span>
              </div>
              <div>               
                <span>{{WaterMeterDetail.build}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>所属部门</span>
              </div>
              <div>
                <span>{{WaterMeterDetail.department}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>所属校区</span>
              </div>
              <div>               
                <span>{{WaterMeterDetail.school}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>用途</span>
              </div>
              <div>
                <span>{{WaterMeterDetail.purpose}}</span>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>系数</span>
              </div>
              <div>
                <span>{{WaterMeterDetail.coefficient}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>管径</span>
              </div>
              <div>    
                <span>{{WaterMeterDetail.diameter}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>表级</span>
              </div>
              <div>
                <span>{{WaterMeterDetail.level}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>电源</span>
              </div>
              <div>        
                <span>{{WaterMeterDetail.supply | empty}}</span>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>状态</span>
              </div>
              <div>
                <span v-if="WaterMeterDetail.state == 0">激活</span>
                <span v-else-if="WaterMeterDetail.state == 1">停用</span>
                <span v-else-if="WaterMeterDetail.state == 2">删除</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RightBar>
      <img slot="back-button" class="button-normal" :src="IconBack" @click="backPage">
    </RightBar>
  </div>
</template>

<script>
import Header from "./header.vue";
import RightBar from "./rightbar.vue";

import IconBack from "../assets/back@32x32_black.png";
import IconDetail from "../assets/detail@32x32_black.png"

export default {
  components: {
    Header,
    RightBar
  },
  data() {
    return {
      WaterMeterDetail: "",
      checkedcode: this.$route.query.drawingcode,
      // index: this.$route.query.id,

      IconBack,
      IconDetail,
    }
  },
  mounted: function() {
    this.$ajax({
      method: "post",
      url: "/watermeter/detail",
      data: {
        checkedcode: this.checkedcode
      }
    })
      .then(response => {
        this.WaterMeterDetail = response.data[0];
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    backPage: function() {
      // 返回上一页重新加载页面
      this.$router.go(-1)
      // 本地刷新
      // location.reload();
    },
    // aa: function() {
    //   alert(this.index + '1')
    // },
    addPreZero(index) {
      return ("00" + index).slice(-3)
    },
  },
  filters: {
    empty: function (value) {
      return value?value:'...'
    }
  },
  created() {
    // this.id = this.$route.query.id;
  }
}
</script>

<style>

</style>