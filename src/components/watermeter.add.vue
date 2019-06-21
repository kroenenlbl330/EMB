<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        <div class="fun-title" slot="search">
          <span>水表表具设备 -- 新增表具</span>
        </div>
        <div class="detail-button" slot="back-button" @click="back" 
          @mouseover="BackGray=overBackPurple" @mouseout="BackGray=outBackGray" title="详情">
          <div>
            <img :src="BackGray">
          </div>
        </div>
        <div class="save-button" slot="add-button" @click="save" 
          @mouseover="SaveGray=overSaveWhite" @mouseout="SaveGray=outSaveGray"  title="保存">
          <div>
            <img :src="SaveGray">
          </div>
          <span>保存</span>
        </div>
      </Header>
      <div class="main">
        <div class="main-content autoheight" :style="autoheight">
          <div class="main-content-list">
            <div>
              <div>
                <span>能源数据编号</span>
              </div>
              <div>
                <input type="text" v-model="energycode" placeholder="请输入16位能源数据编号"/>
              </div>
            </div>
            <div>
              <div>
                <span>图纸编号</span>
              </div>
              <div>
                <input type="text" v-model="drawingcode" placeholder="请输入图纸编号" @blur.prevent="loseFocus()"/>  <!-- :class="{'text-border': isInput}" @input="changeClass" -->
              </div>
            </div>
            <div>
              <div>
                <span>表具名称</span>
              </div>
              <div>
                <input type="text" v-model="name" placeholder="请输入表具名称"/>
              </div>
            </div>
            <div>
              <div>
                <span>安装位置</span>
              </div>
              <div>
                <input type="text" v-model="site" placeholder="请输入安装位置"/>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>上级表</span>
              </div>
              <div>
                <div id="superior" class="select-head" v-on:click.stop="dropDown('superiorMenu')">
                  <p>
                    <span>{{superiorValue}}&nbsp;&nbsp;{{superiorName}}</span>
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
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>所属楼宇</span>
              </div>
              <div>
                <div class="select-head" v-on:click.stop="dropDown('buildMenu')">
                  <p>
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
                <div class="select-head" v-on:click.stop="dropDown('departmentMenu')">
                  <p>
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
                <div class="select-head" v-on:click.stop="dropDown('schoolMenu')">
                  <p>
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
                <span>表具用途</span>
              </div>
              <div>
                <div class="select-head" v-on:click.stop="dropDown('purposeMenu')">
                  <p>
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
                <div class="select-head" v-on:click.stop="dropDown('supplyMenu')">
                  <p>
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
                <span>系数</span>
              </div>
              <div>
                <input type="text" v-model="coefficient" placeholder="请输入系数">
              </div>
            </div>
            <div>
              <div>
                <span>管径</span>
              </div>
              <div>
                <input type="text" v-model="diameter" placeholder="请输入管径">
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
                  <span v-if="state == 1">停用</span>
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
            <div class="radioCheck" :class="{'radioChecked':relevanceID === waterCollect.id}">
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
import BackGray from "../assets/back@24x24_gray.png";
import BackPurple from "../assets/back@24x24_purple.png";
import SaveGray from "../assets/save@24x24_gray.png";
import SaveWhite from "../assets/save@24x24_white.png";

import $ from "../static/jquery-vendor.js"
import { delimiter } from 'path';

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

      DropDownGray,

      BackGray,
      BackPurple,

      SaveGray,
      SaveWhite,

      communicationNum: 0,
      
      // 所属楼宇
      build: "",
      buildList: "",
      buildValue: "",
      buildMenu: false,
      // 所属部门
      department: "",
      departmentList: "",
      departmentValue: "",
      departmentMenu: false,
      // 所属校区
      school: "",
      schoolList: "",
      schoolValue: "",
      schoolMenu: false,
      // 表具用途
      purpose: "",
      purposeList: "",
      purposeValue: "",
      purposeMenu: false,
      // 电源
      supply: "",
      supplyList: "",
      supplyValue: "",
      supplyMenu: false,
      // 上级表
      superiorList: "",
      superiorValue: "",
      superiorName: "",
      superiorMenu: false,
      // 状态
      stateList: ['0', '1'],
      stateValue: 0,
      ind: 0,

      energycode: "",
      drawingcode: "",
      name: "",
      site: "",
      coefficient: "",
      diameter: "",

      autoheight:{
　　　　　　height:''
　　　 },
      meterlistheight:{
        height:''
　　　 },
      
      waterMeterList: [],
      waterCollectList: [],
      showRelevanceArea: false,
      relevanceID: "",
      relevanceContent: "",
    }
  },



  // VUE实例创建完毕，属性成功被绑定，DOM未生成，页面未被展示 ************************
  created() {
    // 数据初始化
    // this.id = this.$route.query.id
    // 实例创建完成后为window添加resize(调整)事件
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
  },



  // 模板编译完成并开始挂载，此方法结束后，DOM结构完成，页面就会显示出来 ************************
  mounted: function() {
    this.$ajax.all([
      this.$ajax.post('/purpose'),
      this.$ajax.post('/supply'),
      this.$ajax.post('/department'),
      this.$ajax.post('/coefficient'),
      this.$ajax.post('/build'),
      this.$ajax.post('/school'),
    ])
    .then(this.$ajax.spread((purpose,supply,department,coefficient,build,school)=> {
      this.purposeList = purpose.data
      this.supplyList = supply.data
      this.departmentList = department.data
      this.coefficientList = coefficient.data
      this.buildList = build.data
      this.schoolList = school.data
    }))

    // 获取采集
    this.$ajax({
      method: "post",
      url: "/watercollect"
    })
      .then(response => {
        // 去除state为0的项
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
            this.waterMeterList.push(response.data[i])
          }
        }
      })
      .catch(error => {
        console.log(error)
      })
  },



  // 页面的增删改查
  methods: {
    clickSelect(strItem,item,index){
      this[strItem + 'Value'] = item
      this.ind = index
    },
    back: function() {
      this.$router.go(-1)
    },

    // 当鼠标离开时
    loseFocus() {
      // 查询所有上级表
      this.$ajax({
        method: "post",
        url: "/returnlevel",
        data: {
          level: this.drawingcode.substring(1,2) - 1
        }
      })
        .then(response => {
          if(response.data == ""){
            this.superiorList = [{drawingcode:"最上级",name:""}]
          }else {
            this.superiorList = response.data;
          }
        })
        .catch(error => {
          console.log(error)
        })
    },

    // 判断是否有重复的图纸或能源数据编号
    judgementRepeat() {
      for(let i=0;i<this.waterMeterList.length;i++){
        if(this.waterMeterList[i].energycode == this.energycode || this.waterMeterList[i].drawingcode == this.drawingcode){
          alert("？？？")
        }
      }
    },

    save: function() {
      let energycode = this.energycode
      let drawingcode = this.drawingcode
      let name = this.name
      let site = this.site

      let superior = this.superiorValue + " " + this.superiorName
      let relevance = this.relevanceContent
      let relevance_id = this.relevanceID
      let level = this.drawingcode.substring(1,2)

      let build = this.buildValue
      let department = this.departmentValue
      let school = this.schoolValue
      let purpose = this.purposeValue
      let supply = this.supplyValue

      let coefficient = this.coefficient
      let diameter = this.diameter

      let state = this.stateValue


      if (!drawingcode) {
        alert("图纸编号不能为空aa")
        return
      } else if (!name) {
        alert("表具名称不能为空")
        return
      } else if (!site) {
        alert("安装位置不能为空")
        return
      } else if (!coefficient) {
        alert("请选择正确的系数")
        return
      } else if (!diameter) {
        alert("请选择正确的管径")
        return;
      } else {
        this.$ajax({
          method: "post",
          url: "/addmeter",
          data: {
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
            school: school,
            purpose: purpose,
            supply: supply,

            coefficient: coefficient,
            diameter: diameter,

            state: state,
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
      }
    },

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
      this[strItem + 'Menu'] = false
      this[strItem + 'Value'] = items[0]
      this[strItem + 'Name'] = items[1]
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
      this.school = false
    },
    
    // 
    selectMeter: function(id) {
      if(this.relevanceID != 0 && this.relevanceID == id){
        this.relevanceID = ""
      }else{
        this.relevanceID = id
      }
    },

    chooseRelevanceMeter: function(id) {
      this.relevanceContent = ""
      for(let i=0;i<this.waterCollectList.length;i++){
        if(this.waterCollectList[i].id == id){
          this.relevanceContent = this.waterCollectList[i].communicationcode + " " + this.waterCollectList[i].site
        }
      }      
    },

    getHeight(){
      this.autoheight.height = window.innerHeight-304+'px'
      this.meterlistheight.height = window.innerHeight-248+'px'
    },
  },



  //过滤器
  filters: {
    empty: function(value) {
      return value ? value : "no more..."
    }
  },




  watch: {
    // watermeterlevelName: function(a, b){
    //   this.$ajax({
    //   method: "post",
    //   url: "/watermeter/add/superior",
    //   data: {
    //     WaterMeterLevelMinusOne: this.waterMeterLevel
    //   }
    // })
    //   .then(response => {
    //     this.superiorList = response.data
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // alert(this.watermeterlevelName - 1)
    // }
    drawingcode() {
      this.superiorValue = "..."
      this.superiorName = ""
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