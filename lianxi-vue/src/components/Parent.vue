<script setup>
import { ref } from 'vue'
import Son from "./Son.vue";
// 响应式状态
const message = ref('')
const receivedMessage = ref('')

const handleMessage = (payload) => {
    console.log(payload);

    receivedMessage.value = payload;
}
</script>

<template>
    <input type="text" v-model="message" placeholder="请输入给儿子的信息">

    <Son :sonStr="message" @sonMessage="handleMessage"></Son>

    <p>老爸接收到的信息是：{{ receivedMessage }}</p>
</template>