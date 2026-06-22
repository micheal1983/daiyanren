<template>
  <div class="Wrap">
    <div class="Top"></div>
    <div class="Content">
      <div class="item item_1"></div>
      <div class="item item_2"></div>
      <div class="item item_3"></div>
      <div class="item item_4"></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.Wrap{
  width:390px;
  display:flex;
  flex-direction:column;
  align-items:center;
  background:#535bf2;
}

.Top{
  width:100%;
  height:176px;
  background:#213547;
}

.Content{
  width:366px;
  margin-bottom:-24px; /* 可选，用来消除transform造成的底部空白 */
  padding-bottom: 24px;
  transform:translateY(-24px);
  border-radius:36px 36px 0 0;
  display:flex;
  flex-direction:column;
  align-items:center;
  background:#CC9E36;
}
.item{ width: 96%; min-height: 200px; margin-top: 8px; border-radius:36px; background: rgba(0,0,0,0.05);}
</style>
