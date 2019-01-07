<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>

      </Header>
      <div class="main-content">
        <div class="main-lift row-6">
          <div class="main-lift-title">
            <div v-if="selectMeterList">
              <div>
                <img :src="IconSearch">
                <input type="text"
                autocomplete="off"
                class="search-box"
                placeholder="搜索关联表具...">
              </div>
              <div>
                <p>选择关联表具——</p>
              </div>
            </div>
          </div>
          <div class="main-left-box" align="left" v-if="selectMeterList">
            <div class="meter-list">
              <p></p>
              <p v-for="(WaterMeter,index) in WaterMeterList" :key="index" @click="selectMeter(WaterMeter.DrawingNumber,WaterMeter.WaterMeterName)">
                <span>{{WaterMeter.DrawingNumber}}</span>
                <span>{{WaterMeter.WaterMeterName}}</span>
              </p>
              <p></p>
            </div>
          </div>  
        </div>
        <div class="main-right row-14">
          <div class="main-right-title">
            <span>新增采集设备</span>
          </div>
          <div class="main-right-box" align="left">
            <div class="main-right-list">
              <div>
                <!-- first div -->
              </div>
              <div class="main-right-content">
                <p>主要</p>
                <div>
                  <p>通讯编号</p>
                  <input type="text" id="CommunicationNumber" placeholder="请输入通讯编号">
                </div>
                <div>
                  <p>安装位置</p>
                  <input type="text" id="InstallationSite" placeholder="请输入安装位置">
                </div>
                <div>
                  <p>关联水表</p>
                  <div class="association-meter" @click="selectAssociation">
                    <span>
                      {{selectAssociationPrompt}}
                      <!-- <span>{{DrawingNumber}}&nbsp;&nbsp;{{WaterMeterName}}</span> -->
                      <span v-for="(sArr,index) in selectAssociationArr" :key="index">
                        <span>{{sArr.DN}}&nbsp;&nbsp;</span>
                      </span>
                      <!-- <span>{{selectAssociationArr.DN}}</span> -->
                    </span>
                    <!-- <img :src="IconAddSmall" align="absmiddle"> -->
                  </div>
                </div>
              </div>
              <div class="main-right-content">
                <p>其他</p>
                <div>
                  <p>硬件编号</p>
                  <input type="text" id="HardwareSerialNumber" placeholder="请输入硬件编号">
                </div>
                <div>
                  <p>电源类型</p>
                  <input type="text" id="PowerType">
                </div>
              </div>
              <div class="main-right-content">
                <p>备注</p>
                <div>
                  <p>备注</p>
                  <input type="text" id="Note">
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
      <img slot="save-button" class="button-normal" :src="IconSave" @click="save">
      <img slot="back-button" class="button-normal" :src="IconBack" @click="backPage">
    </RightBar>
  </div>
</template>

<script>
import Header from "./header.vue"
import RightBar from "./rightbar.vue"

import IconBack from "../assets/back@32x32_black.png"
import IconSave from "../assets/save@32x32_black.png"
import IconAddSmall from "../assets/add_small@22x22_black.png"
import IconSearch from "../assets/search@32x32_black.png"
import $ from "../static/jquery-vendor.js"

export default {
  components: {
    Header,
    RightBar
  },
  data() {
    return {
      WaterMeterList: [],
      selectMeterList: false,
      selectAssociationPrompt: "选择关联水表",
      WaterMeterName: "",
      DrawingNumber: "",
      selectAssociationArr: [],

      IconBack,
      IconSave,
      IconAddSmall,
      IconSearch
    }
  },
  mounted: function() {
    this.$ajax({
      method: "post",
      url: "/watermeter/association"
    })
      .then(response => {
        this.WaterMeterList = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    backPage: function() {
      this.$router.go(-1);
    },
    addPreZero(index) {
      return ("00" + index).slice(-3);
    },
    save: function() {
      let CommunicationNumber = $("#CommunicationNumber").val();
      let HardwareSerialNumber = $("#HardwareSerialNumber").val();
      let InstallationSite = $("#InstallationSite").val();
      let AssociationMeter = $("#AssociationMeter").val();
      let PowerType = $("#PowerType").val();
      let Note = $("#Note").val();

      if (!CommunicationNumber) {
        alert("图纸编号不能为空");
        return;
      } else if (!HardwareSerialNumber) {
        alert("表具名称不能为空");
        return;
      } else if (!InstallationSite) {
        alert("安装位置不能为空");
        return;
      } else {
        this.$ajax({
          method: "post",
          url: "/watercollect/add",
          data: {
            CommunicationNumber: CommunicationNumber,
            HardwareSerialNumber: HardwareSerialNumber,
            InstallationSite: InstallationSite,
            AssociationMeter: this.DrawingNumber,
            PowerType: PowerType,
            Note: Note
          }
        })
          .then(response => {
            if (response) {
              alert("保存成功");
              history.go(-1);
            }
          })
          .catch(error => {
            console.log(error);
          });

        this.$ajax({
          method: "post",
          url: "/watermeter/add/collect",
          data: {
            CommunicationNumber: CommunicationNumber,
            DrawingNumber: this.DrawingNumber
          }
        })
          .then(response => {
            if (response) {
              // alert("aa")
            }
          })
          .catch(error => {
            console.log(error)
          });
      }
    },
    selectAssociation: function() {
      this.selectMeterList = !this.selectMeterList
    },
    selectMeter: function(DrawingNumber, WaterMeterName) {
      this.selectAssociationPrompt = ""
      // this.DrawingNumber = DrawingNumber
      // this.WaterMeterName = WaterMeterName
      // this.selectMeterList = !this.selectMeterList
      this.selectAssociationArr.push({DN: DrawingNumber, WMN: WaterMeterName})
    }
  },
  filters: {
    empty: function(value) {
      return value ? value : "no more..."
    }
  },
  created() {
    this.id = this.$route.query.id;
  }
};
</script>

<style>
.meter-list {
  height: 696px;
  width: calc(100% - 12px);
  overflow-y: scroll;
  padding: 0 8px;
}

.meter-list > p {
  margin: 8px 0 4px 0;
  cursor: default;
  width: 100%;
  border-bottom: 1px solid var(--gray-line);
}

.meter-list > p:hover{
  border-bottom: 1px solid #2b2b2b;
}

.meter-list > p:first-child, .meter-list > p:last-child {
  height: 37px;
  border: none;
  cursor: default;
}

.meter-list > p > span:first-child{
  width: 20%;
  display: inline-block;
}

.association-meter {
  width: 100%;
  border-bottom: 1px solid var(--gray-line);
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
}

.association-meter:hover {
  cursor: pointer;
}

.association-meter > span {
  font-weight: bolder;
  color: var(--input);
  /* color: var(--black); */
}

.association-meter > img {
  margin-right: 2px;
}

.association-meter > span > span {
  font-weight: bolder;
  color: var(--black);
}
</style>