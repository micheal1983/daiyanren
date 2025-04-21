<script setup>

</script>

<template>
<div id="recommend">
  <div id="recommend-title">
    <div class="ico inline"><img src="../assets/ms/ico-recommend.webp" height="66" width="66"/></div>
    <div class="title inline">Recommend</div>
  </div>
  <div id="recommend-list">
    <span><img src="../assets/pic-game/Color Game.webp" height="284" width="228"/></span>
    <span><img src="../assets/pic-game/JILI_Mines.webp" height="284" width="228"/></span>
    <span><img src="../assets/pic-game/Jackpot Fishing.webp" height="284" width="228"/></span>
    <span><img src="../assets/pic-game/Lucky Hilo.webp" height="284" width="228"/></span>
    <span><img src="../assets/pic-game/Texas.webp" height="284" width="228"/></span>
    <span><img src="../assets/pic-game/Tongits Joker.webp" height="284" width="228"/></span>
  </div>
</div>
</template>

<style scoped>
#recommend{ width: 100%; overflow: hidden;}
#recommend-title{ width: 100%; text-align: left; padding:0 36px;}
#recommend-title .ico{ width: 66px; height: 66px;}
#recommend-title .title{ margin-left: 24px; text-align: left; font-size: 2.8rem; font-weight: bold;}
#recommend-list{ width: auto; padding: 0 36px; margin-top: 24px; overflow: hidden; text-align: left; white-space: nowrap;}
#recommend-list span{ width: 180px; display: inline-block; margin: 0 24px 0 0;}
#recommend-list span img{ width: 180px; height: 222px; border-radius: 24px;}
</style>