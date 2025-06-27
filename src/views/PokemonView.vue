<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useGetPokemons } from '@/composables/useGetPokemons';
const {getPokemons, pokemons} = useGetPokemons();
const route = useRoute();
// *  En Vue 3 con Composition API, los parámetros pasados por la URL dinámica no son accesibles mediante el símbolo reservado $ (como $route) dentro del bloque <script setup> o del setup() normal. Esto se debe a que no existe acceso directo al contexto global de Vue en ese ámbito. En su lugar, se debe importar y utilizar el método useRoute() del paquete vue-router para acceder a los parámetros de la ruta.
const router = useRouter();
const getBack = () => {
    router.push('/pokemons');
}
getPokemons(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
    <div v-if="pokemons">
        <img :src="pokemons.sprites.front_default" :alt="$route.params.name" width="200px" height="200px">
        <h1>Poke Name: {{ $route.params.name }}</h1>
    </div>
    <div v-else>
        <h1>El pokemon no existe</h1>
    </div>
    <button @click="getBack" class="btn btn-outline-primary">Regresar</button>
</template>