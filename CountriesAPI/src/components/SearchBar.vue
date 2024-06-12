<template>
    <div class="box">
        <input type="text" v-model="selectedCountry"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import type { PropType } from 'vue';

    export default defineComponent({
        props : {
            selectedCountry : {
                type : String as PropType<String>,
            }
        },
        setup() {
            const selectedCountry = ref<string>();
            return {
                selectedCountry
            }
        }
    })
</script>

<style scoped>
    .box {
        width: 30vw;
        height: 1rem;
        border-radius: 10px;
        box-shadow: 1px 1px 5px #f2f2f2;
    }
</style>