<template>
    <v-toolbar dense class="pa-2" color="transparent" flat>
        <v-container fluid class="px-0 text-white">
            <div class="d-flex align-center">
                <div class="px-5">
                    <RouterLink to="/">
                        <v-avatar size="40">
                            <v-img alt="logo" src="https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png"></v-img>
                        </v-avatar>
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