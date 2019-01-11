<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        
      </Header>
      <div class="main row-20">
        <div class="main-title">
          <div>
            <span>水表表具设备-表具详情</span>
          </div>
        </div>
        <div class="main-content">
          <div class="main-content-list">
            <div>
              <div>
                <span>01</span>
              </div>
              <div>
                <p>图纸编号</p>
                <span>{{WaterMeterDetail.DrawingNumber}}</span>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>表具名称</p>
                <span>{{WaterMeterDetail.WaterMeterName}}</span>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>关联采集</p>
                <span>{{WaterMeterDetail.AssociationCollect | empty}}</span>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>系数</p>
                <span>{{WaterMeterDetail.Coefficient}}</span>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>管径</p>
                <span>{{WaterMeterDetail.PipeDiameter}}</span>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>表级</p>
                <span>{{WaterMeterDetail.WaterMeterLevel}}</span>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>02</span>
              </div>
              <div>
                <p>能源数据编号</p>
                <span>{{WaterMeterDetail.EnergyCode | empty}}</span>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>上级表</p>
                <span>{{WaterMeterDetail.SuperiorMeter | empty}}</span>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>电源类型</p>
                <span>{{WaterMeterDetail.PowerType | empty}}</span>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>表具用途</p>
                <span>{{WaterMeterDetail.MeterUse | empty}}</span>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>所属部门</p>
                <span>{{WaterMeterDetail.SubordinateDepartments | empty}}</span>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>03</span>
              </div>
              <div>
                <p>备注</p>
                <span>{{WaterMeterDetail.Note | empty}}</span>
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
      DrawingNumber: this.$route.query.dn,
      index: this.$route.query.id,

      IconBack,
      IconDetail,
    }
  },
  mounted: function() {
    this.$ajax({
      method: "post",
      url: "/watermeter/detail",
      data: {
        DrawingNumber: this.DrawingNumber
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
      return value?value:'no more...'
    }
  },
  created() {
    // this.id = this.$route.query.id;
  }
}
</script>

<style>

</style>