<template> 
  <div class="header">
    <div class="screening-area">
      <div>

      </div>
      <!-- <div>
        <p></p>
        <p class="title-time">{{currentDateHours}}:{{currentDateMinutes}}&nbsp;{{ampm}}</p>
        <p>{{currentDateWeek + '.'}}</p>
        <p>{{currentDateYear}}</p>
      </div>     -->
    </div>
    <div class="title-area">
      <slot name="title-area"></slot>
    </div>
    <div class="fun-area">
      <div>
        <slot name="search"></slot>
      </div>
      <div class="fun-item">
        <slot name="add-button"></slot>
        <slot name="detail-button" class="action-button"></slot>
        <slot name="edit-button" class="action-button"></slot>
        <slot name="delete-button" class="action-button"></slot>
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
      currentDateMinutes: addMinutes(Minutes)
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
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
}

.screening-area {
  height: 64px;
  background-color: rgb(107,53,251);
  z-index: 200;
}

.screening-area > div:first-child {
  width: 100%;
  height: 8px;
  background-color: rgb(255,255,255);
}

.title-area {
  height: 64px;
  margin: 0 40px;
}

.title-area{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--black)
}

.title-area div{
  margin-top: 8px;
}

.title-area > div:first-child > p{
  height: 20px;
  line-height: 20px;
}

.title-time{
  font-weight: bolder;
}

.fun-area {
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
}

.fun-item {
  display: flex;
}
</style>