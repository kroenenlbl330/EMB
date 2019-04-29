<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        <div class="header-title" slot="search">
          <p>水表表具设备 -- 修改表具</p>
        </div>
      </Header>
      <div class="main row-20">
        <div class="main-content">
          <div class="main-content-list">
            <div>
              <div>
                <span>能源数据编号</span>
              </div>
              <div>      
                <input type="text" v-model="energycode" id="EnergyCode" value=""/>
              </div>
            </div>
            <div>
              <div>
                <span>图纸编号</span>
              </div>
              <div>
                <input type="text" v-model="drawingcode"/>
              </div>
            </div>
            <div>
              <div>
                <span>表具名称</span>
              </div>
              <div> 
                <input type="text" v-model="name"/>
              </div>
            </div>
            <div>
              <div>
                <span>安装位置</span>
              </div>
              <div>      
                <input type="text" v-model="site" id="site" value=""/>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>上级表</span>
              </div>
              <div> 
                <div class="select-head black" v-on:click.stop="funN('selectWaterMeterLevelShowSelect')">
                  <p>
                    <span>{{SuperiorMeter}}&nbsp;&nbsp;{{SuperiorMeterName}}</span>
                    <span>{{selectWaterMeterLevelName}}&nbsp;&nbsp;{{selectWaterMeterLevelMeterName}}</span>
                    </p>
                  <img :src="IconDropDown">
                </div>
                <div v-show="selectWaterMeterLevelShowSelect">
                  <div v-for="(selectWaterMeterLevel, index) in selectWaterMeterLevelList" @click.stop="select('selectWaterMeterLevel',selectWaterMeterLevel)" :key="index">
                    {{selectWaterMeterLevel}}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <span>所属楼宇</span>
              </div>
              <div> 
                <div class="select-head black" v-on:click.stop="funN('selectWaterMeterLevelShowSelect')">
                  <p>
                    <span>{{SuperiorMeter}}&nbsp;&nbsp;{{SuperiorMeterName}}</span>
                    <span>{{selectWaterMeterLevelName}}&nbsp;&nbsp;{{selectWaterMeterLevelMeterName}}</span>
                    </p>
                  <img :src="IconDropDown">
                </div>
                <div v-show="selectWaterMeterLevelShowSelect">
                  <div v-for="(selectWaterMeterLevel, index) in selectWaterMeterLevelList" @click.stop="select('selectWaterMeterLevel',selectWaterMeterLevel)" :key="index">
                    {{selectWaterMeterLevel}}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <span>所属部门</span>
              </div>
              <div> 
                <div class="select-head black" v-on:click.stop="funN('selectWaterMeterLevelShowSelect')">
                  <p>
                    <span>{{SuperiorMeter}}&nbsp;&nbsp;{{SuperiorMeterName}}</span>
                    <span>{{selectWaterMeterLevelName}}&nbsp;&nbsp;{{selectWaterMeterLevelMeterName}}</span>
                    </p>
                  <img :src="IconDropDown">
                </div>
                <div v-show="selectWaterMeterLevelShowSelect">
                  <div v-for="(selectWaterMeterLevel, index) in selectWaterMeterLevelList" @click.stop="select('selectWaterMeterLevel',selectWaterMeterLevel)" :key="index">
                    {{selectWaterMeterLevel}}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <span>用途</span>
              </div>
              <div> 
                <div class="select-head black" v-on:click.stop="funN('selectWaterMeterLevelShowSelect')">
                  <p>
                    <span>{{SuperiorMeter}}&nbsp;&nbsp;{{SuperiorMeterName}}</span>
                    <span>{{selectWaterMeterLevelName}}&nbsp;&nbsp;{{selectWaterMeterLevelMeterName}}</span>
                    </p>
                  <img :src="IconDropDown">
                </div>
                <div v-show="selectWaterMeterLevelShowSelect">
                  <div v-for="(selectWaterMeterLevel, index) in selectWaterMeterLevelList" @click.stop="select('selectWaterMeterLevel',selectWaterMeterLevel)" :key="index">
                    {{selectWaterMeterLevel}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>系数</span>
              </div>
              <div>      
                <input type="text" v-model="coefficient" id="EnergyCode" value=""/>
              </div>
            </div>
            <div>
              <div>
                <span>管径</span>
              </div>
              <div>      
                <input type="text" v-model="diameter" id="pipe" value=""/>
              </div>
            </div>
            <div>
              <div>
                <span>表级</span>
              </div>
              <div>      
                <input type="text" v-model="level" id="level" value=""/>
              </div>
            </div>
          </div>
          <div class="main-content-list"><!-- class="main-content-list" -->
            <div>
              <div>
                <span>状态</span>
              </div>
              <div class="a" >
                <div v-for="(state, index) in stateList" @click.stop="clickSelect('state', state, index)" :key="index" :class="{'active':ind === index}" >
                  <span v-if="state == 0">激活</span>
                  <span v-else-if="state == 1">停用</span>
                  <span v-else-if="state == 2">删除</span>
                </div>
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
import { type } from 'os';

export default {
  components: {
    Header,
    RightBar
  },
  data() {
    return {
      checkedcode: this.$route.query.drawingcode,
      // index: this.$route.query.id,

      ind: 0,

      drawingcode: "",
      metername: "",
      InstallationSite: "",
      AssociationCollect: "",
      coefficient: "",
      diameter: "",
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

      diameterMenu: false,
      diameterList: "",
      diameterValue: "",
      levelMenu: false,
      levelValue: "",
      coefficientMenu: false,
      coefficientList: "",
      stateMenu: false,
      stateList: ['0', '1', '2'],
      stateValue: 0,

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

      levelList: ['1','2','3','4','5','6','2','3','4','5','6'],
      selectWaterMeterLevelList: ['1','2','3','4','5','6','2','3','4','5','6'],
      meterUseList: "",
      subordinateDepartmentsList: "",
      powerTypeList: "",
      pipeDiameterList: "",

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
        checkedcode: this.checkedcode
      }
    })
      .then(response => {
        this.drawingcode = response.data[0].drawingcode
        this.name = response.data[0].name
        this.site = response.data[0].site
        this.energycode = response.data[0].energycode
        this.relevance = response.data[0].relevance
        this.coefficient = response.data[0].coefficient
        this.diameter = response.data[0].diameter
        this.level = response.data[0].level      
        this.superior = response.data[0].superior
        this.department = response.data[0].department
        this.remark = response.data[0].remark
      })
      .catch(error => {
        console.log(error)
      })

    this.$ajax.all([
      this.$ajax.post('/watermeter/getdiameter'),
      this.$ajax.post('/watermeter/getcoefficient')
    ])
    .then(this.$ajax.spread((diameter, coefficient)=> {
      this.diameterList = diameter.data
      this.coefficientList = coefficient.data
    }))
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
            history.go(-1)
          }
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
    
    dropDown(strMenu) {
      var arrMenu = [
        'levelMenu',
        'stateMenu',
        'coefficientMenu',
        'diameterMenu',
      ]
      for(let i = 0; i < arrMenu.length; i++){
        this[arrMenu[i]] = false

      }    
      this[strMenu] = !this[strMenu]
      document.addEventListener("click",this.removeEvt)
    },

    selectDropDownItem(strItem,item){
      this[strItem + 'Menu'] = false
      this[strItem + 'Value'] = item
    },

    removeEvt(){
      document.removeEventListener("click",()=>{})
      this.hiedMenu()
    },
    hiedMenu(){
      this.stateMenu = false
      this.levelMenu = false
      this.coefficientMenu = false
      this.diameterMenu = false
      this.powerTypeShowSelect = false
      this.selectWaterMeterLevelShowSelect = false
      this.subordinateDepartmentsShowSelect = false
      this.meterUseShowSelect = false
    },


    clickSelect(strItem,item,index){
      this[strItem + 'Value'] = item
      this.ind = index
    }
  },
  filters: {
    empty: function (value) {
      return value?value:'no more...'
    }
  },
  created() {
    this.id = this.$route.query.id
  },
}
</script>

<style>
.black > p > span:first-child {
  font-weight: bolder !important;
  color: var(--black) !important;
}

.a{
  display: flex;
  /* justify-content: flex-start; */
  /* flex-direction: column; */
}

.a div{
  width: 64px;
  background-color: #eee;
  margin-right: 16px;
  border-radius: 4px;
  color: #ccc;
}

.active{
  background-color: var(--black) !important;
  color: var(--white) !important;
}

.a span{
  line-height: 32px;
  display: flex;
  justify-content: center;
}
</style>