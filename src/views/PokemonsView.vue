<script setup>
import { RouterLink } from 'vue-router';
import { useGetPokemons } from '@/composables/useGetPokemons';
const { getPokemons, pokemons } = useGetPokemons();
getPokemons('https://pokeapi.co/api/v2/pokemon');
</script>

<template>
    <div v-if="pokemons">
        <ul>
            <li v-for="pokemon in pokemons.results" :key="pokemon.url">
                <!-- Rutas dinamincas: para usarlas debemos utilizar routerLink -->
                <RouterLink :to="`./pokemons/${pokemon.name}`">{{ pokemon.name }}</RouterLink>
            </li>
        </ul>
        <button @click="getPokemons(pokemons.previous)" class="btn btn-outline-primary" :disabled="pokemons.previous == null">Prev</button>
        <button @click="getPokemons(pokemons.next)" class="btn btn-outline-primary" :disabled="pokemons.next == null">Next</button>
    </div>
</template>

<style>
li {
    list-style: none;
}
</style>