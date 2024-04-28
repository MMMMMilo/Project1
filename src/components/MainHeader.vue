<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';

const { cartList,deleteCart,limitTitle,count } = useCartStore();

interface NavItem {
    title: string;
    to: string;
}

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

interface CollapseStatus {
    dashboards: boolean;
    resturants: boolean;
};
const collapseStatus = ref<CollapseStatus>({
    dashboards: false,
    resturants: false,
});

type CollapseKey = keyof CollapseStatus;
const toggleCollapse = (collapseName: CollapseKey) => {
    collapseStatus.value[collapseName] = !collapseStatus.value[collapseName];
};

interface DrawerStatus {
    sideNav:Boolean,
    shoppingCart:Boolean,
}
const drawerStatus = ref<DrawerStatus>({
    sideNav:false,
    shoppingCart:false,
});

type DrawerKey = keyof DrawerStatus;
const toggleDrawer = (drawerName: DrawerKey) => {
    drawerStatus.value[drawerName] = !drawerStatus.value[drawerName]
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
                        <v-icon class="mdi mdi-cart-outline" @click="toggleDrawer('shoppingCart')"></v-icon>
                        <span>({{ useCartStore().count }})</span>
                    </v-btn>
                    <v-app-bar-nav-icon class="mx-2" @click="toggleDrawer('sideNav')"></v-app-bar-nav-icon>
                </div>
            </v-container>
        </v-toolbar>
        <div class="side-nav" v-show="drawerStatus.sideNav">
            <div class="drawer-bg" @click="toggleDrawer('sideNav')">
                <div @click.stop>
                    <v-navigation-drawer v-model="drawerStatus.sideNav" disable-resize-watcher >
                        <div class="d-flex flex-row-reverse">
                            <v-btn variant="plain" append-icon="mdi mdi-close" class="pa-4" @click="toggleDrawer('sideNav')"/>
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
        <div class="side-nav" v-show="drawerStatus.shoppingCart">
            <div class="drawer-bg" @click="toggleDrawer('shoppingCart')">
                <div @click.stop>
                    <v-navigation-drawer v-model="drawerStatus.shoppingCart" absolute disable-resize-watcher location="end">
                        <div class="d-flex flex-row-reverse">
                            <v-btn variant="plain" append-icon="mdi mdi-close" class="pa-4" @click=" toggleDrawer('shoppingCart')"/>
                        </div>
                        <v-container class="d-flex flex-column ga-4 pa-6">
                            <v-row class="align-center" v-for="item in cartList" :key="item.id">
                                <div class="col-5">
                                    <span>{{ item.id }}</span>
                                    <v-img :src="item.image" aspect-ratio="1" cover/>
                                </div>
                                <div class="col-5">
                                    <h6>{{ limitTitle(item.title) }}</h6>
                                    <span>Number:{{ item.quantity }}</span>
                                </div>
                                <v-icon icon="mdi mdi-close" class="col-2" @click=" deleteCart(item.id)"/>
                            </v-row>
                        </v-container>
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
        background-color: rgba(0, 0, 0, 0.2);
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