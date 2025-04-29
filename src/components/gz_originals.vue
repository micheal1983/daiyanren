<script setup>

</script>

<template>
  <div id="gzoriginals">
    <div id="gzoriginals-title">
      <div class="ico inline"><img src="../assets/ms/GZ Originals.webp" height="66" width="66"/></div>
      <div class="title inline">GZ Originals</div>
      <div class="all">All</div>
    </div>
    <div id="gzoriginals-list">
      <span><img src="../assets/pic-game/green-joker.webp" height="284" width="228"/></span>
      <span><img src="../assets/pic-game/Mines.webp" height="284" width="228"/></span>
      <span><img src="../assets/pic-game/Piggy Tap.webp" height="284" width="228"/></span>
      <span><img src="../assets/pic-game/Color Game.webp" height="284" width="228"/></span>
    </div>
  </div>
</template>

<style scoped>
#gzoriginals{ width: 100%; margin-top: 60px; overflow: hidden;}
#gzoriginals-title{ width: calc(100% - 72px); margin-left: 36px; text-align: left;}
#gzoriginals-title .ico{ width: 66px; height: 66px;}
#gzoriginals-title .title{ margin-left: 24px; text-align: left; font-size: 2.8rem; font-weight: bold;}
#gzoriginals-title .all{ width: 162px; height: 78px; line-height: 78px; color: #D5D2E1; font-size: 2.4rem; border-radius: 60px; background: #474451; text-align: center; float: right;}
#gzoriginals-list{ width: auto; padding: 0 36px; margin-top: 24px; overflow: hidden; text-align: left; white-space: nowrap;}
#gzoriginals-list span{ width: 342px; display: inline-block; margin: 0 24px 0 0;}
#gzoriginals-list span img{ width: 342px; height: 426px; border-radius: 24px;}
</style>