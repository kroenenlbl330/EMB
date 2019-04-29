<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>

      </Header>
      <div class="main row-20">
        <div class="main-title">
          <div>
            <span>水表表具设备-新增表具</span>
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
                <input type="text" id="DrawingNumber" placeholder="请输入图纸编号" @blur.prevent="loseFocus()">  <!-- :class="{'text-border': isInput}" @input="changeClass" -->
              </div>
            </div>
            <div>
              <div></div>
              <div>
                <p>表具名称</p>
                <input type="text" id="WaterMeterName" placeholder="请输入表具名称">
              </div>
            </div>
            <div>
              <div></div>
              <div>
                <p>安装位置</p>
                <input type="text" id="InstallationSite" placeholder="请输入安装位置">
              </div>
            </div>
            <div>
              <div></div>
              <div>
                <p>能源数据编号</p>
                <input type="text" id="EnergyCode" placeholder="请输入能源数据编号">
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>02</span>
              </div>
              <div>
                <p>表级</p>
                <div class="select-head" v-on:click.stop="waterMeterLevelDown">
                  <p>
                    <span>{{waterMeterLevelPrompt}}</span>
                    <span>{{waterMeterLevelName}}</span>
                    </p>
                  <img :src="IconDropDown">
                </div>
                <div v-show="waterMeterLevelShowSelect">
                  <div v-for="(waterMeterLevel, index) in waterMeterLevelList" @click.stop="waterMeterLevelSelect(waterMeterLevel)" :key="index">
                    {{waterMeterLevel.WaterMeterLevel}}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>上级表</p>
                <div class="select-head" v-on:click.stop="superiorMeterDown">
                  <p>
                    <span>{{superiorMeterPrompt}}</span>
                    <span>{{superiorMeter}}&nbsp;&nbsp;{{superiorMeterName}}</span>
                    </p>
                  <img :src="IconDropDown">
                </div>
                <div v-show="superiorMeterShowSelect">
                  <div v-for="(superiorMeter, index) in superiorMeterList" @click.stop="superiorMeterSelect(superiorMeter)" :key="index">
                    {{superiorMeter.DrawingNumber}}&nbsp;&nbsp;{{superiorMeter.WaterMeterName}}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>

              </div>
              <div>
                <p>关联采集</p>
                <div class="select-head" v-on:click.stop="associationCollectDown">
                  <p>
                    <span>{{associationCollectPrompt}}</span>
                    <span>{{associationCollect}}&nbsp;&nbsp;{{associationCollectName}}</span>
                    </p>
                  <img :src="IconDropDown">
                </div>
                <div v-show="associationCollectShowSelect">
                  <div v-for="(associationCollect, index) in associationcollectList" @click.stop="associationCollectSelect(associationCollect)" :key="index">
                    {{associationCollect.CommunicationNumber}}&nbsp;&nbsp;{{associationCollect.InstallationSite}}
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
                <p>系数</p>             
                <div class="select-head" v-on:click.stop="coefficientDown">
                  <p>
                    <span>{{coefficientPrompt}}</span>
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
                <div class="select-head" v-on:click.stop="pipeDiameterDown">
                  <p>
                    <span>{{pipeDiameterPrompt}}</span>
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
                <div class="select-head" v-on:click.stop="powerTypeDown">
                  <p>
                    <span>{{powerTypePrompt}}</span>
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
                <div class="select-head" v-on:click.stop="meterUseDown">
                  <p>
                    <span>{{meterUsePrompt}}</span>
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
                <div class="select-head" v-on:click.stop="subordinateDepartmentsDown">
                  <p>
                    <span>{{subordinateDepartmentsPrompt}}</span>
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
                <span>04</span>
              </div>
              <div>
                <p>备注</p>
                <input type="text" id="Note" placeholder="备注">
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
import IconDropDown from "../assets/drop-down@24x24_black.png"

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
      IconDropDown,

      // isInput: false,
      associationCollectPrompt: '选入采集器',
      associationCollectShowSelect: false,
      associationCollect: '',
      associationCollectName: '',

      waterMeterLevelPrompt: '请选择系数',
      waterMeterLevelShowSelect: false,
      waterMeterLevelName: '',

      superiorMeterPrompt: '请选择上级表',
      superiorMeterShowSelect: false,
      superiorMeter: '',
      superiorMeterName: '',

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
      
      associationcollectList: '',
      waterMeterLevelList: "",
      superiorMeterList: '',
      coefficientList: '',
      pipeDiameterList: '',
      powerTypeList: '',
      meterUseList: '',
      subordinateDepartmentsList: '',
    }
  },
  computed: {

  },
  methods: {
    backPage: function() {
      this.$router.go(-1)
    },
    addPreZero(index) {
      return ("00" + index).slice(-3)
    },
    // loseFocus() {
    //   this.$ajax({
    //   method: "post",
    //   url: "/watermeter/select/watermeterlevel",
    //   data: {
    //     WaterMeterLevelMinusOne: ($("#DrawingNumber").val()).substring(1,2) - 1
    //   }
    // })
    //   .then(response => {
    //     this.superiorMeterList = response.data;
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // },
    save: function() {
      let DrawingNumber = $("#DrawingNumber").val()
      let WaterMeterName = $("#WaterMeterName").val()
      let InstallationSite = $("#InstallationSite").val()
      let EnergyCode = $("#EnergyCode").val()
      let SuperiorMeter = this.superiorMeter
      let AssociationCollect = this.associationCollect
      let WaterMeterLevel = this.waterMeterLevelName
      let SuperiorMeterName = this.superiorMeterName
      let Coefficient = this.coefficientName
      let PipeDiameter = this.pipeDiameterName
      let PowerType = this.powerTypeName
      let MeterUse = this.meterUseName
      let SubordinateDepartments = this.subordinateDepartmentsName
      let Note = $("#Note").val()

      // 根据图纸编号获取表级
      // let WaterMeterLevel = DrawingNumber.substring(1,2)

      if (!DrawingNumber) {
        alert("图纸编号不能为空")
        return
      } else if (!WaterMeterName) {
        alert("表具名称不能为空")
        return
      } else if (!InstallationSite) {
        alert("安装位置不能为空")
        return
      } else if (!Coefficient) {
        alert("请选择正确的系数")
        return
      } else if (!PipeDiameter) {
        alert("请选择正确的管径")
        return;
      } else {
        this.$ajax({
          method: "post",
          url: "/watermeter/add",
          data: {
            DrawingNumber: DrawingNumber,
            WaterMeterName: WaterMeterName,
            InstallationSite: InstallationSite,
            Coefficient: Coefficient,
            PipeDiameter: PipeDiameter,
            WaterMeterLevel: WaterMeterLevel,
            EnergyCode: EnergyCode,
            AssociationCollect: AssociationCollect,
            SuperiorMeter: SuperiorMeter,
            SuperiorMeterName: SuperiorMeterName,
            PowerType: PowerType,
            MeterUse: MeterUse,
            SubordinateDepartments: SubordinateDepartments,
            Note: Note
          }
        })
          .then(response => {
            if (response) {
              alert("保存成功")
              this.$router.go(-1)
            }
          })
          .catch(error => {
            console.log(error)
          })

        this.$ajax({
          method: "post",
          url: "/watermeter/add/collect",
          data: {
            AssociationCollect: AssociationCollect,
            DrawingNumber: DrawingNumber,
          }
        })
          // .then(response => {
          //   if (response) {
          //     alert("保存成功")
          //     this.$router.go(-1)
          //   }
          // })
          // .catch(error => {
          //   console.log(error)
          // })
      }
    },

    // AssociationCollectDown
    associationCollectDown() {
      this.associationCollectShowSelect = !this.associationCollectShowSelect
      this.superiorMeterShowSelect = false
      this.coefficientShowSelect = false
      this.pipeDiameterShowSelect = false
      this.powerTypeShowSelect = false
      this.meterUseShowSelect = false
      this.subordinateDepartmentsShowSelect = false
      this.waterMeterLevelShowSelect = false
      document.addEventListener("click",this.removeEvt)
    },
    associationCollectSelect(associationCollect) {
      this.associationCollectShowSelect = false
      this.associationCollect = associationCollect.CommunicationNumber
      this.associationCollectName = associationCollect.InstallationSite
      this.associationCollectPrompt = ''
    },
    // WaterMeterLevel
    waterMeterLevelDown() {
      this.waterMeterLevelShowSelect =! this.waterMeterLevelShowSelect
      this.associationCollectShowSelect = false
      this.superiorMeterShowSelect = false
      this.coefficientShowSelect = false
      this.pipeDiameterShowSelect = false
      this.powerTypeShowSelect = false
      this.meterUseShowSelect = false
      this.subordinateDepartmentsShowSelect = false
      document.addEventListener("click",this.removeEvt)
    },
    waterMeterLevelSelect(waterMeterLevel) {
      this.waterMeterLevelShowSelect = false
      this.waterMeterLevelName = waterMeterLevel.WaterMeterLevel
      this.waterMeterLevelPrompt = ''
    },
    // SuperiorMeter
    superiorMeterDown() {
      // if(document.querySelector("#DrawingNumber").value == '') {
      //   alert('请先填写图纸编号')
      //   return  
      // }else {
        
      // }
      this.superiorMeterShowSelect = !this.superiorMeterShowSelect
      this.coefficientShowSelect = false
      this.pipeDiameterShowSelect = false
      this.powerTypeShowSelect = false
      this.meterUseShowSelect = false
      this.subordinateDepartmentsShowSelect = false
      this.associationCollectShowSelect = false
      this.waterMeterLevelShowSelect = false
      //为document添加点击触发removeEvt()
      document.addEventListener("click",this.removeEvt)
    },
    superiorMeterSelect(superiorMeter) {
      this.superiorMeterShowSelect = false
      this.superiorMeter = superiorMeter.DrawingNumber
      this.superiorMeterName = superiorMeter.WaterMeterName
      this.superiorMeterPrompt = ''
    },
    // Coefficient
    coefficientDown() {
      this.coefficientShowSelect = !this.coefficientShowSelect
      this.pipeDiameterShowSelect = false
      this.superiorMeterShowSelect = false
      this.powerTypeShowSelect = false
      this.meterUseShowSelect = false
      this.subordinateDepartmentsShowSelect = false
      this.associationCollectShowSelect = false
      this.waterMeterLevelShowSelect = false
      //为document添加点击触发removeEvt()
      document.addEventListener("click",this.removeEvt)
    },
    coefficientSelect(coefficient) {
      this.coefficientShowSelect = false
      this.coefficientName = coefficient.Coefficient
      this.coefficientPrompt = ''
    },
    // PipeDiameter
    pipeDiameterDown() {
      this.pipeDiameterShowSelect = !this.pipeDiameterShowSelect
      this.coefficientShowSelect = false
      this.superiorMeterShowSelect = false
      this.powerTypeShowSelect = false
      this.meterUseShowSelect = false
      this.subordinateDepartmentsShowSelect = false
      this.associationCollectShowSelect = false
      this.waterMeterLevelShowSelect = false
      document.addEventListener("click",this.removeEvt)
    },
    pipeDiameterSelect(pipeDiameter) {
      this.pipeDiameterShowSelect = false
      this.pipeDiameterName = pipeDiameter.PipeDiameter
      this.pipeDiameterPrompt = ''
    },
    // PowerType
    powerTypeDown() {
      this.powerTypeShowSelect = !this.powerTypeShowSelect
      this.coefficientShowSelect = false
      this.pipeDiameterShowSelect = false
      this.superiorMeterShowSelect = false
      this.meterUseShowSelect = false
      this.subordinateDepartmentsShowSelect = false
      this.associationCollectShowSelect = false
      this.waterMeterLevelShowSelect = false
      document.addEventListener("click",this.removeEvt)
    },
    powerTypeSelect(powerType) {
      this.powerTypeShowSelect = false
      this.powerTypeName = powerType.PowerType
      this.powerTypePrompt = ''
    },
    // MeterUse
    meterUseDown() {
      this.meterUseShowSelect = !this.meterUseShowSelect
      this.powerTypeShowSelect = false
      this.coefficientShowSelect = false
      this.pipeDiameterShowSelect = false
      this.superiorMeterShowSelect = false
      this.subordinateDepartmentsShowSelect = false
      this.associationCollectShowSelect = false
      this.waterMeterLevelShowSelect = false
      document.addEventListener("click",this.removeEvt)
    },
    meterUseSelect(meterUse) {
      this.meterUseShowSelect = false
      this.meterUseName = meterUse.MeterUse
      this.meterUsePrompt = ''
    },
    // SubordinateDepartments
    subordinateDepartmentsDown() {
      this.subordinateDepartmentsShowSelect = !this.subordinateDepartmentsShowSelect
      this.meterUseShowSelect = false
      this.powerTypeShowSelect = false
      this.coefficientShowSelect = false
      this.pipeDiameterShowSelect = false
      this.superiorMeterShowSelect = false
      this.associationCollectShowSelect = false
      this.waterMeterLevelShowSelect = false
      document.addEventListener("click",this.removeEvt)
    },
    subordinateDepartmentsSelect(subordinateDepartments) {
      this.subordinateDepartmentsShowSelect = false
      this.subordinateDepartmentsName = subordinateDepartments.SubordinateDepartments
      this.subordinateDepartmentsPrompt = ''
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
      this.subordinateDepartmentsShowSelect = false
      this.meterUseShowSelect = false
      this.superiorMeterShowSelect = false
      this.associationCollectShowSelect = false
    },
  },
  //过滤器
  filters: {
    empty: function(value) {
      return value ? value : "no more..."
    }
  },
  //数据初始化
  created() {
    this.id = this.$route.query.id
  },
  
  mounted: function() {
    this.$ajax.all([
      this.$ajax.post('/watercollect'),
      this.$ajax.post('/watermeter/select/watermeterlevel'),
      this.$ajax.post('/watermeter/meteruse'),
      this.$ajax.post('/watermeter/subordinatedepartments'),
      this.$ajax.post('/watermeter/powertype'),
      this.$ajax.post('/watermeter/pipediameter'),
      this.$ajax.post('/watermeter/coefficient'),
    ])
    .then(this.$ajax.spread((associationcollect, watermeterlevel, meteruse, subordinatedepartments,powertype,pipediameter,coefficient)=> {
      this.associationcollectList = associationcollect.data
      this.waterMeterLevelList = watermeterlevel.data
      this.meterUseList = meteruse.data
      this.subordinateDepartmentsList = subordinatedepartments.data
      this.powerTypeList = powertype.data
      this.pipeDiameterList = pipediameter.data
      this.coefficientList = coefficient.data
    }))

    this.$ajax({
      method: "post",
      url: "/watermeter/add/superior",
      data: {
        WaterMeterLevelMinusOne: this.waterMeterLevel
      }
    })
      .then(response => {
        this.superiorMeterList = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  watch: {
    watermeterlevelName: function(a, b){
    //   this.$ajax({
    //   method: "post",
    //   url: "/watermeter/add/superior",
    //   data: {
    //     WaterMeterLevelMinusOne: this.waterMeterLevel
    //   }
    // })
    //   .then(response => {
    //     this.superiorMeterList = response.data
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    alert(this.watermeterlevelName - 1)
    }
  }
}
</script>

<style>

</style>