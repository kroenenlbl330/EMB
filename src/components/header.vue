<template> 
  <div class="header">
    <div class="screening-area">
      <div></div>
      <span>水表能耗设备管理</span>
      <div>
        <div v-for="(listWater,index) in arrWater" :key="index" @click="change(listWater.id)" :class="{'s':isSelect == listWater.id}">
           <span>{{listWater.name}}</span>
        </div>
        <!-- <div @click="a">
          <span>水表</span>
        </div>
        <div @click="b">
          <span>采集</span>
        </div>
        <div @click="c">
          <span>中继</span>
        </div>
        <div>
          <span>集中器</span>
        </div> -->
      </div>
      <!-- <ul>
            <li @click="a">水表</li>
            <li @click="b">采集</li>
            <li @click="c">中继</li>
          </ul> -->
      <!-- <div>
        <p></p>
        <p class="title-time">{{currentDateHours}}:{{currentDateMinutes}}&nbsp;{{ampm}}</p>
        <p>{{currentDateWeek + '.'}}</p>
        <p>{{currentDateYear}}</p>
      </div>     -->
    </div>
    <!-- <div class="title-area">
      <slot name="title-area"></slot>
    </div> -->
    <div class="fun-area">
      <div>
        <slot name="search"></slot>
      </div>
      <div class="fun-item">
        <slot name="back-button" class="action-button"></slot>
        <slot name="detail-button" class="action-button"></slot>
        <slot name="edit-button" class="action-button"></slot>
        <slot name="delete-button" class="action-button"></slot>
        <slot name="add-button"></slot>
      </div>
    </div>
  </div>
</template>

<script>
var Days = new Date().getDate()
var Month = new Date().getMonth() + 1
var Hours = new Date().getHours()

// 日期补0
var subtractDMH = (DMH) => {
  if(DMH < 10){
    // return ("0" + (Hours - 12)).slice(-2)
    return "0" + DMH
  }else{
    return DMH
  }
}
// var strDate = new Date().toLocaleString()
var strDate = new Date().getFullYear() + '/' + subtractDMH(Month) + '/' + subtractDMH(Days)

//用“/”分割日期，反向排列，插入“/”
var Year = strDate.substring(0, 10).split('/').reverse().join('/')

//toDateString()返回的日期格式类似Sat Jan 13 2018，用split(" ")[0]取以空格为分割的下标为1的字符串
var Week = new Date().toDateString().split(" ")[0] 

//12小时制和时钟补0
var subtractHours = (Hours) => {
  if(Hours < 10){
    // return ("0" + (Hours - 12)).slice(-2)
    return "0" + Hours
  }else{
    return Hours
  }
}

var Minutes = new Date().getMinutes()
//分钟补0
var addMinutes = (Minutes) => {
  return ("0" + Minutes).slice(-2)
}

export default {
  data() {
    return{
      currentDateWeek: Week,
      currentDateYear: Year,
      currentDateHours: subtractHours(Hours),
      currentDateMinutes: addMinutes(Minutes),

      arrWater: [
        { name: "水表表具", id: 'watermeter' },
        { name: "采集器", id: 'watercollect' },
        { name: "中继器", id: 'waterrepeater' },
        { name: "集中器", id: 'waterconcentrator' }, 
      ],
      isSelect: '',
    }
  },
  mounted() {
    this.isSelect = this.$route.name
  },
  methods: {
    a: function(){
      this.$router.push({
          path: '/watermeter',
          // query: { drawingcode: this.check }
        })
    },
    b: function(){
      this.$router.push({
          path: '/watercollect',
          // query: { drawingcode: this.check }
        })
    },
    c: function(){
      this.$router.push({
          path: '/waterrepeater',
          // query: { drawingcode: this.check }
        })
    },
    change(id) {
      this.isSelect = id
      switch (id) {
        case "watermeter": this.$router.push("/watermeter")
          break
        case "watercollect": this.$router.push("/watercollect")
          break
        case "waterrepeater": this.$router.push("/waterrepeater")
          break
        case "waterconcentrator": this.$router.push("/waterconcentrator")
          break
      }
    }
  },
  computed: {
    ampm: function () {
      if(this.Hours < 12){
        return 'am'
      }else{
        return 'pm'
      }
    }
  }
}
</script>

<style>
.header {
  background-color: rgb(250, 250, 250);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
}

.screening-area {
  height: 128px;
  background-color: rgb(107,53,251);
}

.screening-area > div:first-child {
  width: 100%;
  height: 8px;
  background-color: rgb(255,255,255);
}

.screening-area > span {
  height: 32px;
  line-height: 32px;
  display: inline-block;
  color: #fff;
  margin: 16px 0 16px 32px;
  font-size: 1.5rem;
  /* font-weight: bold; */
}

.screening-area > div:last-child {
  margin-left: 20px;
  display: flex;
}

.screening-area > div:last-child > div {
  height: 40px;
  border-radius: 6px;
  margin: 0 24px 16px 0;
  padding: 0 12px;
  color: #fff;
  /* background-color: rgb(137, 91, 251); */
  cursor: pointer;
}

.s {
  background-color: rgb(137, 91, 251);
}

.screening-area > div:last-child > div > span{
  display: flex;
  justify-content: center;
  line-height: 40px;
  color: rgb(255, 255, 255);
}

.title-area {
  height: 72px;
  margin: 0 40px;
}

.title-area {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--black)
}

.title-area > div > p:first-child {
  height: 24px;
  line-height: 24px;
  margin-top: 24px;
  font-size: 1.125rem;
  font-weight: bolder;
}

.title-area > div > p:last-child {
  height: 20px;
  line-height: 20px;
  margin-top: 4px;
  font-size: 0.875rem;
  color: var(--gray-text);
}

.title-time{
  font-weight: bolder;
}

.fun-area {
  display: flex;
  justify-content: space-between;
  margin: 48px 40px 0 40px;
}

.fun-item {
  display: flex;
}
</style>