<script setup>

</script>

<template>
  <div id="new_game">
    <div id="new_game-title">
      <div class="ico inline"><img src="../assets/ms/ico_new.webp" height="66" width="66"/></div>
      <div class="title inline">New Game</div>
    </div>
    <div id="new_game-list">
      <span><img src="../assets/pic-game/Jackpot Bingo.webp" height="284" width="228"/></span>
      <span><img src="../assets/pic-game/Lucky Hilo.webp" height="284" width="228"/></span>
      <span><img src="../assets/pic-game/Mega Fishing.webp" height="284" width="228"/></span>
      <span><img src="../assets/pic-game/[JILI]Color Game.webp" height="284" width="228"/></span>
    </div>
  </div>
</template>

<style scoped>
#new_game{ width: 100%; margin-top: 60px; overflow: hidden;}
#new_game-title{ width: 100%; text-align: left; padding:0 36px;}
#new_game-title .ico{ width: 66px; height: 66px;}
#new_game-title .title{ margin-left: 24px; text-align: left; font-size: 2.8rem; font-weight: bold;}
#new_game-list{ width: auto; padding: 0 36px; margin-top: 24px; overflow: hidden; text-align: left; white-space: nowrap;}
#new_game-list span{ width: 342px; display: inline-block; margin: 0 24px 0 0;}
#new_game-list span img{ width: 342px; height: 426px; border-radius: 24px;}
</style>