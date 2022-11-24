<!-- ./components/MoviesList.vue -->

<script setup>
import { useMoviesStore } from "~~/stores/movies";

const { movies, isInWishlist, addToWishlist, removeFromWishlist } =
  useMoviesStore();
</script>
<template>
  <ul>
    <li v-for="movie in movies" :key="movie.title">
      <h3>{{ movie.title }}</h3>
      <p>Price: {{ movie.price }}</p>
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
