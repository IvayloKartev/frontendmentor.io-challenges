<template>
    <main class="details_wrapper">
        <Header></Header>
    </main>
</template>

<script lang="ts">
    import Header from './Header.vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        components : {
            Header
        },
        setup() {
            
        }
    })
</script>

<style scoped>
    .details_wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        background-color: aquamarine;
    }
</style>