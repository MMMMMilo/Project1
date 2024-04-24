<script setup lang="ts">
    import TitleCard from "@/components/TitleCard.vue";
    import ImgaeCard from "@/components/ImageCard.vue";
    import InfoCard from "@/components/InfoCard.vue";
</script>

<template>
  <main>
    <v-container class="hero-section">
      <div class="slogn">
        <h1>Discover the best food & drinks in New York</h1>
        <h4>The meals you love, delivered with care</h4>
      </div>
      <v-row >
        <div class="location">
          <span class="mdi mdi-map-marker">New York</span>
          <v-btn variant="text">
            <v-icon class="mdi mdi-crosshairs-gps"></v-icon>
            Locate Me
          </v-btn>
          <input type="text" placeholder="Search for restaurant ">
          <RouterLink to="/ResturantTwoColumn">Search</RouterLink>
        </div>
      </v-row>
    </v-container>
    <v-container class="content">
      <v-row class="card-wrap">
        <div class="col-sm-6 col-md-4 col-lg-3 col-12" v-for="item in 4">
          <RouterLink to="/FoodMenu">
            <TitleCard/>
          </RouterLink>
        </div>
      </v-row>
    </v-container>

    <v-container >
      <div>
        <div>
          <h2>Collections</h2>
          <h6>Explore curated lists of top restaurants, cafes, pubs, and bars in New York, based on trends</h6>
        </div>
        <div>
          <RouterLink to="">View all collections</RouterLink>
        </div>
      </div>
      <v-row>
        <div class="col-sm-6 col-md-4 col-lg-3 col-12" v-for="item in 4">
          <RouterLink to="">
            <ImgaeCard/>
          </RouterLink>
        </div>
      </v-row>
    </v-container>

    <v-container>
      <h2>Browse By Cuisine</h2>
      <v-row>
        <div v-for="item in 6">
          <v-avatar size="150">
            <v-img
              alt="John"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
            ></v-img>
          </v-avatar>
          <h4>Mexican</h4>
        </div>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <div class=" col-12">
          <h2>Popular Near You</h2>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-12" v-for="item in 8">
          <RouterLink to="">
            <InfoCard/>
          </RouterLink>
        </div>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <img src="https://foodhub-nuxt.vercel.app/_nuxt/img/App.4927ff9.png" alt="">
        <div class="d-flex flex-column">
          <h1>Get the Mobile App</h1>
          <p>We will send you a link, open it on your phone to download the app</p>
          <div class="d-flex">
            <input type="radio">
            <label for="">Email</label>
            <input type="radio">
            <label for="">Phone</label>
          </div>
          <div class="d-flex">
            <v-input type="text">Email</v-input>
            <RouterLink to="/ResturantTwoColumn">SEARCH</RouterLink>
          </div>
          <span>Download App from</span>
          <div class="d-flex">
            <img src="../assets/img/google-play.png" alt="google-play">
            <img src="../assets/img/app-store.png" alt="app-store">
          </div>
        </div>
      </v-row>
    </v-container>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>


