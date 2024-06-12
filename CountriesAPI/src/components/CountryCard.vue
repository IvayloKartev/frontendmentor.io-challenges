<template>
    <div class="card" @click="getCountry(country?.country!)">
        <img class="flag" v-bind:src="country?.image"/>
        <div class="data">
            <p class="country">{{ country?.country }}</p>
            <p><span class="cat">Population</span> : {{ country?.population }}</p>
            <p><span class="cat">Region</span> : {{ country?.region }}</p>
            <p><span class="cat">Capital</span> : {{ country?.capital }}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref, defineComponent } from 'vue';
    import type { PropType } from 'vue';

    interface Country {
        image : string,
        country : string,
        population : number,
        region : string,
        capital : string,
    }
    
    export default defineComponent({
        props : {
            country : {
                type: Object as PropType<Country>,
            }
        },
        setup(props, ctx) {

            function getCountry(country : string) {
                ctx.emit("getCountry", country)
            }

            return {
                props,
                getCountry
            }
        }
    })
</script>

<style scoped>
    .card {
        width : 13.5vw;
        height: 35vh;
        border-radius: 5px;
        box-shadow: 1px 1px 10px #f3f3f3;
        background-color: white;
        font-size: 12.5px;
    }
    .flag {
        width: 100%;
        height: 50%;
        border-radius: 5px 5px 0 0;
    }
    .country {
        font-weight: bold;
        font-size: 1rem;
    }
    .data {
        padding: 10px;
    }
    .cat {
        font-weight: bold;
    }
</style>