<script setup>

const props = defineProps({
  tit:String,
  items: Array,
})
</script>

<template>
  <div class="scrolling-warp">
    <div class="scrolling-title">
      <div class="ico inline"><img src="../assets/ms/GZ Originals.webp" width="100%"/></div>
      <div class="title inline">{{ tit }}</div>
      <div class="all"><router-link to="/game_list">All</router-link></div>
    </div>
    <div class="scrolling-list">
      <span v-for="(item, index) in items" :key="item.id">
        <router-link to="/game"><img :src="item.url" width="100%" loading="lazy" /></router-link>
      </span>
    </div>
  </div>
</template>

<style scoped>
.scrolling-warp{ width: 100%; margin-top: 20px; overflow: hidden;}
.scrolling-title{ width: calc(100% - 24px); margin-left: 12px; text-align: left;}
.scrolling-title .ico{ width: 22px; height: 22px;}
.scrolling-title .title{ margin-left: 8px; text-align: left; font-size: 14px; font-weight: bold;}
.scrolling-title .all{ width: 54px; height: 26px; line-height: 26px; color: #D5D2E1; font-size: 12px; border-radius: 20px; background: #474451; text-align: center; float: right;}
.scrolling-list {
  padding: 0 12px;
  margin-top: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  text-align: left;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

.scrolling-list::-webkit-scrollbar {
  display: none;
}

.scrolling-list span{ width: 114px; display: inline-block; margin: 0 8px 0 0;}
.scrolling-list span img{ width: 114px; height: 142px; border-radius: 8px;}
</style>