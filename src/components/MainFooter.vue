<script setup lang="ts">

interface Location {
    loc: string;
    places: string;
}

const locations:Location[] = [
    {loc:'Newport',places:' (26 places)'},
    {loc:'Brooklyn',places:' (14 places)'},
    {loc:'Chinatown',places:' (10 places)'},
    {loc:'Chelsea',places:' (20 places)'},
    {loc:'Coney Island',places:' (6 places)'},
]

const abouts:string[] = [
    'Careers',
    'Our Stores',
    'Our Cares',
    'Terms & Conditions',
    'Privacy Policy',
];
const cares:string[] = [
    'Help Center',
    'How to Buy',
    'Track Your Order',
    'Corporate & Bulk Purchasing',
    'Returns & Refunds',
]
const icons:string[] = [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
        'mdi-youtube',
        'mdi-google',
    ];

</script>

<template>
    <div class="container py-15">
        <h2 class="mb-6 font-weight-black">Popular Localities In & Around New York</h2>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="item in 4" >
                <div class="mb-2" v-for="location in locations">
                    <RouterLink to="/ResturantTwoColumn">
                        <span class="text-black">{{location.loc}}</span>
                        <span class="text-grey-lighten-1">{{location.places}}</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-grey-lighten-5">
        <div class="container py-15">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column ga-5">
                    <v-avatar size="48">
                        <v-img
                        alt="John"
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        ></v-img>
                    </v-avatar>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</h5>
                    <div class="d-flex ga-3">
                        <img style="width: 120px;" src="../assets/img/google-play.png" alt="google-play">
                        <img style="width: 120px;" src="../assets/img/app-store.png" alt="app-store">
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <h2 class="mb-6 font-weight-medium">About Us</h2>
                    <div class="d-flex flex-column ga-2">
                        <RouterLink to="" v-for="about in abouts" class="text-grey-darken-2" >{{about}}</RouterLink>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <h2 class="mb-6 font-weight-medium">Customer Care</h2>
                    <div class="d-flex flex-column ga-2">
                        <RouterLink to="" v-for="care in cares" class="text-grey-darken-2">{{ care }}</RouterLink>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <h2 class="mb-6 font-weight-medium">Contact Us</h2>
                    <div class="d-flex flex-column text-grey-darken-2">
                        <p>Jalalabad 20/1, Shah Farid Road Sylhet, Bangladesh.<br>
                            Email: uilib@gmail.com Phone: +880 1123 456 780
                        </p>
                        <p>Sylhet, Bangladesh.</p>
                        <p>Email: uilib@gmail.com</p>
                        <p>Phone: +880 1123 456 780</p>
                    </div>
                    <div>
                    <div class="d-flex ga-2 mt-5">
                        <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            :icon="icon"
                            class="social-icon mx-1"
                            variant="text"
                            size="x-small"
                        ></v-btn>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.social-icon {
    background-color: #0f3460 ; 
    color: white;
    border-radius: 50%;
}

</style>