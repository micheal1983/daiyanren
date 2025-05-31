<script setup>
import * as PIXI from 'pixi.js'
import 'pixi-spine'
import { onMounted, ref } from 'vue'

const container = ref(null)

onMounted(async () => {
  const app = new PIXI.Application({
    width: 600,
    height: 600,
    backgroundAlpha: 0,
  })
  container.value.appendChild(app.view)

  const spineAssets = {
    json: 'daiyanren/spine/Anim1/Anim1.json',
    atlas: 'daiyanren/spine/Anim1/Anim1.atlas',
    png: 'daiyanren/spine/Anim1/Anim1.png',
  }

  // 加载 Spine 资源
  PIXI.Assets.add('spineHero', {
    alias: 'hero',
    srcs: [spineAssets.json, spineAssets.atlas, spineAssets.png],
    loadParser: 'spine',
  })

  const spineResource = await PIXI.Assets.load('spineHero')

  const spineAnim = new PIXI.spine.Spine(spineResource.spineData)
  spineAnim.x = app.screen.width / 2
  spineAnim.y = app.screen.height

  spineAnim.scale.set(0.5)
  spineAnim.state.setAnimation(0, 'animation', true) // 替换为你的动画名

  app.stage.addChild(spineAnim)
})
</script>

<template>
  <div ref="container" style="width:600px; height:600px;"></div>
</template>
