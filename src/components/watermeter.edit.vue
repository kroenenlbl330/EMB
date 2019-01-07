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
                  <input type="text" v-model="DrawingNumber" id="DrawingNumber" value=""/>
                </div>
                <div>
                  <p>表具名称</p>
                  <input type="text" v-model="WaterMeterName" id="WaterMeterName" value=""/>
                </div>
                <div>
                  <p>安装位置</p>
                  <input type="text" v-model="InstallationSite" id="InstallationSite" value=""/>
                </div>
                <div>
                  <p>关联采集</p>
                  <span>{{AssociationCollect | empty}}</span>
                  <!-- <input type="text" v-model="this.WaterMeterDetail.AssociationCollect" id="AssociationCollect"/> -->
                </div>
                <div>
                  <p>系数</p>
                  <input type="text" v-model="Coefficient" id="Coefficient" value=""/>
                </div>
                <div>
                  <p>管径</p>
                  <input type="text" v-model="PipeDiameter" id="PipeDiameter" value=""/>
                </div>
                <div>
                  <p>表级</p>
                  <input type="text" v-model="WaterMeterLevel" id="WaterMeterLevel" value=""/>
                </div>
              </div>
              <div class="main-right-content">
                <p>其他</p>
                <div>
                  <p>能源数据编号</p>
                  <input type="text" v-model="EnergyCode" id="EnergyCode" value=""/>
                </div>
                <div>
                  <p>上级表</p>
                  <input type="text" v-model="SuperiorMeter" id="SuperiorMeter" value=""/>
                </div>
                <div>
                  <p>电源类型</p>
                  <input type="text" v-model="PowerType" id="PowerType" value=""/>
                </div>
                <div>
                  <p>表具用途</p>
                  <input type="text" v-model="MeterUse" id="MeterUse" value=""/>
                </div>
                <div>
                  <p>所属部门</p>
                  <input type="text" v-model="SubordinateDepartments" id="SubordinateDepartments" value=""/>
                </div>
              </div>
              <div class="main-right-content">
                <p>备注</p>
                <div>
                  <input type="text" v-model="Note" id="Note" value=""/>
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
      <img slot="save-button" class="button-normal" :src="IconSave" @click="save"/>
      <img slot="back-button" class="button-normal" :src="IconBack" @click="backPage"/>
    </RightBar>
  </div>
</template>

<script>
import Header from "./header.vue";
import RightBar from "./rightbar.vue";

import IconBack from "../assets/back@32x32_black.png";
import IconSave from "../assets/save@32x32_black.png"

export default {
  components: {
    Header,
    RightBar
  },
  data() {
    return {
      DrawingNumber: this.$route.query.dn,
      index: this.$route.query.id,
      WaterMeterDetail: "",
      WaterMeterName: "",
      InstallationSite: "",
      AssociationCollect: "",
      Coefficient: "",
      PipeDiameter: "",
      WaterMeterLevel: "",
      EnergyCode: "",
      SuperiorMeter: "",
      PowerType: "",
      MeterUse: "",
      SubordinateDepartments: "",
      Note: "",

      IconBack,
      IconSave,
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
        this.WaterMeterName = response.data[0].WaterMeterName
        this.InstallationSite = response.data[0].InstallationSite
        this.AssociationCollect = response.data[0].AssociationCollect
        this.Coefficient = response.data[0].Coefficient
        this.PipeDiameter = response.data[0].PipeDiameter
        this.WaterMeterLevel = response.data[0].WaterMeterLevel
        this.EnergyCode = response.data[0].EnergyCode
        this.SuperiorMeter = response.data[0].SuperiorMeter
        this.PowerType = response.data[0].PowerType
        this.MeterUse = response.data[0].MeterUse
        this.SubordinateDepartments = response.data[0].SubordinateDepartments
        this.Note = response.data[0].Note
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
    save: function() {
      // let DrawingNumber = document.getElementById('DrawingNumber').value
      // let WaterMeterName = document.getElementById('WaterMeterName').value
      // let InstallationSite = document.getElementById('InstallationSite').value
      // let AssociationCollect = document.getElementById('AssociationCollect').value
      // let Coefficient = document.getElementById('Coefficient').value
      // let PipeDiameter = document.getElementById('PipeDiameter').value
      // let WaterMeterLevel = document.getElementById('WaterMeterLevel').value       
      // let EnergyCode = document.getElementById('EnergyCode').value
      // let SuperiorMeter = document.getElementById('SuperiorMeter').value
      // let PowerType = document.getElementById('PowerType').value
      // let MeterUse = document.getElementById('MeterUse').value
      // let SubordinateDepartments = document.getElementById('SubordinateDepartments').value
      // let Note = document.getElementById('Note').value

      let DrawingNumber = this.DrawingNumber
      let WaterMeterName = this.WaterMeterName
      let InstallationSite = this.InstallationSite
      let AssociationCollect = this.AssociationCollect
      let Coefficient = this.Coefficient
      let PipeDiameter = this.PipeDiameter
      let WaterMeterLevel = this.WaterMeterLevel    
      let EnergyCode = this.EnergyCode
      let SuperiorMeter = this.SuperiorMeter
      let PowerType = this.PowerType
      let MeterUse = this.MeterUse
      let SubordinateDepartments = this.SubordinateDepartments
      let Note = this.Note

      if(!DrawingNumber){
        alert('图纸编号不能为空')
        return
      }else if(!WaterMeterName){
        alert('表具名称不能为空')
        return
      }else if(!InstallationSite){
        alert('安装位置不能为空')
        return
      }else if(Coefficient !='1' && Coefficient != '0.1'){
        alert('请选择正确的系数')
        return
      }else if(PipeDiameter != '15' && PipeDiameter != '20' && PipeDiameter != '25' && PipeDiameter != '40' && PipeDiameter != '50' && PipeDiameter != '80' && PipeDiameter != '100' && PipeDiameter != '150' && PipeDiameter != '200'){
        alert('请选择正确的管径')
        return
      }else if(WaterMeterLevel != '1' && WaterMeterLevel != '2' && WaterMeterLevel != '3' && WaterMeterLevel != '4' && WaterMeterLevel != '5'){
        alert('请选择正确的表级')
        return
      }else{
        this.$ajax({
        method: "post",
        url: "/watermeter/updata",
        data: {
          DelData: DrawingNumber,
          DrawingNumber: DrawingNumber,
          WaterMeterName: WaterMeterName,
          InstallationSite: InstallationSite,
          AssociationCollect: AssociationCollect,
          Coefficient: Coefficient,
          PipeDiameter: PipeDiameter,
          WaterMeterLevel: WaterMeterLevel,    
          EnergyCode: EnergyCode,
          SuperiorMeter: SuperiorMeter,
          PowerType: PowerType,
          MeterUse: MeterUse,
          SubordinateDepartments: SubordinateDepartments,
          Note: Note,

          // DrawingNumber: document.getElementById('DrawingNumber').value,
          // WaterMeterName: document.getElementById('WaterMeterName').value,
          // InstallationSite: document.getElementById('InstallationSite').value,
          // AssociationCollect: document.getElementById('AssociationCollect').value,
          // Coefficient: document.getElementById('Coefficient').value,
          // PipeDiameter: document.getElementById('PipeDiameter').value,
          // WaterMeterLevel: document.getElementById('WaterMeterLevel').value,
          // EnergyCode: document.getElementById('EnergyCode').value,
          // SuperiorMeter: document.getElementById('SuperiorMeter').value,
          // PowerType: document.getElementById('PowerType').value,
          // MeterUse: document.getElementById('MeterUse').value,
          // SubordinateDepartments: document.getElementById('SubordinateDepartments').value,
          // Note: document.getElementById('Note').value
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
  },
  filters: {
    empty: function (value) {
      return value?value:'no more...'
    }
  },
  created() {
    this.id = this.$route.query.id;
  }
}
</script>

<style>

</style>