<script setup lang="ts">
  import BreadCrumb from '@/components/BreadCrumb.vue';
  import InfoCardJustify from '@/components/InfoCardJustify.vue';
  import Post from '@/components/Post.vue';
  import Comment from '@/components/Comment.vue';

  import { ref,onMounted } from 'vue';
  import { useProductStore } from '@/stores/products';

  const { orders,filter,productDisplay,filterProducts } = useProductStore();

  onMounted(()=>{
    filter('DPB Special Combos')
  })

  interface BreadCrumb {
    text:string;
    to?:string;
    active?:boolean;
  }
  const yourBreadCrumb: BreadCrumb[] = [
    {text:'Home',to:'/'},
    {text:'New York',to:'/'},
    {text:'Resturtant',active:true},
  ]

  interface ResturantImage {
    image:string;
  }
  const resturantImages: ResturantImage[]= [
    {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/foodOne.f29cb9f.png'},
    {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/foodTwo.3b74f91.png'},
    {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/foodThree.fd71db5.png'},
    {image:'https://foodhub-nuxt.vercel.app/_nuxt/img/foodFour.e242457.png'},
]

  const tab = ref<string | null>(null);

  const items:string[] =['Foo','Bar','Fizz','Buzz'];

  interface Post{
    avatarSrc:string;
    imageSrc: string[];
    name: string;
  }
  const posts = [
    {avatarSrc:'https://foodhub-nuxt.vercel.app/_nuxt/img/8.38098d6.png',imageSrc:['https://foodhub-nuxt.vercel.app/_nuxt/img/foodFive.63a95c3.png','https://foodhub-nuxt.vercel.app/_nuxt/img/foodSix.d1a6e1c.png'],name:'Abriella Bond'},
    {avatarSrc:'https://foodhub-nuxt.vercel.app/_nuxt/img/6.9bc51a4.png',imageSrc:[],name:'Abriella Bond'},
    {avatarSrc:'	https://foodhub-nuxt.vercel.app/_nuxt/img/9.19544e8.jpg',imageSrc:[],name:'Abriella Bond'},
  ]

  interface Comment {
    avatarSrc: string;
    name: string;
    text: string;
  }
  const comments = [
    {avatarSrc:'https://foodhub-nuxt.vercel.app/_nuxt/img/6.9bc51a4.png',name:'Emmet McDermott',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti asperiores quo provident pariatur iste necessitatibus.'},
    {avatarSrc:'https://foodhub-nuxt.vercel.app/_nuxt/img/7.7edf59d.png',name:'Emmet McDermott',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti asperiores quo provident pariatur iste necessitatibus.'},
  ]

  const cateDrawer = ref(false);
  const toggleCateDrawer = () :void=>{
    cateDrawer.value = !cateDrawer.value
  };
  

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
        <v-tabs
          v-model="tab"
          align-tabs="start"
          color="pink-darken-1"
        >
          <v-tab :value="1">Order Online</v-tab>
          <v-tab :value="2">Book a Table</v-tab>
          <v-tab :value="3">Reviews</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item :value="1">
            <div class="mobile">
              <v-btn color="pink-darken-1 mt-6" @click="toggleCateDrawer">
                <v-icon class="mdi mdi-menu"/>Categories
              </v-btn>
              <v-layout>
                <div class="side-menu" v-show="cateDrawer">
                  <div class="drawer-bg" @click="toggleCateDrawer">
                      <div @click.stop>
                          <v-navigation-drawer v-model="cateDrawer">
                            <div class="d-flex flex-row-reverse">
                              <v-btn variant="plain" append-icon="mdi mdi-close" class="pa-4" @click="toggleCateDrawer"/>
                            </div>
                            <div class="d-flex flex-column ga-4 pa-6">
                              <p 
                                v-for="(order, index) in orders" 
                                :key="index" 
                                class="text-grey-darken-2 mb-6"
                                @click="filter(order.text)"
                              >{{ order.text }}({{ order.sum }})</p>
                            </div>
                          </v-navigation-drawer>
                      </div>
                  </div>
                </div>
              </v-layout>
            </div>
            <div class="row mt-6">
              <div class="d-flex flex-column pr-10 col-3 desktop">
                <p  
                  v-for="(order, index) in orders" 
                  :key="index" 
                  class="text-grey-darken-2 mb-6"
                  @click="filter(order.text)"
                >{{ order.text }}({{ order.sum }})</p>
              </div>
              <div class="d-flex flex-column col-12 col-md-9">
                <h2>Recommmended</h2>
                <InfoCardJustify  
                  v-for="product in filterProducts"
                  :key="product.id"
                  :id="product.id"
                  :title="product.title"
                  :imageSrc="product.image"
                  :quantity="product.quantity"
                />
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
            <div class="row mt-6">
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
    background-color: rgba(0, 0, 0, 0.2);
    min-height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9999;
}
</style>