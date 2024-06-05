<template>
    <section class="grid">
        <CountryCard v-for="country in countries"
                     v-bind:country="country">
        </CountryCard>
        <div></div>
    </section>
</template>

<script lang="ts">
    import CountryCard from './CountryCard.vue';
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
        components : {
            CountryCard
        },
        props: {
        countries: {
            type: Array as PropType<Array<Country>>,
            required: true,
        },
  },
        setup(props) {
            return {
                props
            }
        }
    })
</script>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 60px;
    }
</style>