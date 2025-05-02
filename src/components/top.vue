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
      <div id="logo" class="inline"><router-link to="/"><img src="../assets/ms/logo.webp" height="96" width="162"/></router-link></div>
    </div>
    <div class="right">
      <div id="btn-login" class="inline top-btn" @click="showPopup">Sign in</div>
      <div id="btn-reg" class="inline top-btn"><img src="../assets/ms/btn-reg.webp" height="114" width="258"/></div>
      <div id="btn-search" class="inline top-btn"><img src="../assets/ms/btn-search.webp" height="114" width="114"/></div>
      <div id="btn-service" class="inline top-btn"><img src="../assets/ms/btn-service.webp" height="114" width="114"/></div>
    </div>
    <div class="clear"></div>
  </div>

</template>

<style scoped>
#top{ width: 100%; padding: 27px 0; background: linear-gradient(180deg, #252328 5.26%, #312F36 100%); text-align: left;}
.top-btn{ margin: 8px;}
.left{ float: left; margin-left: 36px;}
.right{ float: right; margin-right: 36px;}

#logo{width: 162px; height: 114px;}
#logo img{ margin-top: 9px;}
#btn-login{ font-size: 3rem;}
#btn-reg{ width: 258px; height: 114px;}
#btn-search{ width: 114px; height: 114px;}
#btn-service{ width: 114px; height: 114px;}
</style>