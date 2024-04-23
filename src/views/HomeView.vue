<script setup lang="ts">
    import TitleCard from "@/components/TitleCard.vue";
</script>

<template>
  <main>
    <h1>Home</h1>
    <div class="container">
        <div class="row">
          <RouterLink to="/FoodMenu">
              <TitleCard/>
          </RouterLink>
          <RouterLink to="/FoodMenu">
              <TitleCard/>
          </RouterLink>
          <RouterLink to="/FoodMenu">
              <TitleCard/>
          </RouterLink>
          <RouterLink to="/FoodMenu">
              <TitleCard/>
          </RouterLink>
        </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>
