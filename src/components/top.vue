<script setup>
const message = 'Hello from MyComponent111'
const props = defineProps({
  msg: String
})
function aaa(){
  console.log(props.msg)
}
</script>

<template>
  <p id="top">{{ msg }}</p>
  <button v-on:click="aaa">button</button>
</template>

<style scoped>
</style>