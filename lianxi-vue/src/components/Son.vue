<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps(['sonStr'])

const m = defineModel()

// 在setup中不能直接使用emit 使用defineEmits宏，会返回一个和$emit有相同作用的函数
const emit = defineEmits(['sonMessage', 'sonMessageTwo'])

const handleMessage = (firstMsg, twoMsg) => {
    emit('sonMessage', { firstMsg, twoMsg }) // setup中不能使用$emit
}

</script>

<template>
    <div class="son"><!-- 使用函数的方式 -->
        <button
            @click="handleMessage('老爸，我现在要给你发第一条消息了喔！', '老爸，我现在要给你发第二条消息了喔！'); $emit('sonMessageTwo', '老爸，我现在要给你发第三条消息了喔！')">儿子回发消息</button>
        <p>老爸你的消息我收到了，你发的消息是：{{ sonStr }}</p>
        <input type="text" v-model="m">
        <slot>
        </slot>
    </div>
</template>

<style>
div.son {
    background-color: pink;
}
</style>