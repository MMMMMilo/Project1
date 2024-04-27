<!-- <script setup lang="ts">
    import { ref } from 'vue';
    const NavDrawer = ref(false);
    const toggleNavDrawer = ()=>{
        NavDrawer.value = !NavDrawer.value
    };

    const dashboards= [
        {title:'Review',to:''},
        {title:'Photos',to:''},
        {title:'Order List',to:''},
        {title:'Order History',to:''},
        {title:'Followers',to:''},
        {title:'Bookmarks',to:''},
    ];
    const resturants = [
        {title:'Food Menu',to:'/FoodMenu'},
        {title:'Resturant Two Column',to:'/ResturantTwoColumn'},
        {title:'Search Resturant',to:''},
    ];

    const collapseStatus = ref({
        dashboards: true,
        resturants: true,
    });

        // Define the valid keys for collapseStatus
        // type CollapseKey = keyof typeof collapseStatus;

        // const toggleCollapse = (collapseName: CollapseKey) => {
        //     collapseStatus[collapseName] = !collapseStatus[collapseName];
        // };

    const toggleCollapse = (collapseName) => {
        collapseStatus.value[collapseName] = !collapseStatus.value[collapseName]
        console.log(collapseStatus.value['dashboards']);
    };

    
</script> -->
<script setup lang="ts">
import { ref } from 'vue';

// Define types for the navigation items
interface NavItem {
    title: string;
    to: string;
}

// Setup reactive states
const NavDrawer = ref(false);
const dashboards: NavItem[] = [
    {title: 'Review', to: ''},
    {title: 'Photos', to: ''},
    {title: 'Order List', to: ''},
    {title: 'Order History', to: ''},
    {title: 'Followers', to: ''},
    {title: 'Bookmarks', to: ''},
];
const resturants: NavItem[] = [
    {title: 'Food Menu', to: '/FoodMenu'},
    {title: 'Restaurant Two Column', to: '/RestaurantTwoColumn'},
    {title: 'Search Restaurant', to: ''},
];

// Define a type for collapse states to improve type safety
interface CollapseStatus {
    dashboards: boolean;
    resturants: boolean;
}
const collapseStatus = ref<CollapseStatus>({
    dashboards: false,
    resturants: false,
});

// Function to toggle the navigation drawer
const toggleNavDrawer = () => {
    NavDrawer.value = !NavDrawer.value;
};

// Define the valid keys for collapseStatus dynamically
type CollapseKey = keyof CollapseStatus;

// Function to toggle collapse state for a given key
const toggleCollapse = (collapseName: CollapseKey) => {
    collapseStatus.value[collapseName] = !collapseStatus.value[collapseName];
};
</script>


<template>    
    <v-layout>   
        <v-toolbar 
            density="compact"
            :elevation="4"
            flat
            class="pa-1 bg-white nav-bar" >
            <v-container fluid class="px-0 container">
                <div class="d-flex align-center">
                    <div class="px-5">
                        <RouterLink to="/">
                            <v-avatar size="40">
                                <v-img src="https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png"></v-img>
                            </v-avatar>
                        </RouterLink>
                    </div>
                    <div class="border rounded d-flex align-center ga-4 col-8 text-grey-darken-1 mobile">
                        <span class="mdi mdi-map-marker">New York</span>
                        <v-icon class="mdi mdi-crosshairs-gps"></v-icon>
                        <input type="text" placeholder="Seaech for restaurant" class="flex-grow-1">
                        <v-btn>
                            <v-icon class="mdi mdi-magnify" small/>
                        </v-btn>
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
                    <v-app-bar-nav-icon class="mx-2" @click="toggleNavDrawer"></v-app-bar-nav-icon>
                </div>
            </v-container>
        </v-toolbar>
        <div class="side-nav" v-show="NavDrawer">
            <div class="drawer-bg" @click="toggleNavDrawer">
                <div @click.stop>
                    <v-navigation-drawer v-model="NavDrawer" absolute >
                        <div class="d-flex flex-row-reverse">
                            <v-btn variant="plain" append-icon="mdi mdi-close" class="pa-4" @click=" toggleNavDrawer"/>
                        </div>
                        <div class="d-flex flex-column ga-4 pa-6">
                            <div class="d-flex algin-center ga-4">
                                <v-icon class="mdi mdi-view-dashboard-variant-outline"></v-icon>
                                <h6 class="font-weight-bold" @click="toggleCollapse('dashboards')">Dashboards</h6>
                            </div>
                            <ul v-if="collapseStatus.dashboards">
                                <li v-for="dashboard in dashboards" :key="dashboard.title" >
                                    <RouterLink :to="dashboard.to" class="text-black">{{ dashboard.title }}</RouterLink>
                                </li>
                            </ul>
                            <div class="d-flex algin-center ga-4">
                                <v-icon class="mdi mdi-silverware-fork-knife"></v-icon>
                                <h6 class="font-weight-bold" @click="toggleCollapse('resturants')">Resturant</h6>
                            </div>
                            <ul v-if="collapseStatus.resturants">
                                <li v-for="resturant in resturants" :key="resturant.title" >
                                    <RouterLink :to="resturant.to" class="text-black">{{ resturant.title }}</RouterLink>
                                </li>
                            </ul>
                        </div>
                    </v-navigation-drawer>
                </div>
            </div>
        </div>
    </v-layout>
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
    .search-input{
        padding: 0 !important;
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
    .mobile{
        display: block;
    }
    @media screen and (max-width: $md){
        .mobile{
            display: none !important;
        }
    }
</style>