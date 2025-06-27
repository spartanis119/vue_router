<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const pokemons = ref([]);

const getPokemons = async () => {
    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
        pokemons.value = data.results;
    } catch (error) {
        console.log(error);
        pokemons.value = null;
    }
};

getPokemons();

</script>

<template>
    <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.url">
            <!-- Rutas dinamincas: para usarlas debemos utilizar routerLink -->
            <RouterLink :to="`./pokemons/${pokemon.name}`">{{ pokemon.name }}</RouterLink>
        </li>
    </ul>
</template>

<style>
li {
    list-style: none;
}
</style>