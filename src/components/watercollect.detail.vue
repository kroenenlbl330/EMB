<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        <div class="fun-title" slot="search">
          <span>水表采集设备 -- 采集详情</span>
        </div>
        <div class="detail-button" slot="back-button" @click="back" 
          @mouseover="BackGray=overBackPurple" @mouseout="BackGray=outBackGray" title="详情">
          <div>
            <img :src="BackGray">
          </div>
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
                <span>{{Detail.equipmentcode}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>通讯编号</span>
              </div>
              <div>
                <span>{{Detail.communicationcode}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>安装位置</span>
              </div>
              <div>
                <span>{{Detail.site}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>所属校区</span>
              </div>
              <div>
                <span>{{Detail.school}}</span>
              </div>
            </div> 
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>关联中继</span>
              </div>
              <div>
                <span>{{Detail.relevance}}</span>
              </div>
            </div>
          </div>
          <!-- <div class="main-content-list">
            <div>
              <div>
                <span>关联水表</span>
              </div>
              <div>      
                <span v-for="(b,index) in relevanceList" :key="index">{{b.drawingcode}}&nbsp;{{b.name}}<br/></span>
              </div>
            </div>
          </div> -->
          <div class="main-content-list">
            <div>
              <div>
                <span>电源类型</span>
              </div>
              <div>
                <span>{{Detail.supply}}</span>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>状态</span>
              </div>
              <div>
                <span v-if="Detail.state == 0">激活</span>
                <span v-else-if="Detail.state == 1">停用</span>
                <span v-else-if="Detail.state == 2">删除</span>
              </div>
            </div>
          </div>
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

import BackGray from "../assets/back@24x24_gray.png"
import BackPurple from "../assets/back@24x24_purple.png"

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      Detail: "",
      checkedcode: this.$route.query.drawingcode,
      id: this.$route.query.id,

      overBackPurple: BackPurple,
      outBackGray: BackGray,

      BackGray,
      BackPurple,

      autoheight:{
        height:''
　　　 },

      WaterMeterList: [],
      relevanceList: [],
    }
  },



  created() {
    // 数据初始化
    // this.id = this.$route.query.id
    // 实例创建完成后为window添加resize(调整)事件
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
  },



  mounted: function() {
    this.$ajax({
      method: "post",
      url: "/watercollect/detail",
      data: {
        id: this.id
      }
    })
      .then(response => {
        this.Detail = response.data[0]
      })
      .catch(error => {
        console.log(error)
      })

    // 获取水表中是否有关联过的当前采集
    this.$ajax({
      method: "post",
      url: "/watermeter",
    })
      .then(response => {
        this.WaterMeterList = response.data
        for(let i=0;i<this.WaterMeterList.length;i++) {
          // 比较水表relevance字段和采集的中的通讯编号+“”+安装位置的值是否相等
          if(this.WaterMeterList[i].relevance == this.Detail.communicationcode + " " + this.Detail.site) {
            // 如果相等就把改水表添加到relevanceList数组中，用于展示有多少表关联了该采集
            this.relevanceList.push(this.WaterMeterList[i])
          }
        }
      })
      .catch(error => {
        console.log(error)
      })
    
  },



  methods: {
    back: function() {
      this.$router.go(-1)
    },
    getHeight() {
      this.autoheight.height = window.innerHeight-304+'px'
    },
  },
  filters: {
    empty: function (value) {
      return value?value:'...'
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