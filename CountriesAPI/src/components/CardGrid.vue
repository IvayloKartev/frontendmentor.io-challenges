<template>
    <section class="grid">
        <CountryCard v-for="country in countries"
                     v-bind:country="country"
                     @getCountry="getCountry">
        </CountryCard>
        <div></div>
    </section>
</template>

<script lang="ts">
    import CountryCard from './CountryCard.vue';
    import { ref, defineComponent, watch } from 'vue';
    import type { PropType } from 'vue';

    interface Country {
        image : string,
        country : string,
        population : number,
        region : string,
        capital : string,
    }

    export default defineComponent({
        components : {
            CountryCard
        },
        props: {
        countries: {
            type: Array as PropType<Array<Country>>,
            required: true,
        },
  },
        setup(props, ctx) {

            const displayCountry = ref<string>('');

            function setDisplayCountry(dCountry : string) {
                ctx.emit("setDisplayCountry", dCountry)
            }

            function getCountry(country : string) {
                displayCountry.value = country;
            }

            watch(displayCountry, (newCountry) => { 
                setDisplayCountry(newCountry)
            })

            return {
                props,
                setDisplayCountry,
                getCountry
            }
        }
    })
</script>

<style scoped>
    .grid {
        margin: auto;
        width: 60vw;
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap : 75px;
    }
</style>