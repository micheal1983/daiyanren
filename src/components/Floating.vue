<script setup>

</script>

<template>
  <div class="floating">
    <div class="badge">1</div>
    <div class="date">6 Days Left</div>
    <div class="light4 rotate"><img src="../assets/ms/light4.webp" height="100%" width="100%"/></div>
    <img src="../assets/ms/2.2.webp" height="100%" width="100%"/>

  </div>
  <div class="floating a2">
    <div class="date">23:48:59</div>
    <img src="../assets/ms/2.2 after.webp" height="100%" width="100%"/>
  </div>
</template>

<style scoped>
.floating{ width: 72px; height: 88px; position: fixed; z-index: 999; right: 8px; bottom: calc(92px + env(safe-area-inset-bottom));}
.a2{ bottom: calc(188px + env(safe-area-inset-bottom))}
.badge{ width: 18px; height: 19px; line-height: 18px; position: absolute; right: -2px; border-radius: 100px; box-shadow: inset 0 0 0 2px #ffaa00;
  background: #ff0000; font-size: 10px; font-family: "Arial Black";
}
.date{ width: 72px; height: 19px; font-size: 10px; font-weight: bold; position: absolute; bottom: 1px; text-transform: capitalize;}
.light4{ width: 130px; height: 120px; position: absolute; z-index: -1; left: -27px; top: -15px;}
.rotate{ animation: rotate 5s linear infinite;}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }



  100% {
    transform: rotate(360deg);
  }
}

</style>