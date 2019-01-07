<template>
  <div id="app">
    <LeftBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import LeftBar from '../../components/leftbar.vue'

export default {
  components: {
    LeftBar,
  },
  name: 'App'
}
</script>

<style>
#app{
  display: flex;
  justify-content: space-between;
}
</style>
