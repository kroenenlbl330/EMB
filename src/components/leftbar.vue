<template>
  <div class="left-bar">
    <!-- <div class="info">
      <span>罗夏</span>
      <div class="add"></div>
    </div> -->
    <div class="menu">
      <ul>
        <!-- 每3行空一行： :class="(index + 1) % 3==0?'blank-line':''" -->
        <!-- <li v-for="(list,index) in aM" :key="index" @click="change(index)"> 
          <router-link :to="list.path"  class="rl-s" :class="{select:isActive == index}">
            <div :class="{striping:isActive == index}"></div><span>{{list.name}}</span>
          </router-link>      
        </li>-->
        <li v-for="(list,index) in aM" :key="index" @click="change(list.id)">
          <div class="rl-s" :class="{'select':isSelect == list.id}">
            <span class="rl-text"  :class="{'select-text':isSelect == list.id}">{{list.name}}</span>
            <!-- <div :class="{'striping':isSelect == list.id}"></div> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      aM: [
        { name: "水表表具设备", id: 'watermeter' },
        { name: "水表采集器设备", id: 'watercollect' },
        { name: "水表中继器设备", id: 'waterrepeater' },
        { name: "水表集中器设备", id: 'waterconcentrator' },
        
      ],
      isSelect: '',
      // striping: 0
    }
  },
  mounted() {
    // if(this.$route.name){
    //   this.isSelect = this.$route.name
    // }else{
    //   this.isSelect = "watermeter"
    // }
    this.isSelect = this.$route.name
  },
  methods: {
    // change(index) {
    //   this.isActive = index,
    //   this.striping = index
    // },
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
  }
}
</script>

<style>
.left-bar {
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: flex-start;
  padding-top: 168px;
  padding-bottom: 8px;
  /* border-right: 2px solid var(--black); */
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0, 0.02);
  z-index: 100;
}

@media screen and (max-width: 1200px) {
  .left-bar {
    display: none;
  }
}

/* info */
.info {
  width: 48px;
  height: 922px;
  border-right: 2px solid var(--gray-text);
}

.info > span {
  color: #fff;
  transform: rotate(-90deg);
  position: absolute;
  left: 20px;
  top: 20px;
  font-size: 17px;
  font-weight: bolder;
}

.add {
  width: 28px;
  height: 28px;
  border-radius: 20px;
  border: 2px solid var(--white);
  background-color: #fff;
  margin: 0 auto;
  position: relative;
  top: 168px;
}

.add:hover {
  cursor: pointer;
}

/* menu */
.menu {
  min-width: 248px;
  /* height: 922px; */
  /* color: var(--gray-text); */
}

.menu ul {
  padding: 0 0 0 16px;
}

.rl-s {
  height: 40px;
  /* color: var(--gray-text); */ 
  /* letter-spacing: 1px; */
  /* color: var(--black); */
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.rl-text{
  font-size: 1rem;
  font-weight: bolder;
  line-height: 32px;
  color: #bbb;
  margin-left: 16px;
}

.select {
  background-color: rgb(243,243,243);
  height: 40px;
  width: 240px;
  /* margin-right: 16px; */
  border-radius: 4px 0 0 4px;
}

.select-text{
  font-size: 1rem !important;
  color: rgb(10,10,10) !important;
} 

/* .select {
  font-size: 1.125rem !important;
  color: #fff !important;
  font-weight: bolder !important;
}

.select-bg{
  background-color: #444;
  height: 40px;
  width: 240px;
} */

.blank-line {
  margin-bottom: 8px;
}

.striping {
  height: 3px;
  width: 32px;
  background-color: var(--white);
  margin-left: 12px;
}
</style>

