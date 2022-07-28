<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <Test @click="onclick">
    <template #default>我是默认插槽</template>
    <template #title><h3>我是具名插槽</h3></template>
  </Test>
  <s-button disabled type="primary" size="large">确定 disabled</s-button>
  <s-button block type="primary" size="medium">确定 block</s-button>
  <s-button type="primary" size="small">确定</s-button>
  <SButton>取消</SButton>
  <vitepress />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.tsx'
import SButton from './button/src/Button'
const onclick = () => {
  console.log('onclick')
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
