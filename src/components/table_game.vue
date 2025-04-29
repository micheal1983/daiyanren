<script setup>

</script>

<template>
  <div id="table_game">
    <div id="table_game-title">
      <div class="ico inline"><img src="../assets/ms/ico-table.webp" height="66" width="66"/></div>
      <div class="title inline">Talbe Game</div>
    </div>
    <div id="table_game-list">
      <span><img src="../assets/pic-game/green-tongits.webp" height="284" width="228"/></span>
      <span><img src="../assets/pic-game/green-pusoy.webp" height="284" width="228"/></span>
      <span><img src="../assets/pic-game/green-texas.webp" height="284" width="228"/></span>
      <span><img src="../assets/pic-game/Lucky9.webp" height="284" width="228"/></span>
    </div>
  </div>
</template>

<style scoped>
#table_game{ width: 100%; margin-top: 60px; overflow: hidden;}
#table_game-title{ width: 100%; text-align: left; padding:0 36px;}
#table_game-title .ico{ width: 66px; height: 66px;}
#table_game-title .title{ margin-left: 24px; text-align: left; font-size: 2.8rem; font-weight: bold;}
#table_game-list{ width: auto; padding: 0 36px; margin-top: 24px; overflow: hidden; text-align: left; white-space: nowrap;}
#table_game-list span{ width: 342px; display: inline-block; margin: 0 24px 0 0;}
#table_game-list span img{ width: 342px; height: 426px; border-radius: 24px;}
</style>