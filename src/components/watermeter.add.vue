<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        
      </Header>
      <div class="main row-20">
        <div class="main-title">
          <div>
            <span>新增表具设备</span>
          </div>
        </div>
        <div class="main-content">
          <div class="main-content-list">
            <p>主要</p>
            <div>
              <div>
                
              </div>
              <div>
                <p>图纸编号</p>
                <input type="text" id="DrawingNumber" placeholder="请输入图纸编号"/>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>表具名称</p>
                <input type="text" id="WaterMeterName" placeholder="请输入表具名称"/>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>安装位置</p>
                <input type="text" id="InstallationSite" placeholder="请输入安装位置"/>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>关联采集</p>
                <input type="text" id="AssociationCollect"/>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>系数</p>
                <input type="text" id="Coefficient" placeholder="请输入水表系数（1/0.1）"/>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>管径</p>
                <input type="text" id="PipeDiameter" placeholder="请输入水表管径（15/20/25/40/50/80/100/150/200）"/>
              </div>
            </div>
            <div>
              <div>
                
              </div>
              <div>
                <p>表级</p>
                <input type="text" id="WaterMeterLevel" placeholder="请输入水表表级（1/2/3/4/5）"/>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <p>其他</p>
            <div>
              <p>能源数据编号</p>
              <input type="text" id="EnergyCode"/>
            </div>
            <div>
              <p>上级表</p>
              <input type="text" id="SuperiorMeter"/>
            </div>
            <div>
              <p>电源类型</p>
              <input type="text" id="PowerType"/>
            </div>
            <div>
              <p>表具用途</p>
              <input type="text" id="MeterUse"/>
            </div>
            <div>
              <p>所属部门</p>
              <input type="text" id="SubordinateDepartments"/>
            </div>
          </div>
          <div class="main-content-list">
            <p>备注</p>
            <div>
              <input type="text" id="Note"/>
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
import $ from "../static/jquery-vendor.js"

export default {
  components: {
    Header,
    RightBar
  },
  data() {
    return {      
      IconBack,
      IconSave,
    }
  },
  methods: {
    backPage: function() {
      this.$router.go(-1)
    },
    addPreZero(index) {
      return ("00" + index).slice(-3)
    },
    save: function() {
      let DrawingNumber = $('#DrawingNumber').val()
      let WaterMeterName = $('#WaterMeterName').val()
      let InstallationSite = $('#InstallationSite').val()
      let AssociationCollect = $('#AssociationCollect').val()
      let Coefficient = $('#Coefficient').val()
      let PipeDiameter = $('#PipeDiameter').val()
      let WaterMeterLevel = $('#WaterMeterLevel').val()  
      let EnergyCode = $('#EnergyCode').val()
      let SuperiorMeter = $('#SuperiorMeter').val()
      let PowerType = $('#PowerType').val()
      let MeterUse = $('#MeterUse').val()
      let SubordinateDepartments = $('#SubordinateDepartments').val()
      let Note = $('#Note').val()

      if(!DrawingNumber){
        alert('图纸编号不能为空')
        return
      }else if(!WaterMeterName){
        alert('表具名称不能为空')
        return
      }else if(!InstallationSite){
        alert('安装位置不能为空')
        return
      }else if(Coefficient != '1' && Coefficient != '0.1'){
        alert('请选择正确的系数')
        return
      }else if(PipeDiameter !== '15' && PipeDiameter !== '20' && PipeDiameter !== '25' && PipeDiameter !== '40' && PipeDiameter !== '50' && PipeDiameter !== '80' && PipeDiameter !== '100' && PipeDiameter !== '150' && PipeDiameter !== '200'){
        alert('请选择正确的管径')
        return
      }else if(WaterMeterLevel !== '1' && WaterMeterLevel !== '2' && WaterMeterLevel !== '3' && WaterMeterLevel !== '4' && WaterMeterLevel !== '5'){
        alert('请选择正确的表级')
        return
      }else{
        this.$ajax({
          method: "post",
          url: "/watermeter/add",
          data: {
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
          }
        })
          .then(response => {
            if(response){
              alert("保存成功")
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