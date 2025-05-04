<script setup>
const message = 'Hello from MyComponent'
const props = defineProps({
  msg: String,
  showPopup: Function
})
function aaa(){
  console.log(props.msg)
}
</script>

<template>
  <div id="top">
    <div class="left">
      <div id="logo" class="inline"><router-link to="/"><img src="../assets/ms/logo.webp" /></router-link></div>
    </div>
    <div class="right">
      <div id="btn-login" class="inline top-btn" @click="showPopup">Sign in</div>
      <div id="btn-reg" class="inline top-btn"><img src="../assets/ms/btn-reg.webp" height="114" width="258"/></div>
      <div id="btn-search" class="inline top-btn"><img src="../assets/ms/btn-search.webp" height="114" width="114"/></div>
      <div id="btn-service" class="inline top-btn"><img src="../assets/ms/btn-service.webp" height="114" width="114"/></div>
    </div>
  </div>

</template>

<style scoped>
#top{ width: 100%; height: 54px; background: linear-gradient(180deg, #252328 5.26%, #312F36 100%); text-align: left; position: fixed;display: flex;
  justify-content: space-between; /* 水平居中 */
  align-items: center;     /* 垂直居中 */ z-index: 9998;}
#top img{ width: 100%; height: auto;}
.top-btn{ margin-left: 8px;}
.left{ margin-left: 12px;}
.right{ margin-right: 12px;}

#logo{width: 54px; height: 32px;}
#btn-login{ font-size: 14px;}
#btn-reg{ width: 86px; height: 38px;}
#btn-search{ width: 38px; height: 38px;}
#btn-service{ width: 38px; height: 38px;}
</style>