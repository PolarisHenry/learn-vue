<script setup>
import { defineProps, ref, defineEmits } from "vue";
const sonThreeMsg = ref('')
const emit = defineEmits(['sondThreeMessage'])

</script>

<template>
    <div>
        <input type="text" v-model="sonThreeMsg">
        <button @click="$emit('sondThreeMessage', sonThreeMsg)">儿子3</button>
    </div>
</template>
