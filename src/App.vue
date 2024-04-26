<script setup lang="ts">
import { RouterLink, RouterView,useRoute } from 'vue-router';
import { computed } from 'vue';
import MainFooter from "@/components/MainFooter.vue";
import MainHeader from "@/components/MainHeader.vue";

const route = useRoute();

const isHomePage = computed(()=>{
  return route.path === '/';
})

</script>

<template>
  <RouterView v-if="isHomePage" />

  <MainHeader v-if="!isHomePage"/>
  <div class="pt-16" v-if="!isHomePage">
    <RouterView />
  </div>

  <MainFooter/>
</template>

