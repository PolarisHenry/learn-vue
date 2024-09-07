<script setup>

const model = defineModel()


</script>

<template>
    <div class="son"><!-- 使用函数的方式 -->

        <input type="text" v-model="model">
    </div>
</template>

<style>
div.son {
    background-color: pink;
}
</style>