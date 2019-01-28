<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        
      </Header>
      <div class="main row-20">
        <div class="main-title">
          <div>
            <span>水表中继设备-修改中继</span>
          </div>
        </div>
        <div class="main-content">
          <div class="main-content-list">
            <div>
              <div>
                <span>01</span>
              </div>
              <div>
                <p>通讯编号</p>
                <input type="text" v-model="CommunicationNumber" id="CommunicationNumber"/>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>能源数据编号</p>
                <input type="text" v-model="HardwareSerialNumber" id="HardwareSerialNumber"/>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>安装位置</p>
                <input type="text" v-model="InstallationSite" id="InstallationSite" value=""/>
              </div>
            </div>
            <div>
              <div></div>
              <div>
                <p>电源类型</p>
                <div class="select-head black" v-on:click.stop="powerTypeDown">
                  <p>
                    <span>{{PowerType}}</span>
                    <span>{{powerTypeName}}</span>
                  </p>
                  <img :src="IconDropDown">
                </div>
                <div v-show="powerTypeShowSelect">
                  <div v-for="(powerType, index) in powerTypeList" @click.stop="powerTypeSelect(powerType)" :key="index">
                    {{powerType.PowerType}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>02</span>
              </div>
              <div>
                <p>备注</p>
                <input type="text" v-model="Note" id="Note" value=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RightBar>
      <img slot="save-button" class="button-normal" :src="IconSave" @click="save"/>
      <img slot="back-button" class="button-normal" :src="IconBack" @click="backPage"/>
    </RightBar>
  </div>
</template>

<script>
import Header from "./header.vue"
import RightBar from "./rightbar.vue"

import IconBack from "../assets/back@32x32_black.png"
import IconSave from "../assets/save@32x32_black.png"
import IconDropDown from "../assets/drop-down@24x24_black.png"

export default {
  components: {
    Header,
    RightBar
  },
  data() {
    return {
      checkedID: this.$route.query.id,
      // index: this.$route.query.id,
      CommunicationNumber: "",
      HardwareSerialNumber: "",
      InstallationSite: "",
      AssociationMeter: "",
      PowerType: "",
      Note: "",

      powerTypePrompt: '请选择电源类型',
      powerTypeShowSelect: false,
      powerTypeName: '',

      powerTypeList: "",

      IconBack,
      IconSave,
      IconDropDown,
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
        this.CommunicationNumber = response.data[0].CommunicationNumber
        this.HardwareSerialNumber = response.data[0].HardwareSerialNumber
        this.InstallationSite = response.data[0].InstallationSite
        this.AssociationMeter = response.data[0].AssociationMeter
        this.PowerType = response.data[0].PowerType
        this.Note = response.data[0].Note
      })
      .catch(error => {
        console.log(error);
      })

    this.$ajax.all([
      this.$ajax.post('/watermeter/powertype'),
    ])
    .then(this.$ajax.spread((powertype)=> {
      this.powerTypeList = powertype.data
    }))
  },
  methods: {
    backPage: function() {
      this.$router.go(-1)
    },
    save: function() {
      let WaterCollectID = this.WaterCollectID
      let CommunicationNumber = this.CommunicationNumber
      let HardwareSerialNumber = this.HardwareSerialNumber
      let InstallationSite = this.InstallationSite
      let AssociationMeter = this.AssociationMeter
      let PowerType = this.PowerType
      let Note = this.Note

       if (!CommunicationNumber) {
        alert("图纸编号不能为空")
        return
      } else if (!HardwareSerialNumber) {
        alert("表具名称不能为空")
        return
      } else if (!InstallationSite) {
        alert("安装位置不能为空")
        return
      } else {
        this.$ajax({
        method: "post",
        url: "/watercollect/updata",
        data: {
          UpdataID: WaterCollectID,
          CommunicationNumber: CommunicationNumber,
          HardwareSerialNumber: HardwareSerialNumber,
          InstallationSite: InstallationSite,
          AssociationMeter: AssociationMeter,
          PowerType: PowerType,
          Note: Note,
        }
      })
        .then(response => {
          if(response){
            alert("修改成功")
            history.go(-1);
          }
        })
        .catch(error => {
          console.log(error);
        })
      }
    },

    //PowerType
    powerTypeDown() {
      this.powerTypeShowSelect = !this.powerTypeShowSelect
      document.addEventListener("click",this.removeEvt)
    },
    powerTypeSelect(powerType) {
      this.powerTypeShowSelect = false
      this.powerTypeName = powerType.PowerType
      this.PowerType = ''
    },

    removeEvt(){
      //为document移除点击触发removeEvt()
      document.removeEventListener("click",()=>{})
      this.hiedMenu()
    },
    hiedMenu(){
      this.powerTypeShowSelect = false
    }
  },
  filters: {
    empty: function (value) {
      return value?value:'no more...'
    }
  },
  created() {
    this.id = this.$route.query.id;
  },
}
</script>

<style>
.black > p > span:first-child {
  font-weight: bolder !important;
  color: var(--black) !important;
}
</style>