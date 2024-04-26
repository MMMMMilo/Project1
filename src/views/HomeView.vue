<script setup lang="ts">
    import TitleCard from "@/components/TitleCard.vue";
    import ImgaeCard from "@/components/ImageCard.vue";
    import InfoCard from "@/components/InfoCard.vue";
    import HomeNav from "@/components/HomeNav.vue";
    import MainHeader from "@/components/MainHeader.vue";
    import { ref,onMounted,onBeforeUnmount } from "vue";

    const showHeader = ref(false);
    const handleScroll = ()=>{
      const orderSection = document.getElementById('search-bar');
      if(orderSection){
        const orderPosition = orderSection.getBoundingClientRect().top + window.scrollY;
        showHeader.value = window.scrollY >= orderPosition;
      }
    }

    onMounted(()=>{
      window.addEventListener('scroll',handleScroll);
    })

    onBeforeUnmount(()=>{
      window.removeEventListener('scroll',handleScroll);
    })

    const features = [
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg',title:'Order Food Online'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg',title:'Go Out For Meal'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/17.3634737.jpg',title:'Nightlife & Clubs'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/18.2a12c1e.jpg',title:'Pro Membership'},
    ]

    const collections = [
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/5.8a5927f.png',title:'Most Searched of 2020'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/6.729f74b.png',title:'Best Openings of 2020'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/7.ea86fb7.png',title:'Trending This Week'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/8.d53c60b.png',title:'Best Of New York'},
    ];

    const cuisines = [
    {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/9.1c1a4aa.png',title:'Italian'},
    {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/10.4b83261.png',title:'Chinesse'},
    {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/11.53f677b.png',title:'Japanesse'},
    {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/12.95a2711.png',title:'Indian'},
    {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/13.b85d0c1.png',title:'Thai Food'},
    {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/14.05cff0f.png',title:'Mexican'},
    ];

    const restaurants = [
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg',title:'Starbucks'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg',title:'Mughal Masala Masala Masala Masala'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/17.3634737.jpg',title:'Woondal'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/18.2a12c1e.jpg',title:'Red Chillies'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/19.a1e7280.jpg',title:'Starbucks'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/20.ce4b89f.jpg',title:'Mughal Masala'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/21.eee29b5.jpg',title:'Woondal'},
      {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/22.c99d20e.jpg',title:'Red Chillies'},
    ];

</script>

<template>
  <main>
    <MainHeader v-if="showHeader" />    
    <div class="hero-section">
      <div class="container py-16 text-center">
        <HomeNav/>
        <div class="d-flex flex-column align-center">
          <div class="slogn text-white py-10">
            <h1 class="text-h3">Discover the best food & drinks in <span class="font-weight-black">New York</span></h1>
            <h4 class="text-h6">The meals you love, delivered with care</h4>
          </div>
          <div class="location bg-white rounded d-flex align-center col-lg-7 col-12 ">
            <span class="mdi mdi-map-marker">New York</span>
            <v-btn variant="text" class="">
              <v-icon class="mdi mdi-crosshairs-gps"></v-icon>
              Locate Me
            </v-btn>
            <div class="search-bar d-flex flex-grow-1" id="search-bar">
              <v-text-field
                variant="solo"
                placeholder="Seaech for restaurant"
                hide-details="auto"
                class="search-input"
                rounded="0"
              ></v-text-field>
              <RouterLink to="/ResturantTwoColumn">
                <v-btn
                  class="text-none text-subtitle-1 search-btn "
                  color="#D23F57"
                  size="small"
                >
                Search
                </v-btn>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-grey-lighten-5">
      <div class="container py-15">
        <div class="row card-wrap">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 " v-for="feature in features">
            <RouterLink to="/FoodMenu">
              <TitleCard
                :imageSrc="feature.image"
                :title="feature.title"
              />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-15">
      <div>
        <h2 class="font-weight-black mb-3">Collections</h2>
        <div class="d-flex justify-space-between text-grey-lighten-1">
          <h6>Explore curated lists of top restaurants, cafes, pubs, and bars in New York, based on trends</h6>
          <RouterLink to="" class="text-pink-darken-1">View all collections</RouterLink>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 pa-3" v-for="collection in collections">
          <RouterLink to="">
            <ImgaeCard
              :imageSrc="collection.image"
              :title="collection.title"
            />
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="container py-15">
      <h2 class="font-weight-black mb-6">Browse By Cuisine</h2>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 text-center" v-for="cuisine in cuisines">
          <v-avatar size="150" class="mb-4">
            <v-img
              :src="cuisine.image"
            ></v-img>
          </v-avatar>
          <h4 class="font-weight-medium text-grey-darken-3">{{cuisine.title}}</h4>
        </div>
      </div>
    </div>

    <div class="container py-15">
      <div class="row">
        <div class=" col-12">
          <h2 class="font-weight-black">Popular Near You</h2>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-4" v-for="restaurant in restaurants">
          <RouterLink to="">
            <InfoCard
              :imageSrc="restaurant.image"
              :title ="restaurant.title"
            />
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="bg-grey-lighten-5">
      <div class="container py-15">
        <div class="row aline-center justify-center ga-10">
          <img src="https://foodhub-nuxt.vercel.app/_nuxt/img/App.4927ff9.png" alt="">
          <div class="d-flex flex-column ga-6">
            <h1 class="font-weight-black">Get the Mobile App</h1>
            <p class="text-grey-darken-2">We will send you a link, open it on your phone to download the app</p>
            <div class="d-flex ga-3 text-grey-darken-2">
              <input type="radio">
              <label for="">Email</label>
              <input type="radio">
              <label for="">Phone</label>
            </div>
            <div class="d-flex search-bar">
              <v-text-field
                density="compact"
                variant="solo"
                placeholder="Email"
                hide-details="auto"
                class="search-input"
                rounded="e-0"
              ></v-text-field>
              <RouterLink to="/ResturantTwoColumn">
                <v-btn
                  class="text-none text-subtitle-1 search-btn"
                  color="#D23F57"
                  size="small"
                >
                SEARCH
                </v-btn>
              </RouterLink>
            </div>
            <span class="text-grey-lighten-1">Download App from</span>
            <div class="d-flex ga-4">
              <img src="../assets/img/google-play.png" alt="google-play">
              <img src="../assets/img/app-store.png" alt="app-store">
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.search-bar{
  .search-input{
    width: 100%;
    border-radius:4px 0 0 4px !important;
  }
  .search-btn{
    border-radius: 0 4px 4px 0;
    height: 100%;
  }
}
.hero-section{
  background-image: url(../assets/img/header-bg.d39c465.png);
  background-size: cover;
}
</style>


