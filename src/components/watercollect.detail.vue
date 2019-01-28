<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        
      </Header>
      <div class="main row-20">
        <div class="main-title">
          <div>
            <span>水表采集设备-采集详情</span>
          </div>
        </div>
        <div class="main-content">
          <div  class="main-content-list">
            <div>
              <div>
                <span>01</span>
              </div>
              <div>
                <p>图纸编号</p>
                <span>{{WaterCollectDetail.CommunicationNumber}}</span>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>安装位置</p>
                <span>{{WaterCollectDetail.InstallationSite}}</span>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>能源数据编号</p>
                <span>{{WaterCollectDetail.HardwareSerialNumber | empty}}</span>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>电源类型</p>
                <span>{{WaterCollectDetail.PowerType | empty}}</span>
              </div>
            </div>
          </div>
          <div  class="main-content-list">
            <div>
              <div>
                <span>02</span>
              </div>
              <div>
                <p>备注</p>
                <span>{{WaterCollectDetail.Note | empty}}</span>
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
      checkedID: this.$route.query.id,
      // index: this.$route.query.id,

      IconBack,
      IconDetail,
    }
  },
  mounted: function() {
    this.$ajax({
      method: "post",
      url: "/watercollect/detail",
      data: {
        checkedID: this.checkedID
      }
    })
      .then(response => {
        this.WaterCollectDetail = response.data[0];
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