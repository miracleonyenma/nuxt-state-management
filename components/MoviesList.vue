<!-- ./components/MoviesList.vue -->

<script setup>
const { movies, addToWishlist, removeFromWishlist, isInWishlist } = useMovies();
</script>
<template>
  <ul>
    <li v-for="movie in movies" :key="movie.title">
      <h3>{{ movie.title }}</h3>
      <button :disabled="isInWishlist(movie)" @click="addToWishlist(movie)">
        Add
      </button>
      <button
        :disabled="!isInWishlist(movie)"
        @click="removeFromWishlist(movie)"
      >
        Remove
      </button>
    </li>
  </ul>
</template>
