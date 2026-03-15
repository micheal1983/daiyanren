<script setup>
import {onMounted, onBeforeUnmount, ref, nextTick, onUnmounted} from 'vue';
import { useFetchImages } from '../composables/useFetchImages';
import { API_BASE_URL } from '../config'; // 导入公共配置

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
  const apiUrl = `${API_BASE_URL}/game/getpublicall`;

  // 将参数改为POST请求发送
  fetchGZ(apiUrl, { channel_id: 4, type: 'gz' }); // GZ Originals 接口
  fetchTG(apiUrl, { channel_id: 6, type: 'gz' }); // Table Games 接口
  fetchNG(apiUrl, { channel_id: 5, type: 'gz' }); // New Games 接口

  // 移除原有的滚动动画逻辑，因为在useFetchImages中已经移除了DOM操作
  // 如果需要滚动动画，请在组件内部或单独的composable中实现
});

</script>

<template>

    <div id="wrap">
      <floating></floating>
      <top msg="Hello World"/>
      <banner/>
      <recommend/>
      <mainenter/>
      <gzoriginals tit="most play" :items="imagesGZ" />

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