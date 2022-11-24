<!-- ./app.vue -->
<script setup>
const {totalPrice} = useMovies();
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
      Total price: {{ totalPrice }}
    </div>
  </div>
</template>
<style>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
