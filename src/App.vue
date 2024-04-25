<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MainFooter from "@/components/MainFooter.vue";
import MainHeader from "@/components/MainHeader.vue";
</script>

<template>
  <!-- <MainHeader/> -->
  <RouterView />

  <!-- <div class="pt-16">
    <RouterView />
  </div> -->

  <MainFooter/>
</template>

