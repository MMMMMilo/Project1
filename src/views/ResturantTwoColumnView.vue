<script setup lang="ts">
    import BreadCrumb from '@/components/BreadCrumb.vue';
    import InfoCard from "@/components/InfoCard.vue";
    import { ref } from 'vue';

    const yourBreadCrumb = [
    {text:'Home',to:'/'},
    {text:'New York',to:'/'},
    {text:'Resturtant',active:true},
  ];
  const restaurants = [
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg',title:'Starbucks'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg',title:'Mughal Masala Masala Masala Masala'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/17.3634737.jpg',title:'Woondal'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/18.2a12c1e.jpg',title:'Red Chillies'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/19.a1e7280.jpg',title:'Starbucks'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/20.ce4b89f.jpg',title:'Mughal Masala'},
    ];

  const tab = ref(null);
</script>

<template>
  <main>
    <div class="container">
      <BreadCrumb :breadcrumb="yourBreadCrumb"/>
      <div class="d-flex justify-space-between">
        <v-tabs
          v-model="tab"
          align-tabs="start"
        >
          <v-tab :value="1">Order Online</v-tab>
          <v-tab :value="2">Book a Table</v-tab>
          <v-tab :value="3">Reviews</v-tab>
        </v-tabs>
        <v-btn
          class="text-none text-subtitle-1 search-btn "
          color="#D23F57"
          size="small"
        >
        FILTER
        </v-btn>
      </div>
      <div class="d-flex mt-10">
        <div class="col-12 col-md-4 col-lg-4 d-flex flex-column ga-4">
          <h6 class="font-weight-bold">Categories</h6>
          <div v-for="item in 4">
            <input type="checkbox"> Pizza
          </div>
          <h6 class="font-weight-bold"> Categories</h6>
          <div v-for="item in 4">
            <input type="checkbox"> 4+
          </div>
          <h6 class="font-weight-bold">Sort By</h6>
          <div v-for="item in 4">
            <input type="radio"> Popularity
          </div>
        </div>
        <div class="row col-12 col-md-8 col-lg-8">
          <div v-for="(restaurant,index) in restaurants" :key="index" class="col-6 col-md-4">
            <InfoCard
              :imageSrc="restaurant.image"
              :title ="restaurant.title"
            />
        </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

</style>