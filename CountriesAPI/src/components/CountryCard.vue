<template>
    <div class="card">
        <img class="flag" v-bind:src="country?.image"/>
        <div class="data">
            <p class="country">{{ country?.country }}</p>
            <p>Population : {{ country?.population }}</p>
            <p>Region : {{ country?.region }}</p>
            <p>Capital : {{ country?.capital }}</p>
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
        setup(props) {
            return {
                props
            }
        }
    })
</script>

<style scoped>
    .card {
        width : 20vw;
        height: 40vh;
        border-radius: 20px;
        box-shadow: 1px 1px 10px #f3f3f3;
        background-color: white;
    }
    .flag {
        width: 100%;
        height: 50%;
        border-radius: 10px 10px 0 0;
    }
    .country {
        font-weight: bold;
    }
    .data {
        padding: 30px;
    }
</style>