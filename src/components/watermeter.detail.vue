<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <Header>
        <div class="fun-title" slot="search">
          <span>水表表具设备 -- 表具详情</span>
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
                <span>能源数据编号</span>
              </div>
              <div>
                <span>{{Detail.energycode}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>图纸编号</span>
              </div>
              <div>
                <span>{{Detail.drawingcode}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>表具名称</span>
              </div>
              <div>
                <span>{{Detail.name}}</span>
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
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>关联采集</span>
              </div>
              <div>
                <span>{{Detail.relevance}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>上级表</span>
              </div>
              <div>               
                <span>{{Detail.superior}}</span>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>所属楼宇</span>
              </div>
              <div>               
                <span>{{Detail.build}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>所属部门</span>
              </div>
              <div>
                <span>{{Detail.department}}</span>
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
            <div>
              <div>
                <span>用途</span>
              </div>
              <div>
                <span>{{Detail.purpose}}</span>
              </div>
            </div>
          </div>
          <div class="main-content-list">
            <div>
              <div>
                <span>系数</span>
              </div>
              <div>
                <span>{{Detail.coefficient}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>管径</span>
              </div>
              <div>    
                <span>{{Detail.diameter}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>表级</span>
              </div>
              <div>
                <span>{{Detail.level}}</span>
              </div>
            </div>
            <div>
              <div>
                <span>电源类型</span>
              </div>
              <div>        
                <span>{{Detail.supply | empty}}</span>
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
  },
  data() {
    return {
      WaterCollectList: [],

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
      url: "/watermeter/detail",
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