<script setup>
import Top from "../components/top.vue";
import Promo_ico from "../components/promo_ico.vue";
import pic6888 from '../assets/ms/6888.webp'
import pic300k from '../assets/ms/300k.webp'
import GTCC from '../assets/ms/GTCC.webp'
import VIP from '../assets/ms/VIP.webp'
</script>

<template>
  <div id="wrap" class="body">
    <top msg="Hello World"/>
    <div class="promo_title1"><img src="../assets/ms/promo_title1.webp" width="100%"/></div>
    <div class="exclusive">
      <ul>
        <li><promo_ico :pic="pic6888" msg="New Comers"/></li>
        <li><promo_ico :pic="pic300k" msg="Daily Bonus"/></li>
        <li><promo_ico :pic="VIP" msg="VIP"/></li>
        <li><promo_ico :pic="GTCC" msg="GTCC"/></li>
      </ul>
    </div>
    <div class="promo_title1"><img src="../assets/ms/promo_title1.webp" width="100%"/></div>
    <div class="promo_tab"><img src="../assets/ms/promo_tab.webp" width="100%"/></div>
    <div class="banners">
      <ul>
        <li><img src="../assets/ms/promo_banner1.webp" width="100%"/></li>
        <li><img src="../assets/ms/promo_games.webp" width="100%"/></li>
        <li><img src="../assets/ms/promo_banner2.webp" width="100%"/></li>
        <li><img src="../assets/ms/promo_banner1.webp" width="100%"/></li>
        <li><img src="../assets/ms/promo_banner2.webp" width="100%"/></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.body{ background: url("../assets/ms/promo_gift_bg.webp") no-repeat 187px calc(54px + env(safe-area-inset-top));  background-size: 203px 220px;}
.promo_title1{ width: 390px;}
.promo_tab{ width: 390px;}
.exclusive{ width: 100%;}
.exclusive ul{ width: 100%;}
.exclusive ul li{ width: 90px; display: inline-block;}
.banners{ width: 366px; margin: 0 auto; padding: 10px 0; background: #2C2931; border: 1px solid #413C48; border-radius: 10px;}
.banners ul{ width: 346px; margin-left: 10px;}
.banners ul li{ margin-top: 10px;}
</style>