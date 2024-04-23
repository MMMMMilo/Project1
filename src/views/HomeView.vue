<script setup lang="ts">
    import TitleCard from "@/components/TitleCard.vue";
</script>

<template>
  <main>
    <div class="container">
      <div>
        <h1>Discover the best food & drinks in New York</h1>
        <h4>The meals you love, delivered with care</h4>
      </div>
      <div class="row">
        <div>New York</div>
        <button>Locate Me</button>
        <input type="text" placeholder="Search for restaurant ">
        <RouterLink to="/ResturantTwoColumn">Search</RouterLink>
      </div>
    </div>
    <div class="container content">
      <div class="card-wrap row">
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
h1{
  color:$primaryColorPink
}
// @import "@/assets/scss/main.scss";
</style>


