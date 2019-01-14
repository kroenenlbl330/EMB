<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        
      </Header>
      <div class="main row-20">
        <div class="main-title">
          <div>
            <span>水表表具设备-修改表具</span>
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
                <input type="text" v-model="DrawingNumber" id="DrawingNumber" @blur.prevent="loseFocus()"/>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>表具名称</p>
                <input type="text" v-model="WaterMeterName" id="WaterMeterName"/>
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
              <div>
                
              </div>
              <div>
                <p>能源数据编号</p>
                <input type="text" v-model="EnergyCode" id="EnergyCode" value=""/>
              </div>
            </div>
            <div>
              <div></div>
              <div>
                <p>上级表</p>
                <div class="select-head black" v-on:click.stop="selectWaterMeterLevelDown">
                  <p>
                    <span>{{SuperiorMeter}}&nbsp;&nbsp;{{SuperiorMeterName}}</span>
                    <span>{{selectWaterMeterLevelName}}&nbsp;&nbsp;{{selectWaterMeterLevelMeterName}}</span>
                    </p>
                  <img :src="IconDropDown">
                </div>
                <div v-show="selectWaterMeterLevelShowSelect">
                  <div v-for="(selectWaterMeterLevel, index) in selectWaterMeterLevelList" @click.stop="selectWaterMeterLevelSelect(selectWaterMeterLevel)" :key="index">
                    {{selectWaterMeterLevel.DrawingNumber}}&nbsp;&nbsp;{{selectWaterMeterLevel.WaterMeterName}}
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
                <p>系数</p>             
                <div class="select-head black" v-on:click.stop="coefficientDown">
                  <p>
                    <span>{{Coefficient}}</span>
                    <span>{{coefficientName}}</span>
                    </p>
                  <img :src="IconDropDown">
                </div>
                <div v-show="coefficientShowSelect">
                  <div v-for="(coefficient, index) in coefficientList" @click.stop="coefficientSelect(coefficient)" :key="index">
                    {{coefficient.Coefficient}}
                  </div>
                </div> 
              </div>
            </div>
            <div>
              <div></div>
              <div>
                <p>管径</p>
                <div class="select-head black" v-on:click.stop="pipeDiameterDown">
                  <p>
                    <span>{{PipeDiameter}}</span>
                    <span>{{pipeDiameterName}}</span>
                    </p>
                  <img :src="IconDropDown">
                </div>
                <div v-show="pipeDiameterShowSelect">
                  <div v-for="(pipeDiameter, index) in pipeDiameterList" @click.stop="pipeDiameterSelect(pipeDiameter)" :key="index">
                    {{pipeDiameter.PipeDiameter}}
                  </div>
                </div> 
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
            <div>
              <div></div>
              <div>
                <p>表具用途</p>
                <div class="select-head black" v-on:click.stop="meterUseDown">
                  <p>
                    <span>{{MeterUse}}</span>
                    <span>{{meterUseName}}</span>
                  </p>
                  <img :src="IconDropDown">
                </div>
                <div v-show="meterUseShowSelect">
                  <div v-for="(meterUse, index) in meterUseList" @click.stop="meterUseSelect(meterUse)" :key="index">
                    {{meterUse.MeterUse}}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div></div>
              <div>
                <p>所属部门</p>
                <div class="select-head black" v-on:click.stop="subordinateDepartmentsDown">
                  <p>
                    <span>{{SubordinateDepartments}}</span>
                    <span>{{subordinateDepartmentsName}}</span>
                  </p>
                  <img :src="IconDropDown">
                </div>
                <div v-show="subordinateDepartmentsShowSelect">
                  <div v-for="(subordinateDepartments, index) in subordinateDepartmentsList" @click.stop="subordinateDepartmentsSelect(subordinateDepartments)" :key="index">
                    {{subordinateDepartments.SubordinateDepartments}}
                  </div>
                </div>
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
      DrawingNumber: this.$route.query.dn,
      index: this.$route.query.id,

      WaterMeterName: "",
      InstallationSite: "",
      AssociationCollect: "",
      Coefficient: "",
      PipeDiameter: "",
      WaterMeterLevel: "",
      EnergyCode: "",
      SuperiorMeter: "",
      SuperiorMeterName: "",
      PowerType: "",
      MeterUse: "",
      SubordinateDepartments: "",
      Note: "",
      
      selectWaterMeterLevelPrompt: '请选择上级表',
      selectWaterMeterLevelShowSelect: false,
      selectWaterMeterLevelName: '',
      selectWaterMeterLevelMeterName: '',

      coefficientPrompt: '请选择系数',
      coefficientShowSelect: false,
      coefficientName: '',

      pipeDiameterPrompt: '请选择管径',
      pipeDiameterShowSelect: false,
      pipeDiameterName: '',

      powerTypePrompt: '请选择电源类型',
      powerTypeShowSelect: false,
      powerTypeName: '',

      meterUsePrompt: '请选择表具用途',
      meterUseShowSelect: false,
      meterUseName: '',

      subordinateDepartmentsPrompt: '请选择所属部门',
      subordinateDepartmentsShowSelect: false,
      subordinateDepartmentsName: '',

      selectWaterMeterLevelList: '',
      meterUseList: "",
      subordinateDepartmentsList: "",
      powerTypeList: "",
      pipeDiameterList: "",
      coefficientList: "",

      IconBack,
      IconSave,
      IconDropDown,
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
        this.WaterMeterName = response.data[0].WaterMeterName
        this.InstallationSite = response.data[0].InstallationSite
        this.AssociationCollect = response.data[0].AssociationCollect
        this.Coefficient = response.data[0].Coefficient
        this.PipeDiameter = response.data[0].PipeDiameter
        this.WaterMeterLevel = response.data[0].WaterMeterLevel
        this.EnergyCode = response.data[0].EnergyCode
        this.SuperiorMeter = response.data[0].SuperiorMeter
        this.SuperiorMeterName = response.data[0].SuperiorMeterName
        this.PowerType = response.data[0].PowerType
        this.MeterUse = response.data[0].MeterUse
        this.SubordinateDepartments = response.data[0].SubordinateDepartments
        this.Note = response.data[0].Note
      })
      .catch(error => {
        console.log(error);
      })

    this.$ajax.all([
      this.$ajax.post('/watermeter/meteruse'),
      this.$ajax.post('/watermeter/subordinatedepartments'),
      this.$ajax.post('/watermeter/powertype'),
      this.$ajax.post('/watermeter/pipediameter'),
      this.$ajax.post('/watermeter/coefficient'),
    ])
    .then(this.$ajax.spread((meteruse, subordinatedepartments,powertype,pipediameter,coefficient)=> {
      this.meterUseList = meteruse.data
      this.subordinateDepartmentsList = subordinatedepartments.data
      this.powerTypeList = powertype.data
      this.pipeDiameterList = pipediameter.data
      this.coefficientList = coefficient.data
    }))

    this.$ajax({
      method: "post",
      url: "/watermeter/select/watermeterlevel",
      data: {
        WaterMeterLevelMinusOne: ($("#DrawingNumber").val()).substring(1,2) - 1
      }
    })
      .then(response => {
        this.selectWaterMeterLevelList = response.data;
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    backPage: function() {
      this.$router.go(-1)
    },
    addPreZero(index) {
      return ("00" + index).slice(-3)
    },
    save: function() {
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

    //SelectWaterMeterLevel
    selectWaterMeterLevelDown() {
      if(document.querySelector("#DrawingNumber").value == '') {
        alert('请先填写图纸编号')
        return  
      }else {
        this.selectWaterMeterLevelShowSelect = !this.selectWaterMeterLevelShowSelect
        this.coefficientShowSelect = false
        this.pipeDiameterShowSelect = false
        this.powerTypeShowSelect = false
        this.meterUseShowSelect = false
        this.subordinateDepartmentsShowSelect = false
        //为document添加点击触发removeEvt()
        document.addEventListener("click",this.removeEvt)
      }
    },
    selectWaterMeterLevelSelect(selectWaterMeterLevel) {
      this.selectWaterMeterLevelShowSelect = false
      this.selectWaterMeterLevelName = selectWaterMeterLevel.DrawingNumber
      this.selectWaterMeterLevelMeterName = selectWaterMeterLevel.WaterMeterName
      this.SuperiorMeter = ''
      this.SuperiorMeterName = ''
    },
    //Coefficient
    coefficientDown() {
      this.coefficientShowSelect = !this.coefficientShowSelect
      this.pipeDiameterShowSelect = false
      this.selectWaterMeterLevelShowSelect = false
      this.powerTypeShowSelect = false
      this.meterUseShowSelect = false
      this.subordinateDepartmentsShowSelect = false
      //为document添加点击触发removeEvt()
      document.addEventListener("click",this.removeEvt)
    },
    coefficientSelect(coefficient) {
      this.coefficientShowSelect = false
      this.coefficientName = coefficient.Coefficient
      this.Coefficient = ''
    },
    //PipeDiameter
    pipeDiameterDown() {
      this.pipeDiameterShowSelect = !this.pipeDiameterShowSelect
      this.coefficientShowSelect = false
      this.selectWaterMeterLevelShowSelect = false
      this.powerTypeShowSelect = false
      this.meterUseShowSelect = false
      this.subordinateDepartmentsShowSelect = false
      document.addEventListener("click",this.removeEvt)
    },
    pipeDiameterSelect(pipeDiameter) {
      this.pipeDiameterShowSelect = false
      this.pipeDiameterName = pipeDiameter.PipeDiameter
      this.PipeDiameter = ''
    },
    //PowerType
    powerTypeDown() {
      this.powerTypeShowSelect = !this.powerTypeShowSelect
      this.coefficientShowSelect = false
      this.pipeDiameterShowSelect = false
      this.selectWaterMeterLevelShowSelect = false
      this.meterUseShowSelect = false
      this.subordinateDepartmentsShowSelect = false
      document.addEventListener("click",this.removeEvt)
    },
    powerTypeSelect(powerType) {
      this.powerTypeShowSelect = false
      this.powerTypeName = powerType.PowerType
      this.PowerType = ''
    },
    //MeterUse
    meterUseDown() {
      this.meterUseShowSelect = !this.meterUseShowSelect
      this.powerTypeShowSelect = false
      this.coefficientShowSelect = false
      this.pipeDiameterShowSelect = false
      this.selectWaterMeterLevelShowSelect = false
      this.subordinateDepartmentsShowSelect = false
      document.addEventListener("click",this.removeEvt)
    },
    meterUseSelect(meterUse) {
      this.meterUseShowSelect = false
      this.meterUseName = meterUse.MeterUse
      this.MeterUse = ''
    },
    //SubordinateDepartments
    subordinateDepartmentsDown() {
      this.subordinateDepartmentsShowSelect = !this.subordinateDepartmentsShowSelect
      this.meterUseShowSelect = false
      this.powerTypeShowSelect = false
      this.coefficientShowSelect = false
      this.pipeDiameterShowSelect = false
      this.selectWaterMeterLevelShowSelect = false
      document.addEventListener("click",this.removeEvt)
    },
    subordinateDepartmentsSelect(subordinateDepartments) {
      this.subordinateDepartmentsShowSelect = false
      this.subordinateDepartmentsName = subordinateDepartments.SubordinateDepartments
      this.SubordinateDepartments = ''
    },

    removeEvt(){
      //为document移除点击触发removeEvt()
      document.removeEventListener("click",()=>{})
      this.hiedMenu()
    },
    hiedMenu(){
      this.coefficientShowSelect = false
      this.pipeDiameterShowSelect = false
      this.waterMeterLevelShowSelect = false
      this.powerTypeShowSelect = false
      this.selectWaterMeterLevelShowSelect = false
      this.subordinateDepartmentsShowSelect = false
      this.meterUseShowSelect = false
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