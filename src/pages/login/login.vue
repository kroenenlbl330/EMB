<template>
  <div id="app">
    <form action="/backstage" method="post">
      <input type="text" name="username">
      <input type="text" name="password">
      <input type="submit" value="登录">
    </form>
  </div>
</template>

<script>
// import Home from '../../components/home.vue'

export default {
  components: {
    // Home,
  },
  name: 'App'
}
</script>

<style>

</style>
