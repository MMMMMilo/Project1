<template>
    <v-container>
        <h2>Popular Localities In & Around New York</h2>
        <v-row>
            <div v-for="item in 4">
                <div class="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-12" v-for="item in 5">
                    <RouterLink to="/ResturantTwoColumn">
                        Newport
                        <span>(26 places)</span>
                    </RouterLink>
                </div>
            </div>
        </v-row>
    </v-container>
    <v-container>
        <v-row>
            <div class="col-lg-3 col-12">
                <v-avatar size="48">
                    <v-img
                    alt="John"
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    ></v-img>
                </v-avatar>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</h5>
                <img src="../assets/img/google-play.png" alt="google-play">
                <img src="../assets/img/app-store.png" alt="app-store">
            </div>
            <div class="col-md-6 col-lg-3 col-12">
                <h2>Customer Care</h2>
                <div class="d-flex flex-column">
                    <RouterLink to="" v-for="item in 5">Our Stores</RouterLink>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 col-12">
                <h2>About Us</h2>
                <div class="d-flex flex-column">
                    <RouterLink to="" v-for="item in 5">Help Center</RouterLink>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 col-12">
                <h2>Contact Us</h2>
                <div class="d-flex flex-column">
                    <p>Jalalabad 20/1, Shah Farid Road Sylhet, Bangladesh.<br>
                        Email: uilib@gmail.com Phone: +880 1123 456 780
                    </p>
                    <p>Sylhet, Bangladesh.</p>
                    <p>Email: uilib@gmail.com</p>
                    <p>Phone: +880 1123 456 780</p>
                </div>
            </div>
        </v-row>
    </v-container>
</template>


<script setup lang="ts">

</script>