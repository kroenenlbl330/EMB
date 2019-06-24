<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        <div class="fun-title" slot="search">
          <span>水表表具设备 -- 修改表具</span>
        </div>
        <div class="detail-button" slot="back-button" @click="back" 
          @mouseover="BackGray=overBackPurple" @mouseout="BackGray=outBackGray" title="详情">
          <div>
            <img :src="BackGray">
          </div>
        </div>
        <div class="save-button" slot="add-button" @click="save" 
          @mouseover="SaveGray=overSaveWhite" @mouseout="SaveGray=outSaveGray" title="保存">
          <div>
            <img :src="SaveGray">
          </div>
          <span>保存</span>
        </div>
      </Header>
      <div class="main">
        <div class="main-content" autoheight :style="autoheight">
          <div class="main-content-list">
            <div>
              <div>
                <span>能源数据编号{{promptEnergyCode}}</span>
              </div>
              <div>
                <span v-once hidden>{{energyCodeEC}}</span>      
                <input type="text" v-model="energycode"/>
              </div>
            </div>
            <div>
              <div>
                <span>图纸编号{{promptDrawingCode}}</span>
              </div>
              <div>
                <input type="text" v-model="drawingcode"/>
              </div>
            </div>
            <div>
              <div>
                <span>表具名称{{promptName}}</span>
              </div>
              <div> 
                <input type="text" v-model="name"/>
              </div>
            </div>
            <div>
              <div>
                <span>安装位置{{promptSite}}</span>
              </div>
              <div>      
                <input type="text" v-model="site"/>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>上级表{{promptSuperior}}</span>
              </div>
              <div>
                <div class="select-head" @click.stop="dropDown('superiorMenu')">
                  <p>
                    <span>{{superior}}</span>
                    <span>{{superiorValue}}</span>
                  </p>
                  <img :src="DropDownGray">
                </div>
                <div v-show="superiorMenu">
                  <div v-for="(superior, index) in superiorList" @click.stop="selectDropDownItem('superior',superior.drawingcode,superior.name)" :key="index">
                    {{superior.drawingcode}}&nbsp;&nbsp;{{superior.name}}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <span>关联采集</span>
              </div>
              <div class="choose-relevance">    
                <div>
                  <span>{{relevanceContent}}</span>
                </div>
                <div class="choose-relevance-btn" @click="showRelevanceArea = !showRelevanceArea">
                  <span>选择采集</span>
                </div>
                <!-- <div style="width:40px;height:40px;background:hotpink;">

                </div> -->
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>所属楼宇</span>
              </div>
              <div> 
                <div class="select-head black" v-on:click.stop="dropDown('buildMenu')">
                  <p>
                    <span>{{build}}</span>
                    <span>{{buildValue}}</span>
                    </p>
                  <img :src="DropDownGray">
                </div>
                <div v-show="buildMenu">
                  <div v-for="(build, index) in buildList" @click.stop="selectDropDownItem('build',build.build)" :key="index">
                    {{build.build}}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <span>所属部门</span>
              </div>
              <div>
                <div class="select-head black" v-on:click.stop="dropDown('departmentMenu')">
                  <p>
                    <span>{{department}}</span>
                    <span>{{departmentValue}}</span>
                    </p>
                  <img :src="DropDownGray">
                </div>
                <div v-show="departmentMenu">
                  <div v-for="(department, index) in departmentList" @click.stop="selectDropDownItem('department',department.department)" :key="index">
                    {{department.department}}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <span>所属校区</span>
              </div>
              <div>
                <div class="select-head black" v-on:click.stop="dropDown('schoolMenu')">
                  <p>
                    <span>{{school}}</span>
                    <span>{{schoolValue}}</span>
                    </p>
                  <img :src="DropDownGray">
                </div>
                <div v-show="schoolMenu">
                  <div v-for="(school, index) in schoolList" @click.stop="selectDropDownItem('school',school.school)" :key="index">
                    {{school.school}}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <span>用途</span>
              </div>
              <div> 
                <div class="select-head black" v-on:click.stop="dropDown('purposeMenu')">
                  <p>
                    <span>{{purpose}}</span>
                    <span>{{purposeValue}}</span>
                    </p>
                  <img :src="DropDownGray">
                </div>
                <div v-show="purposeMenu">
                  <div v-for="(purpose, index) in purposeList" @click.stop="selectDropDownItem('purpose',purpose.purpose)" :key="index">
                    {{purpose.purpose}}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <span>电源类型</span>
              </div>
              <div>
                <div class="select-head black" v-on:click.stop="dropDown('supplyMenu')">
                  <p>
                    <span>{{supply}}</span>
                    <span>{{supplyValue}}</span>
                  </p>
                  <img :src="DropDownGray">
                </div>
                <div v-show="supplyMenu">
                  <div v-for="(supply, index) in supplyList" @click.stop="selectDropDownItem('supply',supply.supply)" :key="index">
                    {{supply.supply}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>系数{{promptCoefficient}}</span>
              </div>
              <div>      
                <input type="text" v-model="coefficient"/>
              </div>
            </div>
            <div>
              <div>
                <span>管径{{promptDiameter}}</span>
              </div>
              <div>      
                <input type="text" v-model="diameter"/>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>状态</span>
              </div>
              <div class="select-state" >
                <div v-for="(state, index) in stateList" @click.stop="clickSelect('state', state, index)" :key="index" :class="{'active':ind === index}">
                  <span v-if="state == 0">激活</span>
                  <span v-else-if="state == 1">停用</span>
                  <span v-else-if="state == 2">删除</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 选择关联采集 -->
      <div class="relevance-area" v-if="showRelevanceArea"> 
        <div>
          <p>选择关联水表</p>
          <p>请选择一个采集设备，并点击下方确认键来添加关联水表</p>
        </div>
        <div class="relevance-content meterlistheight" :style="meterlistheight">
          <div class="relevance-list" v-for="(waterCollect, index) in waterCollectList" :key="index"
          @click="selectMeter(waterCollect.id)">
            <div class="radioCheck" :class="{'radioChecked':relevanceID == waterCollect.id}">
              <!-- 选择框 -->
            </div>   
            <span class="relevance-list-code">{{waterCollect.communicationcode}}</span>
            <span class="relevance-list-name">{{waterCollect.site}}</span>
          </div>
        </div>
        <div class="relevance-area-btn" @click="chooseRelevanceMeter(relevanceID),showRelevanceArea = !showRelevanceArea">
          <span>确认关联</span>
        </div>
      </div>

      <Footer>
      </Footer>
    </div>
  </div>
</template>

<script>
import Header from "./header.vue"
import Footer from "./footer.vue"

import DropDownGray from "../assets/drop-down@24x24_gray.png"
import BackGray from "../assets/back@24x24_gray.png"
import BackPurple from "../assets/back@24x24_purple.png"
import SaveGray from "../assets/save@24x24_gray.png"
import SaveWhite from "../assets/save@24x24_white.png"

import {strategies} from "../static/pubilc.js"
import { type } from 'os'



export default {
  components: {
    Header,
  },
  data() {
    return {
      overBackPurple: BackPurple,
      outBackGray: BackGray,
      overSaveWhite: SaveWhite,
      outSaveGray: SaveGray,

      BackGray,
      BackPurple,
      SaveGray,
      SaveWhite,
      DropDownGray,

      checkedcode: this.$route.query.drawingcode,
      id: this.$route.query.id,

      energycode: "",
      drawingcode: "",
      name: "",
      site: "",
      superior: "",
      relevance_id: "",
      relevance: "",
      build: "",
      department: "",
      school: "",
      purpose: "",
      supply: "",
      coefficient: "",
      diameter: "",
      state: "",

      // 上级表
      superiorList: "",
      superiorValue: "",
      superiorMenu: false,
      // 所属楼宇
      buildList: "",
      buildValue: "",
      buildMenu: false,
      // 所属部门
      departmentList: "",
      departmentValue: "",
      departmentMenu: false,
      // 所属校区
      schoolList: "",
      schoolValue: "",
      schoolMenu: false,
      // 表具用途
      purposeList: "",
      purposeValue: "",
      purposeMenu: false,
      // 电源
      supplyList: "",
      supplyValue: "",
      supplyMenu: false,
      // 状态
      stateList: ['0', '1', '2'],
      stateValue: 0,
      ind: "",

      autoheight:{
        height:''
　　　 },
      meterlistheight:{
        height:''
　　　 },

      showRelevanceArea: false,

      // v-once的值 不会重新渲染数据
      energyCodeEC: "",
      relevanceID: "",
      relevanceContent: "",
      waterCollectList: [],
      waterMeterList: [],

      promptEnergyCode: "",
      promptDrawingCode: "",
      promptName: "",
      promptSite: "",
      promptSuperior: "",
      promptBuild: "",
      promptDepartment: "",
      promptSchool: "",
      promptPurpose: "",
      promptSupply: "",
      promptCoefficient: "",
      promptDiameter: "",
    }
  },



  // VUE实例创建完毕，属性成功被绑定，DOM未生成，页面未被展示 ************************
  created() {
    // 数据初始化
    this.id = this.$route.query.id
    // 实例创建完成后为window添加resize(调整)事件
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
  },



  // 模板编译完成并开始挂载，此方法结束后，DOM结构完成，页面就会显示出来 ************************
  mounted: function() {
    this.$ajax({
      method: "post",
      url: "/watermeter/detail",
      data: {
        id: this.id
      }
    })
      .then(response => {
        this.energycode = response.data[0].energycode
        this.energyCodeEC = response.data[0].energycode
        this.drawingcode = response.data[0].drawingcode
        this.name = response.data[0].name
        this.site = response.data[0].site
        this.superior = response.data[0].superior
        this.relevance_id = response.data[0].relevance_id
        this.relevanceID = response.data[0].relevance_id
        this.relevanceContent = response.data[0].relevance
        this.build = response.data[0].build
        this.department = response.data[0].department
        this.school = response.data[0].school
        this.purpose = response.data[0].purpose
        this.supply = response.data[0].supply
        this.coefficient = response.data[0].coefficient
        this.diameter = response.data[0].diameter
        this.state = response.data[0].state
        this.ind = response.data[0].state
      })
      .catch(error => {
        console.log(error)
      })

    this.$ajax.all([
      this.$ajax.post('/supply'),
      this.$ajax.post('/purpose'),
      this.$ajax.post('/department'),
      this.$ajax.post('/build'),
      this.$ajax.post('/school'),
    ])
    .then(this.$ajax.spread((supply,purpose,department,build,school)=> {
      this.supplyList = supply.data
      this.purposeList = purpose.data
      this.departmentList = department.data
      this.buildList = build.data
      this.schoolList = school.data
    }))

    // 获取采集
    this.$ajax({
      method: "post",
      url: "/watercollect"
    })
      .then(response => {
        for(let i=0;i<response.data.length;i++){
          if(response.data[i].state == 0){          
            this.waterCollectList.push(response.data[i])
          }
        }
      })
      .catch(error => {
        console.log(error)
      })

    // 获取水表
    this.$ajax({
      method: "post",
      url: "/watermeter"
    })
      .then(response => {
        // 去除state为2的项
        for(let i=0;i<response.data.length;i++){
          if(response.data[i].state != 2){
            if(response.data[i].id != this.id){
              this.waterMeterList.push(response.data[i])
            }
          }
        }
      })
      .catch(error => {
        console.log(error)
      })
  },


  // 侦听器
  watch: {
    energycode: function(newVal,oldVal){ 
      this.promptEnergyCode = strategies.isEnergyCode(newVal,this.waterMeterList)
    },
    drawingcode(newVal,oldVal) {
      this.promptDrawingCode = strategies.isDrawingCode(newVal,this.waterMeterList)

      if(oldVal!=""){
        // this.superiorCode = ""
        // this.superiorName = ""
        this.superior = ""
        
        this.$ajax({
        method: "post",
        url: "/returnlevel",
        data: {
          level: this.drawingcode.substring(1,2) - 1
        }
      })
        .then(response => {
          let arr = response.data
          for(var i=0; i<arr.length; i++){
            if(arr[i].drawingcode == this.energyCodeEC){
              var index = arr.indexOf(arr[i])
              if (index > -1) {
                arr.splice(index, 1)
              }
            }
          }
          if(this.drawingcode.substring(1,2) == 1){
            this.superiorList = [{drawingcode:"最上级", name:""}]
          }else if(response.data == ""){
            this.superiorList = [{drawingcode:"无上级", name:""}]
            return
           }else{
            this.superiorList = arr
          }
          
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
    name(newVal,oldVal) {
      this.promptName = strategies.isNoEmpty(newVal,"表具名称不能为空")
    },
    site(newVal,oldVal) {
      this.promptSite = strategies.isNoEmpty(newVal,"安装位置不能为空")
    },
    superior(newVal,oldVal) {
      this.promptSuperior = strategies.isNoEmpty(newVal,"请选择上级表")
    },
    // relevance(value,name) {

    //},
    build(newVal,oldVal) {
      this.promptBuild = strategies.isNoEmpty(newVal,"请选择楼宇")
    },
    department(newVal,oldVal) {
      this.promptDepartment = strategies.isNoEmpty(newVal,"请选择部门")
    },
    schoole(newVal,oldVal) {
      this.promptSchool = strategies.isNoEmpty(newVal,"请选择校区")
    },
    purpose(newVal,oldVal) {
      this.promptPurpose = strategies.isNoEmpty(newVal,"请选择用途")
    },
    supply(newVal,oldVal) {
      this.promptSupply = strategies.isNoEmpty(newVal,"请选择电源类型")
    },
    coefficient(newVal,oldVal) {
      this.promptCoefficient = strategies.isCoefficient(newVal,"系数不能为空","系数必须为0.1或1")
    },
    diameter(newVal,oldVal) {
      this.promptDiameter = strategies.isDiameter(newVal,"管径不能为空","不存在该管径")
    },
  },



  // 页面的增删改查
  methods: {
    back: function() {
      this.$router.go(-1)
    },

    addPreZero(index) {
      return ("00" + index).slice(-3)
    },

    // 当鼠标离开能源编号时,检查是否输入正确
    // loseFocusEnergyCode(value) {
    //   this.promptEnergyCode = strategies.isEnergyCode(value)
    // },
    // 当鼠标离开图纸编号时,检查是否输入正确并请求上级表
    // loseFocusDrawingCode(value) {
    //   this.$ajax({
    //     method: "post",
    //     url: "/returnlevel",
    //     data: {
    //       level: this.drawingcode.substring(1,2) - 1
    //     }
    //   })
    //     .then(response => {
    //       let arr = response.data
    //       for(var i=0; i<arr.length; i++){
    //         if(arr[i].drawingcode == this.energyCodeEC){
    //           var index = arr.indexOf(arr[i]);
    //           if (index > -1) {
    //             arr.splice(index, 1);
    //           }
    //         }
    //       }
    //       if(response.data == ""){
    //         this.superiorList = [{drawingcode:"最上级"},{name:""}]
    //       }else {
    //         this.superiorList = response.data;
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },
    // loseFocus() {
    //   this.superior = ""
    //   this.$ajax({
    //     method: "post",
    //     url: "/returnlevel",
    //     data: {
    //       level: this.drawingcode.substring(1,2) - 1
    //     }
    //   })
    //     .then(response => {
    //       let arr = response.data
    //       for(var i=0; i<arr.length; i++){
    //         if(arr[i].drawingcode == this.energyCodeEC){
    //           var index = arr.indexOf(arr[i])
    //           if (index > -1) {
    //             arr.splice(index, 1)
    //           }
    //         }
    //       }
    //       if(this.drawingcode.substring(1,2) == 1){
    //         this.superiorList = [{drawingcode:"最上级", name:""}]
    //       }else if(response.data == ""){
    //         this.superiorList = [{drawingcode:"无上级", name:""}]
    //         return
    //        }else{
    //         this.superiorList = arr
    //       }
          
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },    

    save: function() {
      let energycode = this.energycode
      let drawingcode = this.drawingcode
      let name = this.name
      let site = this.site

      let relevance = this.relevanceContent
      let relevance_id = this.relevanceID
      let superior
      (this.superior != '')?superior = superior=this.superior:this.superiorValue
      let level = this.drawingcode.substring(1,2)

      let build
      (this.build != '')?build=this.build:build=this.buildValue
      let department
      (this.department != '')?department=this.department:department=this.departmentValue
      let purpose
      (this.purpose != '')?purpose=this.purpose:purpose=this.purposeValue
      let supply
      (this.supply != '')?supply=this.supply:supply=this.supplyValue

      let coefficient = this.coefficient
      let diameter = this.diameter

      let state = this.stateValue
      
      if (this.promptEnergyCode||
          this.promptDrawingCode||
          this.promptName||
          this.promptSite||
          this.promptSuperior||
          this.promptBuild||
          this.promptDepartment||
          this.promptSchool||
          this.promptPurpose||
          this.promptSupply||
          this.promptCoefficient||
          this.promptDiameter) {
        alert("请检测填写是否正确")
        return
      } else {
        this.$ajax({
          method: "post",
          url: "/editmeter",
          data: {
            id: this.id,
            energycode: energycode,
            drawingcode: drawingcode,
            name: name,
            site: site,
            superior: superior,
            relevance: relevance,
            relevance_id: relevance_id,
            level: level,
            build: build,
            department: department,
            purpose: purpose,
            supply: supply,
            coefficient: coefficient,
            diameter: diameter,
            state: state,
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

    // selsctSuperior() {
    //   // 获取上级表的列表
    //   this.$ajax({
    //     method: "post",
    //     url: "/returnlevel",
    //     data: {
    //       level: this.drawingcode.substring(1,2) - 1
    //     }
    //   })
    //     .then(response => {
    //       let arr = response.data
    //       for(var i=0; i<arr.length; i++){
    //         if(arr[i].drawingcode == this.energyCodeEC){
    //           var index = arr.indexOf(arr[i])
    //           if (index > -1) {
    //             arr.splice(index, 1)
    //           }
    //         }
    //       }
    //       if(this.drawingcode.substring(1,2) == 1){
    //         this.superiorList = [{drawingcode:"最上级", name:""}]
    //       }else if(response.data == ""){
    //         this.superiorList = [{drawingcode:"无上级", name:""}]
    //         return
    //        }else{
    //         this.superiorList = arr
    //       }
          
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },

    dropDown(strMenu) {
      // 点击下拉菜单 传入菜单名称
      // 创建 arrMenu 菜单名称列表
      var arrMenu = [
        'buildMenu',
        'departmentMenu',
        'purposeMenu',
        'supplyMenu',
        'superiorMenu',
        'schoolMenu',
      ]
      // 循环菜单名称 使所有菜单为关闭状态
      for(let i = 0; i < arrMenu.length; i++){
        this[arrMenu[i]] = false
      } 
      // 传入的菜单名称和列表中的匹配则打开   
      this[strMenu] = !this[strMenu]
      // 为页面添加函数
      document.addEventListener("click",this.removeEvt)
    },
    selectDropDownItem(strItem,...items){
      // 选择菜单项 传入选择项的名称，选择项的值
      this[strItem] = ""
      this[strItem + 'Menu'] = false
      if(!items[1]) {
        this[strItem + 'Value'] = items[0]
      }else {
        this[strItem] = items[0] + " " + items[1]
      }
    },
    removeEvt(){
      //为document移除点击触发removeEvt()
      document.removeEventListener("click",()=>{})
      this.hiedMenu()
    },
    hiedMenu(){
      this.buildMenu = false
      this.departmentMenu = false
      this.purposeMenu = false
      this.supplyMenu = false
      this.superiorMenu = false
      this.schoolMenu = false
    },
    clickSelect(strItem,item,index){
      this[strItem + 'Value'] = item
      this.ind = index
    },

    // 在关联列表中选择的状态
    selectMeter: function(id) {
      if(this.relevanceID != 0 && this.relevanceID == id){
        this.relevanceID = ""
      }else{
        this.relevanceID = id
      }
    },

    // 将在关联列表中选中的采集信息保存到this.relevanceContent中
    chooseRelevanceMeter: function(id) {
      this.relevanceContent = ""
      for(let i=0;i<this.waterCollectList.length;i++){
        if(this.waterCollectList[i].id == id){
          this.relevanceContent = this.waterCollectList[i].communicationcode + " " + this.waterCollectList[i].site
        }
      }      
    },
    //
    getHeight(){
      this.autoheight.height = window.innerHeight-304+'px'
      this.meterlistheight.height = window.innerHeight-248+'px'
    },
  },



  filters: {
    empty: function (value) {
      return value?value:'no more...'
    }
  },



  // 实例销毁后调用 Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
  destroyed() {
    // 实例销毁后为window移除resize(调整)事件
    window.removeEventListener('resize', this.getHeight)
  },
}
</script>

<style>

</style>