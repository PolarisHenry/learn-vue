<script setup>

const props = defineProps({
    tan: {
        type: String,
        Required: true,
        default: '我要学会vue'
    }
})

// props.tan = 0
</script>

<template>
    <button @click="$emit('tan')">组件通信</button>
    <p>{{ tan }}</p>
</template>