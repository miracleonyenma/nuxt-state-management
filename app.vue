<script setup>
const state = ref({
  count: 0,
});

const incrementCount = () => state.value.count++;
</script>
<template>
  <div>
    <button @click="incrementCount">Clicked {{ state.count }} times</button>
  </div>
</template>
