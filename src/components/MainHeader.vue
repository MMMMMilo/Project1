<template>
    <v-toolbar dense class="pa-2 bg-white fixed" flat>
        <v-container fluid class="px-0">
            <div class="d-flex align-center">
                <div class="px-5">
                    <RouterLink to="/">
                        <v-avatar size="40">
                            <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                        </v-avatar>
                    </RouterLink>
                </div>
                
                <div class="location d-flex align-center">
                    <span class="mdi mdi-map-marker pr-2">New York</span>
                    <v-btn variant="text" class="px-2">
                        <v-icon class="mdi mdi-crosshairs-gps">Locate Me</v-icon>
                    </v-btn>
                    <input type="text" placeholder="Search for restaurant" class="mx-2">
                    <RouterLink to="/RestaurantTwoColumn">
                        <v-icon class="mdi mdi-magnify"></v-icon>
                    </RouterLink>
                </div>
                
                <v-spacer></v-spacer>
                
                <v-btn class="mx-2">
                    <v-icon class="mdi mdi-account-circle-outline"></v-icon>
                    <span>Account</span>
                </v-btn>
                
                <v-btn icon class="mx-2">
                    <v-icon class="mdi mdi-cart-outline"></v-icon>
                    <span>(8)</span>
                </v-btn>
                
                <v-app-bar-nav-icon class="mx-2"></v-app-bar-nav-icon>
            </div>
        </v-container>
    </v-toolbar>
</template>




<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

    .nav-bar{
        position: fixed;
        z-index: 999;
    }
    .location{
        border: 1px solid #eee;
    }
</style>