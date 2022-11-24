<!-- ./app.vue -->
<script setup>
import { useMoviesStore } from "./stores/movies";

const moviesStore = useMoviesStore();
</script>
<template>
  <div class="wrapper">
    <div class="movies-list">
      <h2>Movies</h2>
      <MoviesList />
    </div>
    <div class="wish-list">
      <h2>Wish List</h2>
      <WishList />
      Total price: {{ moviesStore.totalPrice }}
    </div>
  </div>
</template>
<style>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
