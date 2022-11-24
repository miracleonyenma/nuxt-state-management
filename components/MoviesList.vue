<!-- ./components/MoviesList.vue -->

<script setup>
const movies = useMovies();
const setWishList = useSetWishlist;
const isInWishlist = useIsInWishlist();
</script>
<template>
  <ul>
    <li v-for="movie in movies" :key="movie.title">
      <h3>{{ movie.title }}</h3>
      <p>Price: {{ movie.price }}</p>
      <button
        :disabled="isInWishlist(movie)"
        @click="setWishList({ type: 'add', movie })"
      >
        Add
      </button>
      <button
        :disabled="!isInWishlist(movie)"
        @click="setWishList({ type: 'remove', movie })"
      >
        Remove
      </button>
    </li>
  </ul>
</template>
