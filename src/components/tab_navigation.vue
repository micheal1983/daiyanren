<script setup>

</script>

<template>
<div id="tab_navigation">
  <div class="item home focus">home</div>
  <div class="item reward">reward</div>
  <div class="item tongits">tongits</div>
  <div class="item wallet">wallet</div>
  <div class="item account">account</div>
</div>
</template>

<style scoped>
#tab_navigation{ width: 100%; height: 64px; background: #312F37; position: fixed; bottom: 0; z-index: 9998; border-radius: 15px 15px 0 0; margin-bottom: -1px; display: flex; justify-content: center; align-items: center;
}
#tab_navigation .item{ width: 72px; height: 52px; line-height: 70px; margin-top: 6px; text-transform: capitalize; color: #BCB8C5; font-size: 11px; background: #535bf2;}
#tab_navigation .home{ background: url("../assets/ms/home.webp") no-repeat top; background-size: 28px 28px;}
#tab_navigation .home.focus{ background: url("../assets/ms/home_act.webp") no-repeat top; background-size: 28px 28px; color: #FFC972;}
#tab_navigation .reward{ background: url("../assets/ms/reward.webp") no-repeat top; background-size: 28px 28px;}
#tab_navigation .tongits{ background: url("../assets/ms/tongits_btn.webp") no-repeat top; background-size: 28px 28px;}
#tab_navigation .wallet{ background: url("../assets/ms/wallet.webp") no-repeat top; background-size: 28px 28px;}
#tab_navigation .account{ background: url("../assets/ms/account.webp") no-repeat top; background-size: 28px 28px;}
</style>