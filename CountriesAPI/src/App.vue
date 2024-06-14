<template>
    <CardDetails v-if="displayCountry"/>
    <main class="main">
      <Header></Header>
      <div class="inputs">
        <input type="text" v-model="selectedCountry" placeholder="Search for a country..." class="search"/>
        <FilterBox v-on:setRegion="setRegion"/>
      </div>
      <CardGrid v-on:setDisplayCountry="setDisplayCountry" :countries="filteredCountries.filter(country => country.country.toLowerCase().includes(selectedCountry.toLowerCase()))"/>
    </main>
</template>
  
<script lang="ts">
  import { ref, defineComponent, onMounted, onUpdated, watch } from 'vue';
  import CardGrid from './components/CardGrid.vue';
  import Header from './components/Header.vue';
  import SearchBar from './components/SearchBar.vue';
  import FilterBox from './components/FilterBox.vue';
  import CardDetails from './components/CardDetails.vue';
  
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
      CardDetails
    },
    setup() {
      const countries = ref<Array<Country>>([]);
      const selectedCountry = ref<string>('');
      const filteredCountries = ref<Array<Country>>([]);
      const selectedRegion = ref<string>('');  
      const displayCountry = ref<string | null>(null);

      onMounted(() => {
        async function getCountries() {
          try {
            const response = await fetch('./data.json').then(r =>{ return r.json();});
            const tempArr = await response.map((country: any) => ({
              image: country.flags.png,
              country: country.name,
              population: country.population,
              region: country.region,
              capital: country.capital ? country.capital[0] : 'N/A',
              displayDetails: () => {},
            }));
            countries.value = JSON.parse(JSON.stringify(tempArr))
            countries.value = JSON.parse(JSON.stringify(countries.value));
            filteredCountries.value = countries.value.filter(country => country.country.toLowerCase().includes(selectedCountry.value.toLowerCase()))  
          } catch (error) {
            console.error('Error fetching countries:', error);
          }
        }
        getCountries();
      });

      watch(selectedRegion, (newRegion) => {
          if(newRegion) {
              filteredCountries.value = countries.value.filter(country => country.region.toLowerCase().includes(selectedRegion.value.toLowerCase()))
          } else {
            filteredCountries.value = countries.value.filter(country => country.country.toLowerCase().includes(selectedCountry.value.toLowerCase()))  
          }
      });


      function setRegion(region: string) {
        selectedRegion.value = region;
        console.log(selectedRegion.value)
      } 

      function setDisplayCountry(country : string) {
         displayCountry.value = country;
         console.log(displayCountry.value);
      }
      return {
        filteredCountries,
        selectedCountry,
        selectedRegion,
        setRegion,
        setDisplayCountry,
        displayCountry
      };
    }
  });
  </script>
  
<style scoped>
    .main {
        padding: 0;
        margin: 0;
        background-color: hsl(0, 0%, 98%);
    }

    .search {
        width : 30rem;
        height: 3rem;
        font-size: 16px;
        border-radius: 2px;
        border : none;
        box-shadow: 1px 1px 10px #f3f3f3;
    }

    .inputs {
      width: 60vw;
      margin: auto;
      display: flex;
      justify-content: space-between;
      margin-bottom: 2vh;
    }
</style>
  