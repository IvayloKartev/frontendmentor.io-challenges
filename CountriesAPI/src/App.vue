<template>
    <main class="main">
      <Header></Header>
      <SearchBar />
      <FilterBox />
      <CardGrid :countries="countries"/>
    </main>
</template>
  
<script lang="ts">
  import { ref, defineComponent, onMounted } from 'vue';
  import axios from 'axios';
  import CardGrid from './components/CardGrid.vue';
  import Header from './components/Header.vue';
  import SearchBar from './components/SearchBar.vue';
  import FilterBox from './components/FilterBox.vue';
  
  export interface Country {
    image: string;
    country: string;
    population: number;
    region: string;
    capital: string;
    displayDetails: () => void;
  }
  
  export default defineComponent({
    components: {
      Header,
      SearchBar,
      FilterBox,
      CardGrid,
    },
    setup() {
      const countries = ref<Array<Country>>([]);

      onMounted(() => {
        async function getCountries() {
          try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            const tempArr = await response.data.map((country: any) => ({
              image: country.flags.png,
              country: country.name.common,
              population: country.population,
              region: country.region,
              capital: country.capital ? country.capital[0] : 'N/A',
              displayDetails: () => {},
            }));
            countries.value = JSON.parse(JSON.stringify(tempArr))
            
            countries.value = JSON.parse(JSON.stringify(countries.value));
          } catch (error) {
            console.error('Error fetching countries:', error);
          }
        }
        getCountries();
      });
  
      return {
        countries
      };
    },
  });
  </script>
  
<style scoped>
    .main {
        padding: 0;
        margin: 0;
        background-color: #fafafa;
    }
</style>
  