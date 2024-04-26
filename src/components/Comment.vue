<script setup lang="ts">
import { defineProps } from 'vue';
    
    const props = defineProps({
        avatarSrc:String,
        name:String,
        text:String,
    })
</script>

<template>
    <div class="comment d-flex flex-column ga-3 justify-start mt-4">
        <div class="d-flex col-12 ga-4">
            <v-avatar size="30">
                <v-img :src="avatarSrc"></v-img>
            </v-avatar>
            <h5 class="font-weight-bold">{{ name }}</h5>
        </div>
        <p class="text-grey ml-2">{{ text }}</p>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>