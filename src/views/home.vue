<script setup>
import {onMounted, onBeforeUnmount, ref, nextTick} from 'vue';
import { useFetchImages } from '../composables/useFetchImages';

import top from '../components/top.vue';
import Bottom from "../components/bottom.vue";
import Banner from "../components/Banner.vue";
import Recommend from "../components/recommend.vue";
import Mainenter from "../components/mainenter.vue";
import Gzoriginals from "../components/scrolling_home.vue";
import Game_providers from "../components/game_providers.vue";
import About_gamezone from "../components/about_gamezone.vue";
import Table_game from "../components/scrolling_home.vue";
import New_game from "../components/scrolling_home.vue";
import Biggest_winings from "../components/biggest_winings.vue";
import Floating from "../components/Floating.vue";
import Ekyc from "../components/Ekyc.vue";


// 每个栏目都调用一次
const {
  jsonData: imagesGZ,
  fetchImages: fetchGZ,
} = useFetchImages();

const {
  jsonData: imagesTG,
  fetchImages: fetchTG,
} = useFetchImages();

const {
  jsonData: imagesNG,
  fetchImages: fetchNG,
} = useFetchImages();

onMounted(() => {
  fetchGZ('https://script.google.com/macros/s/AKfycbyv04RsxX1bjlqMsU555dzXH76PTCUIk_tEG64eSduq0dXor-CwS5v4tqiog4szodje0A/exec?type=gz'); // GZ Originals 接口
  fetchTG('https://script.google.com/macros/s/AKfycbyv04RsxX1bjlqMsU555dzXH76PTCUIk_tEG64eSduq0dXor-CwS5v4tqiog4szodje0A/exec?type=tg'); // Table Games 接口
  fetchNG('https://script.google.com/macros/s/AKfycbyv04RsxX1bjlqMsU555dzXH76PTCUIk_tEG64eSduq0dXor-CwS5v4tqiog4szodje0A/exec?type=ng'); // New Games 接口
});

</script>

<template>

    <div id="wrap">
      <floating></floating>
      <top msg="Hello World"/>
      <banner/>
      <ekyc/>
      <recommend/>
      <mainenter/>
      <gzoriginals tit="GZ Originals" :items="imagesGZ" />

      <keep-alive>
      <biggest_winings/>
      </keep-alive>

      <table_game tit="Table Game" :items="imagesTG" />
      <new_game tit="New Game" :items="imagesNG" />

      <keep-alive>
      <game_providers/>
      </keep-alive>

      <keep-alive>
      <about_gamezone/>
      </keep-alive>

      <keep-alive>
      <bottom/>
      </keep-alive>


    </div>
</template>

<style scoped>



</style>