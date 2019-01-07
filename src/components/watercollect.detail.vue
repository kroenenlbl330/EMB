<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        
      </Header>
      <div class="main-content">
        <div class="main-lift row-6">
          <div class="main-lift-title">
              
          </div>
        </div>
        <div class="main-right row-14">
          <div class="main-right-title">
            <span>{{addPreZero(index + 1)}}&nbsp;设备详情</span>
          </div>
          <div class="main-right-box" align="left">
            <div class="main-right-list">
              <div>
                <!-- first div -->
              </div>
              <div class="main-right-content">
                <p>主要</p>
                <div>
                  <p>图纸编号</p>
                  <span>{{WaterCollectDetail.CommunicationNumber}}</span>
                </div>
                <div>
                  <p>表具名称</p>
                  <span>{{WaterCollectDetail.InstallationSite}}</span>
                </div>
                <div>
                  <p>关联采集</p>
                  <span>{{WaterCollectDetail.AssociationMeter | empty}}</span>
                </div>
              </div>
              <div class="main-right-content">
                <p>其他</p>
                <div>
                  <p>能源数据编号</p>
                  <span>{{WaterCollectDetail.HardwareSerialNumber | empty}}</span>
                </div>
                <div>
                  <p>电源类型</p>
                  <span>{{WaterCollectDetail.PowerType | empty}}</span>
                </div>
              </div>
              <div class="main-right-content">
                <p>备注</p>
                <div>
                  <span>{{WaterCollectDetail.Note | empty}}</span>
                </div>
              </div>
              <div>
                <!-- last div -->
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
      WaterCollectDetail: "",
      CommunicationNumber: this.$route.query.dn,
      index: this.$route.query.id,

      IconBack,
      IconDetail,
    }
  },
  mounted: function() {
    this.$ajax({
      method: "post",
      url: "/watercollect/detail",
      data: {
        CommunicationNumber: this.CommunicationNumber
      }
    })
      .then(response => {
        this.WaterCollectDetail = response.data[0];
        console.log(this.WaterCollectDetail);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    backPage: function() {
      this.$router.go(-1)
    },
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