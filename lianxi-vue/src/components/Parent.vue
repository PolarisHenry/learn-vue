<script setup>
import { ref } from 'vue'
import Son from "./Son.vue";
import SonTwo from "./SonTwo.vue";
import SonThree from "./SonThree.vue";


// 响应式状态
const message = ref('')
const receivedMessage = ref('')
const receivedMessageTwo = ref('')

const modelMessage = ref('') // 儿子2用vModel

const MessageThree = ref('') // 儿子3

const handleMessage = (payload) => {
    console.log(payload);

    receivedMessage.value = payload;
}
</script>

<template>
    <p></p>
    <div class="father">
        <input type="text" v-model.trim="message" placeholder="请输入给儿子的信息">

        <Son :sonStr="message" @sonMessage="handleMessage" @sonMessageTwo="(msg) => { receivedMessageTwo = msg }" v-model="receivedMessageTwo">
        </Son>
        <p>{{ receivedMessageTwo }}</p>

        <p>老爸接收到的信息是：{{ receivedMessage }}</p>

        <button @mousedown="() => {
            message = ''
            receivedMessage = ''
            receivedMessageTwo = ''

        }">关闭信息</button>

        <br>
        <SonTwo v-model="modelMessage"></SonTwo><span>{{ modelMessage }}</span>
        <SonThree @sondThreeMessage="(m) => { MessageThree = m }"></SonThree>
        <p>儿子3说话：{{MessageThree }}</p>
    </div>
</template>

<style>
div.father {
    background-color: rgb(229, 222, 222);

}
</style>