<script setup>
import { ref } from 'vue'

// 响应式状态
const great = ref('亨利你真的做到了真的很棒！！！')

</script>

<template>
  <h1>{{ great }}</h1>
</template>