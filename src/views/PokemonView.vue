<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
// *  En Vue 3 con Composition API, los parámetros pasados por la URL dinámica no son accesibles mediante el símbolo reservado $ (como $route) dentro del bloque <script setup> o del setup() normal. Esto se debe a que no existe acceso directo al contexto global de Vue en ese ámbito. En su lugar, se debe importar y utilizar el método useRoute() del paquete vue-router para acceder a los parámetros de la ruta.

const router = useRouter();

const getBack = () => {
    router.push('/pokemons');
}

const pokemonImage = ref();
const pokemons = ref();

const getPokemon = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
        console.log(data);
        pokemons.value = data;
        pokemonImage.value = data.sprites.front_default;
        console.log(pokemonImage);
    } catch (error) {
        console.log(error);
        pokemons.value = null;
    }
}
getPokemon();
</script>

<template>
    <div v-if="pokemons">
        <img :src="pokemonImage" alt="">
        <h1>Poke Name: {{ $route.params.name }}</h1>
    </div>
    <div v-else>
        <h1>El pokemon no existe</h1>
    </div>
    <button @click="getBack">Regresar</button>
</template>