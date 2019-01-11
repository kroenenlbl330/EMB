<template> 
    <div class="right-bar">
      <div class="right-box">
        <div class="add-bar">
          <slot name="add-button"></slot>
          <slot name="save-button"></slot>
        </div>
        <div class="back-bar">
          <slot name="back-button"></slot>
        </div>
        <div class="action-bar">
          <!-- <img class="check-details" v-bind:src="edit" @click="checkDetails"/> -->
          <slot name="detail-button" class="action-button"></slot>
          <slot name="edit-button" class="action-button"></slot>
          <slot name="delete-button" class="action-button"></slot>
        </div>     
      </div>
      <!-- <div style="width: 48px; border-right: 2px solid #c1c1c1; height: 100%;"></div> -->
    </div>
</template>

<script>
import Bus from "../static/bus.js"

export default {
  data() {
    return {
      select: ''
    }
  },
  // mounted: function () {
  //   var vm = this
  //   // 用$on事件来接收参数
  //   Bus.$on('val', (data) => {
  //     vm.select = data
  //   })
  // },
  methods: {
    // checkDetails: function() {
    //   if(this.select == ''){
    //     alert("请选中一项进行操作")
    //   }else{
    //     location.href = '/#/watermeter/detail/' + this.select
    //     alert(this.select)
    //   }
      
    // }
  }
}
</script>

<style>
.right-bar {
  min-width: 48px;
  height: 938px;
  border-left: 2px solid var(--black);
  background-color: var(--gray);
}

@media screen and (max-width: 1200px){
  .right-bar{
    display: none;
  }
}

.right-box{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.add-bar{
  height: 108px;
  width: 48px;
  display: flex;
  flex-direction: column;
  margin-top: 36px;

}

.back-bar{
  height: 48px;
  width: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.action-bar{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 78px;
}
</style>

