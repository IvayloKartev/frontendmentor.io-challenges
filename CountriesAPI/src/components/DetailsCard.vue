<template>
    <section>
        <img/>
        <div>
            <h1></h1>
            <div>
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <p>Border countries : </p>
            <div></div>
        </div>
    </section>
</template>

<script lang="ts">
    import { ref, defineComponent, onMounted } from 'vue';
    import type { PropType } from 'vue';

    interface Country {
        image: string;
        country: string;
        population: number;
        region: string;
        capital: string;
    }

    export default defineComponent({
        props : {
            country : {
                type : String as PropType<String>
            }
        },
        setup(props) {

            const curCountry = ref<Country | null>(null);

            onMounted(() => {
                async function FindCountry() {
                    
                try {
                    const response : Array<Country> = await fetch('./data.json').then(r =>{ return r.json();});
                    const countryInfo : Country = response.filter(c => c.country === props.country)[0];
                    curCountry.value = JSON.parse(JSON.stringify(countryInfo));
                }
                catch {
                    console.log("error")
                }
            }
                FindCountry();
            })
        }
    })
</script>

<style scoped>

</style>