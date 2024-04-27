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
  const cateDrawer = ref(false);
  const toggleCateDrawer = ()=>{
    cateDrawer.value = !cateDrawer.value
  };

</script>

<template>
  <main>
    <div class="container">
      <BreadCrumb :breadcrumb="yourBreadCrumb"/>
      <div class="row justify-space-between">
        <v-tabs
          v-model="tab"
          align-tabs="start"
          color="pink-darken-1"
          class="mb-4"
        >
          <v-tab :value="1">Order Online</v-tab>
          <v-tab :value="2">Book a Table</v-tab>
          <v-tab :value="3">Reviews</v-tab>
        </v-tabs>
        <v-btn
          class="text-none text-subtitle-1 search-btn"
          color="pink-darken-1"
          size="small"
        >
        FILTER
        </v-btn>
      </div>
      <div class="mobile">
        <v-btn color="pink-darken-1 mt-6" @click="toggleCateDrawer">
          <v-icon class="mdi mdi-menu"/>Categories
        </v-btn>
        <div class="side-menu" v-show="cateDrawer">
            <div class="drawer-bg" @click="toggleCateDrawer">
                <div @click.stop>
                  <v-layout> 
                    <v-navigation-drawer v-model="cateDrawer">
                      <div class="d-flex flex-row-reverse">
                        <v-btn variant="plain" append-icon="mdi mdi-close" class="pa-4" @click="toggleCateDrawer"/>
                      </div>
                      <div class="d-flex flex-column ga-4 pa-6">
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
                    </v-navigation-drawer>
                  </v-layout>
                </div>
            </div>
        </div>
      </div>
      <div class="d-flex mt-6">
        <div class="desktop col-12 col-md-3 d-flex flex-column ga-4">
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
        <div class="row col-12 col-md-9">
          <h5 class="font-weight-black col-12 pb-4">184 Delivery Restaurants in New York</h5>
          <div v-for="(restaurant,index) in restaurants" :key="index" class="col-12 col-sm-6 col-md-4">
            <RouterLink to="/FoodMenu">
              <InfoCard
                :imageSrc="restaurant.image"
                :title ="restaurant.title"
              />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.mobile{
  display: none;
}
@media screen and (max-width: $md){
  .mobile{
    display: block;
  }
}
.desktop{
  display: block;
}
@media screen and (max-width: $md){
  .desktop{
    display: none !important;
  }
}
.drawer-bg{
    background-color: rgba(255, 255, 255, 0.2);
    min-height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9999;
}
</style>