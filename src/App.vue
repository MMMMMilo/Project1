<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/FoodMenu">FoodMenu</RouterLink>
      <RouterLink to="/ResturantTwoColumn">ResturantTwoColumn</RouterLink>
    </nav>

  </header>

  <RouterView />
</template>

<style scoped>

</style>
