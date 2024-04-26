<script setup lang="ts">
  import BreadCrumb from '@/components/BreadCrumb.vue';
  import InfoCardJustify from '@/components/InfoCardJustify.vue';
  import Post from '@/components/Post.vue';
  import Comment from '@/components/Comment.vue';
  import { ref } from 'vue';

  const yourBreadCrumb = [
    {text:'Home',to:'/'},
    {text:'New York',to:'/'},
    {text:'Resturtant',active:true},
  ]

  const resturantImages = [
    {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/foodOne.f29cb9f.png'},
    {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/foodTwo.3b74f91.png'},
    {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/foodThree.fd71db5.png'},
    {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/foodFour.e242457.png'},
  ]

  const tab = ref(null);

  const orders = [
    {text:'DPB Special Combos (10)',to:'/FoodMenu'},
    {text:'Chineese Starters (30)',to:'/FoodMenu'},
    {text:'Chinese Main Course (75)',to:'/FoodMenu'},
    {text:'Indian Main Course (63)',to:'/FoodMenu'},
    {text:'Rice & Pulao (7)',to:'/FoodMenu'},
    {text:'Desserts (1)',to:'/FoodMenu'},
    {text:'Soup & wonton (15)',to:'/FoodMenu'},
    {text:'Accompaniment (4)',to:'/FoodMenu'},
    {text:'Biryani (1)',to:'/FoodMenu'},
  ]

  const items=['Foo','Bar','Fizz','Buzz'];

  const posts = [
    {avatarSrc:'https://foodhub-nuxt.vercel.app/_nuxt/img/8.38098d6.png',imageSrc:['https://foodhub-nuxt.vercel.app/_nuxt/img/foodFive.63a95c3.png','https://foodhub-nuxt.vercel.app/_nuxt/img/foodSix.d1a6e1c.png'],name:'Abriella Bond'},
    {avatarSrc:'https://foodhub-nuxt.vercel.app/_nuxt/img/6.9bc51a4.png',imageSrc:'',name:'Abriella Bond'},
    {avatarSrc:'	https://foodhub-nuxt.vercel.app/_nuxt/img/9.19544e8.jpg',imageSrc:'',name:'Abriella Bond'},
  ]

  const comments = [
    {avatarSrc:'https://foodhub-nuxt.vercel.app/_nuxt/img/6.9bc51a4.png',name:'Emmet McDermott',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti asperiores quo provident pariatur iste necessitatibus.'},
    {avatarSrc:'https://foodhub-nuxt.vercel.app/_nuxt/img/7.7edf59d.png',name:'Emmet McDermott',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti asperiores quo provident pariatur iste necessitatibus.'},
  ]
</script>

<template>
  <main>
    <div class="container">
      <BreadCrumb :breadcrumb="yourBreadCrumb"/>
      <div class="row">
        <div class="col-12 col-lg-6 pa-2">
          <v-img
            :aspect-ratio="4/3"
            cover
            src="https://foodhub-nuxt.vercel.app/_nuxt/img/bigFood.fb87b8d.png"></v-img>
        </div>
        <div class="row col-12 col-lg-6 flex-grow-1 pa-2">
          <div class="col-6" v-for="image in resturantImages">
            <img :src="image.image">
          </div>
        </div>
      </div>
      <div class="row flex-column ga-6">
        <div class="d-flex justify-space-between align-center">
          <h1 class="font-weight-black">Starbucks</h1>
          <div class="d-flex">
            <v-rating
              :model-value="5"
              color="amber"
              density="compact"
              size="small"
              half-increments
              readonly
            ></v-rating>
            <div class="text-grey ms-4">
              4.5 (1004)
            </div>
          </div>
        </div>
        <p class="text-grey-darken-1">Coffee, signature roasts, light bite, quick bite, fast foods</p>
        <div class="d-flex align-center text-grey-darken-1">
          <v-icon class="mdi mdi-map-marker mr-2"/>
          <p>The Dorothy Ross Friedman Residence, NY, US - </p>
          <RouterLink to="/FoodMenu" class="text-decoration-underline text-grey-darken-2">Show Map</RouterLink>
        </div>
        <div class="d-flex align-center">
          <v-icon class="mdi mdi-clock-outline mr-2 text-grey-darken-1"/>
          <p class="text-grey-darken-1">
            <span class="text-pink-darken-1">Open Now</span>
            -  Sun - Mon: 9am - 10pm
          </p>
        </div>
        <div class="d-flex align-center">
          <v-icon class="mdi mdi-earth mr-2 text-grey-darken-1"/>
          <RouterLink to="/FoodMenu" class="text-grey-darken-1">www.starbucks.com</RouterLink>
        </div>
      </div>
      <div>
        <v-button>dawar</v-button>
        <v-tabs
          v-model="tab"
          align-tabs="start"
        >
          <v-tab :value="1">Order Online</v-tab>
          <v-tab :value="2">Book a Table</v-tab>
          <v-tab :value="3">Reviews</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item :value="1">
            <div class="row mt-6">
              <div class="d-flex flex-column pr-10 col-3">
                <RouterLink :to="order.to" v-for="(order, index) in orders" :key="index" class="text-grey-darken-2 mb-6 ">{{ order.text }}</RouterLink>
              </div>
              <div class="d-flex flex-column col-9">
                <h2>Recommmended</h2>
                <InfoCardJustify  v-for="item in 4"/>
              </div>
            </div>
          </v-window-item>
          <v-window-item :value="2">
            <div class="row mt-6">
              <div class="row col-12 col-lg-6 align-self-start">
                <v-autocomplete
                  class="col-12 col-md-6 col-lg-6"
                  variant="outlined"
                  label="Select Date"
                  :items="items"
                  color="pink-darken-1"
                  required
                ></v-autocomplete>
                <v-autocomplete
                  class="col-12 col-md-6 col-lg-6"
                  variant="outlined"
                  label="Select Date"
                  :items="items"
                  color="pink-darken-1"
                  required
                ></v-autocomplete>
                <v-text-field label="First name" variant="outlined" color="pink-darken-1" class="col-12 col-md-6 col-lg-6"></v-text-field>
                <v-text-field label="Last name" variant="outlined" color="pink-darken-1" class="col-12 col-md-6 col-lg-6"></v-text-field>
                <v-text-field label="Email" variant="outlined" color="pink-darken-1" class="col-12 col-md-6 col-lg-6"></v-text-field>
                <v-text-field label="Phone" variant="outlined" color="pink-darken-1" class="col-12 col-md-6 col-lg-6"></v-text-field>
                <v-btn type="submit" color="pink-darken-1" >Book</v-btn>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <img src="https://foodhub-nuxt.vercel.app/_nuxt/img/download-app.c757568.png">
              </div>
            </div>
          </v-window-item>
          <v-window-item :value="3">
            <div class="d-flex mt-6">
              <div class="col-12 col-md-6 col-lg-6 d-flex flex-column ga-6">
                <div v-for="(post,index) in posts" :key="index">
                    <Post
                      :avatarSrc="post.avatarSrc"
                      :imageSrc="post.imageSrc"
                      :name="post.name"
                    />
                    <div v-if="index===0">
                      <div v-for="comment in comments">
                        <Comment
                          :avatarSrc="comment.avatarSrc"
                          :name="comment.name"
                          :text="comment.text"
                        />
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <img src="https://foodhub-nuxt.vercel.app/_nuxt/img/download-app.c757568.png">
              </div>
            </div>
          </v-window-item>
        </v-window>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

img{
  width: 100%
}
</style>