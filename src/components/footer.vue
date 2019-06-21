<template> 
  <div class="footer">
    <slot name="footer-msg"></slot>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
  computed: {
    
  }
}
</script>

<style>
.footer {
  width: 100%;
  background-color: rgb(250, 250, 250);
}

.footer-msg {
  height: 64px;
  background-color: #ddd;
  margin: 0 40px;
}

.footer > div:last-child {
  z-index: 1000;
  position: relative;
  width: 100%;
  height: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 0px rgb(107, 53, 251, 0.4),/*左边阴影*/ 
              0px 0px 0px rgb(107, 53, 251, 0.4),
              0px 3px 3px 3px rgb(0, 0, 0, 0.02),/*上边阴影*/
              0px 0px 0px 0px rgb(0, 0, 0, 0.02);
}

</style>