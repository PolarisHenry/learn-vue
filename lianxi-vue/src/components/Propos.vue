<script setup>
import { ref } from 'vue'

defineProps(['title'])
// 响应式状态
const count = ref(0)


</script>

<template>
     <p>{{ title }}</p>
</template>