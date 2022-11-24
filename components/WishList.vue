<!-- ./components/WishList.vue -->

<script setup>
import { useMoviesStore } from "~~/stores/movies";

const { wishlist } = useMoviesStore();
</script>

<template>
  <ul>
    <li v-for="movie in wishlist" :key="movie.title">
      <h3>{{ movie.title }}</h3>
    </li>
  </ul>
</template>
