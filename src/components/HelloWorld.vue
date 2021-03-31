<!--
 * @Author: your name
 * @Date: 2021-03-30 14:45:24
 * @LastEditTime: 2021-03-30 14:49:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vite2-mulitple-page/src/components/HelloWorld.vue
-->
<template>
  <h1>{{ msg }}</h1>
  <button @click="state.count++">count is: {{ state.count }}</button>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>