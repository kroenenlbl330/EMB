<template> 
  <div class="title">
    <div class="title-area">
      <div>
        <p class="title-time">{{currentDateHours}}:{{currentDateMinutes}}&nbsp;{{ampm}}</p>
        <p>{{currentDateWeek + '.'}}</p>
        <p>{{currentDateYear}}</p>
        <!-- <p>{{Time}}</p> -->
      </div>
      <slot name="search"></slot>
      <!-- <div class="search">
        <input type="text" autocomplete="off" class="search-box" placeholder="通过以下方式搜索EMB...">
        <button type="submit" >搜索</button>
      </div> -->
      <slot name="watercollect"></slot>
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
.title {
  border-bottom: 2px solid var(--black);
  /* padding: 0 12px 0 8px; */
}

.title-area{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 166px;
  color: var(--black)
}

.title-area div{
  margin-top: 8px;
}

.title-area p{
  height: 20px;
  line-height: 20px;
}

.title-time{
  font-weight: bolder;
}
</style>