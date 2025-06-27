<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" :to="{ name : 'home'}">
          <img src="@/assets/logo.svg" alt="" width="30" height="24"
            class="d-inline-block align-text-top">
          PokeApi
        </RouterLink>
        <div>
          <RouterLink class="btn btn-outline-primary me-2" :to="{ name : 'home'}">Home</RouterLink>
          <RouterLink class="btn btn-outline-primary" :to="{ name : 'pokemons'}">Pokemons</RouterLink>
        </div>

      </div>
    </nav>
  </header>

  <main>
     <RouterView/>
  </main>

</template>

<style></style>
