<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MainFooter from "@/components/MainFooter.vue";
import MainHeader from "@/components/MainHeader.vue";


</script>

<template>
  <header>
    <nav>
      <MainHeader/>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/FoodMenu">FoodMenu</RouterLink>
      <RouterLink to="/ResturantTwoColumn">ResturantTwoColumn</RouterLink>
    </nav>

  </header>
  <RouterView />
  <MainFooter/>

</template>

