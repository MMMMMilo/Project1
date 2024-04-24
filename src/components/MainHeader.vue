<template>
    <v-toolbar density="compact">
        <v-container class="d-flex align-center">
            <v-avatar size="48">
                <v-img
                alt="John"
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                ></v-img>
            </v-avatar>
            <div class="location">
                <span class="mdi mdi-map-marker">New York</span>
                <v-btn variant="text">
                    <v-icon class="mdi mdi-crosshairs-gps">Locate Me</v-icon>
                </v-btn>
                <input type="text" placeholder="Search for restaurant ">
                <RouterLink to="/ResturantTwoColumn">Search</RouterLink>
            </div>
            
            <v-spacer></v-spacer>
            
            <v-btn icon>
                <v-icon class="mdi mdi-account-circle-outline"></v-icon>
                <span>Account</span>
            </v-btn>
            
            <v-btn icon>
                <v-icon class="mdi mdi-cart-outline"></v-icon>
                <span>(8)</span>
            </v-btn>
            
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-container>
    </v-toolbar>
</template>