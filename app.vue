<script setup>
const state = reactive({
  count: 0,
});

const incrementCount = () => state.count++;
</script>
<template>
  <div>
    <button @click="incrementCount">Clicked {{ state.count }} times</button>
  </div>
</template>
