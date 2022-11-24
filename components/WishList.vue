<!-- ./components/WishList.vue -->

<script setup>
const { wishlist } = useMovies();

console.log({ wishlist });
</script>

<template>
  <ul>
    <li v-for="movie in wishlist" :key="movie.title">
      <h3>{{ movie.title }}</h3>
    </li>
  </ul>
</template>
