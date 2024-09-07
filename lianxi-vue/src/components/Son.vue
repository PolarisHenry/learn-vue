<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps(['sonStr'])

// defineEmits(['sonMessage'])
const emit = defineEmits(['sonMessage'])

const handleMessage = () => {
    emit('sonMessage', '老爸，我现在要给你发消息了你准备好了吗？') // setup中不能使用$emit
}
</script>

<template>
    <button @click="handleMessage">点我回发消息</button>
    <!-- <button @click="$emit('sonMessage', '老爸，我现在要给你发消息了你准备好了吗？')">点我回发消息</button> -->
    <p>哥们我收到了，你发的消息是：{{ sonStr }}</p>
</template>