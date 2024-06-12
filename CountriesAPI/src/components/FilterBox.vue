<template>
    <div class="box" v-on:click="changeOptionsVisibility">
        <div class="trig">{{ curRegion ? curRegion : "Filter by Region"}}</div>
        <div v-if="areOptionsVisible" class="box_options">
        <div @click="setRegion('Africa')" class="option">Africa</div>
        <div @click="setRegion('America')" class="option">America</div>
        <div @click="setRegion('Asia')" class="option">Asia</div>
        <div @click="setRegion('Europe')" class="option">Europe</div>
        <div @click="setRegion('Oceania')" class="option">Oceania</div>
    </div>
</div>

</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import type { PropType } from 'vue';

    export default defineComponent({
        setup(props, ctx) {

            const areOptionsVisible = ref<boolean>(true);
            const curRegion = ref<string>('');

            function changeOptionsVisibility() {
                areOptionsVisible.value = !areOptionsVisible.value;
                console.log("Changed! "+areOptionsVisible)
            }

            function setRegion(region : string) {
                ctx.emit("setRegion", region)
                curRegion.value = region;
            }

            return {
                areOptionsVisible,
                changeOptionsVisibility,
                props,
                setRegion,
                curRegion,
            }
        },
        methods : {
            
        }
    })    
</script>

<style scoped>
    .box {
        width: 10vw;
        height: auto;
        border-radius: 2px;
        box-shadow: 1px 1px 5px #f2f2f2;
        background-color: white;
        position: relative;
        left : 5.75vw;
    }
    .box_options {
        width: 10vw;
        margin-top: 10px;
        border-radius: 2px;
        box-shadow: 1px 1px 5px #f2f2f2;
        background-color: white;
        position: absolute;
    }

    .trig {
        height: 3rem;
        display: flex;
        align-items: center;
        display: flex;
        justify-content: space-evenly;
    }

    .option {
        margin: 10px;
    }

    .option:hover {
        background-color:beige;
    }
</style>