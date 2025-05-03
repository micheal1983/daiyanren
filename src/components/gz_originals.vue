<script setup>

</script>

<template>
  <div id="gzoriginals">
    <div id="gzoriginals-title">
      <div class="ico inline"><img src="../assets/ms/GZ Originals.webp" width="100%"/></div>
      <div class="title inline">GZ Originals</div>
      <div class="all"><router-link to="/game_list">All</router-link></div>
    </div>
    <div id="gzoriginals-list">
      <span><img src="../assets/pic-game/green-joker.webp" width="100%"/></span>
      <span><img src="../assets/pic-game/Mines.webp" width="100%"/></span>
      <span><img src="../assets/pic-game/Piggy Tap.webp" width="100%"/></span>
      <span><img src="../assets/pic-game/Color Game.webp" width="100%"/></span>
    </div>
  </div>
</template>

<style scoped>
#gzoriginals{ width: 100%; margin-top: 20px; overflow: hidden;}
#gzoriginals-title{ width: calc(100% - 24px); margin-left: 12px; text-align: left;}
#gzoriginals-title .ico{ width: 22px; height: 22px;}
#gzoriginals-title .title{ margin-left: 8px; text-align: left; font-size: 14px; font-weight: bold;}
#gzoriginals-title .all{ width: 54px; height: 26px; line-height: 26px; color: #D5D2E1; font-size: 12px; border-radius: 20px; background: #474451; text-align: center; float: right;}
#gzoriginals-list {
  padding: 0 12px;
  margin-top: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  text-align: left;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

#gzoriginals-list::-webkit-scrollbar {
  display: none;
}

#gzoriginals-list span{ width: 114px; display: inline-block; margin: 0 8px 0 0;}
#gzoriginals-list span img{ width: 114px; height: 142px; border-radius: 8px;}
</style>