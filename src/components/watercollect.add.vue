<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        <div class="fun-title" slot="search">
          <span>水表采集设备 -- 添加采集</span>
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
        <div class="main-content autoheight" :style="autoheight">
          <div class="main-content-list">
            <div>
              <div>
                <span>硬件编号</span>
              </div>
              <div>
                <input type="text" v-model="equipmentcode"/>
              </div>
            </div>
            <div>
              <div>
                <span>通讯编号</span>
              </div>
              <div>
                <input type="text" v-model="communicationcode"/>
              </div>
            </div>
            <div>
              <div>
                <span>安装位置</span>
              </div>
              <div> 
                <input type="text" v-model="site"/>
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
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>关联中继</span>
              </div>
              <div class="choose-relevance">    
                <div>
                  <span>{{relevanceContent}}</span>
                </div>
                <div class="choose-relevance-btn" @click="showRelevanceArea = !showRelevanceArea">
                  <span>选择中继</span>
                </div>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>电源</span>
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
          <!-- 分割线
          <div class="main-content-list">
            <div>
              <div class="main-content-divider"></div>
            </div>
          </div> -->
          <div class="main-content-list">
            <div>
              <div>
                <span>状态</span>
              </div>
              <div class="select-state" >
                <div v-for="(state, index) in stateList" @click.stop="selectState('state', state, index)" :key="index" :class="{'active':ind === index}">
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
          <div class="relevance-list" v-for="(waterRepeater, index) in waterRepeaterList" :key="index"
          @click="selectMeter(waterRepeater.id)">
            <div class="radioCheck" :class="{'radioChecked':relevanceID === waterRepeater.id}">
              <!-- 选择框 -->
            </div>   
            <span class="relevance-list-code">{{waterRepeater.communicationcode}}</span>
            <span class="relevance-list-name">{{waterRepeater.site}}</span>
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

import $ from "../static/jquery-vendor.js"

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      waterRepeaterList: [],
      selectMeterList: false,
      selectAssociationPrompt: "选择关联水表",
      WaterMeterName: "",
      DrawingNumber: "",
      selectAssociationArr: [],

      overBackPurple: BackPurple,
      outBackGray: BackGray,

      overSaveWhite: SaveWhite,
      outSaveGray: SaveGray,

      DropDownGray,

      BackGray,
      BackPurple,

      SaveGray,
      SaveWhite,

      communicationcode: "",
      equipmentcode: "",
      site: "",

      relevanceID: "",
      relevanceContent: "",

      // 电源
      supply: "",
      supplyList: "",
      supplyValue: "",
      supplyMenu: false,
      // 所属校区
      school: "",
      schoolList: "",
      schoolValue: "",
      schoolMenu: false,
      // 状态
      stateList: ['0', '1'],
      stateValue: 0,
      ind: 0,

      showRelevanceArea: false,

      //获取视口高度
      autoheight:{
        height:''
　　　 },
      meterlistheight:{
        height:''
　　　 },
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


  mounted: function() {
    // 查询其他列表选项
    this.$ajax.all([
      this.$ajax.post('/supply'),
      this.$ajax.post('/school'),
    ])
    .then(this.$ajax.spread((supply,school)=> {
      this.supplyList = supply.data
      this.schoolList = school.data
    }))

    // 获取中继
    this.$ajax({
      method: "post",
      url: "/waterrepeater"
    })
      .then(response => {
        this.waterRepeaterList = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },



  // 页面的增删改查 
  methods: {
    back: function() {
      this.$router.go(-1)
    },
    save: function() {
      let communicationcode = this.communicationcode
      let equipmentcode = this.equipmentcode
      let site = this.site
      let school = this.schoolValue

      let relevance_id = this.relevanceID
      let relevance = this.relevanceContent

      let supply = this.supplyValue

      let state = this.stateValue

      if (!communicationcode) {
        alert("图纸编号不能为空");
        console('2')
        return;
      } else if (!equipmentcode) {
        alert("表具名称不能为空");
        return;
      } else if (!site) {
        alert("安装位置不能为空");
        return;
      } else {
        this.$ajax({
          method: "post",
          url: "/watercollect/add",
          data: {
            communicationcode: communicationcode,
            equipmentcode: equipmentcode,
            site: site,
            school: school,

            relevance_id: relevance_id,
            relevance: relevance,

            supply: supply,

            state: state
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
          })
      }
    },
    
    // 以下多个函数为下拉选项
    dropDown(strMenu) {
      // 点击下拉菜单 传入菜单名称
      // 创建 arrMenu 菜单名称列表
      var arrMenu = [
        // 'buildMenu',
        // 'departmentMenu',
        'schoolMenu',
        // 'superiorMenu',
        'supplyMenu',
        // 'superiorMenu',
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
      this[strItem + 'Value'] = items[0]
      this[strItem + 'Name'] = items[1]
    },
    removeEvt(){
      //为document移除点击触发removeEvt()
      document.removeEventListener("click",()=>{})
      this.hiedMenu()
    },
    hiedMenu(){
      this.supplyMenu = false
      this.schoolMenu = false
    },
    selectState(strItem,item,index){
      // 选择设备状态
      this[strItem + 'Value'] = item
      this.ind = index
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
      for(let i=0;i<this.waterRepeaterList.length;i++){
        if(this.waterRepeaterList[i].id == id){
          this.relevanceContent = this.waterRepeaterList[i].communicationcode + " " + this.waterRepeaterList[i].site
        }
      }
    },

    // 获取视口高度
    getHeight() {
      this.autoheight.height = window.innerHeight-304+'px'
      this.meterlistheight.height = window.innerHeight-248+'px'
    },
  },



  // 实例销毁后调用 Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 ************************
  destroyed() {
    // 实例销毁后为window移除resize(调整)事件
    window.removeEventListener('resize', this.getHeight)
  },



  filters: {
    empty: function(value) {
      return value ? value : "no more..."
    }
  },
}
</script>

<style>

</style>