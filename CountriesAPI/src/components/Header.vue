<template>
    <header class="header">
        <h1 class="text">Where in the world?</h1>
        <h2 class="text">Dark Mode</h2>
    </header>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    export default defineComponent({
        
    })
</script>

<style scoped>
    .header{
        background-color: white;
        height: 8vh;
        margin-bottom: 3vh;
        box-shadow: 1px 1px 10px #efefef;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 3vw;
        padding-right: 3vw;
    }
    .text {
        display : inline
    }
</style>