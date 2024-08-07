<template>
    <div>
        <h1 @click="demo1">My first vue</h1>

    </div>
</template>

<script>
export default {
    data() {
        return {
            demo: 'data'
        }
    },
    methods: {
        demo1() {
            console.log('methods');
        }
    },
}
</script>

<style scoped></style>