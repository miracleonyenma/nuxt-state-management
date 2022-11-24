<!-- ./components/WishList.vue -->

<script setup>
const wishlist = useWishlist();
</script>

<template>
  <ul>
    <li v-for="movie in wishlist" :key="movie.title">
      <h3>{{ movie.title }}</h3>
    </li>
  </ul>
</template>
