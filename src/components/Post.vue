<script setup lang="ts">
    import type { PropType } from 'vue';
    import { defineProps } from 'vue';
    
    
    const props = defineProps({
        avatarSrc:String,
        imageSrc:Array as PropType<string[]>,
        name:String,
    })
</script>

<template>
    <div class="post d-flex flex-column ga-3 justify-start">
        <div class="d-flex col-12 ga-4">
            <v-avatar size="40">
                <v-img :src="avatarSrc"></v-img>
            </v-avatar>
            <div>
                <h5 class="font-weight-bold">{{ name }}</h5>
                <p class="text-grey-darken-1">2 Reviews,  9 Followers</p>
            </div>
        </div>
        <div class="d-flex col-12">
            <v-rating
                :model-value="4.5"
                color="amber"
                density="compact"
                size="small"
                half-increments
                readonly
                ></v-rating>
                <div class="ms-4">4.0
                    <span class="text-grey">3 Days Ago</span>
                </div>
        </div>
        <p class="text-grey ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</p>
        <div class="d-flex col-12 ga-4">
            <img v-for="(src,index) in imageSrc" :key="index"
            :src="src" class="col-6">
        </div>
        <p class="text-grey ml-2">4 Likes,  2 Comments</p>
        <div class="d-flex col-12">
            <v-btn prepend-icon="mdi-thumb-up-outline" variant="text">Like</v-btn>
            <v-btn prepend-icon="mdi-comment-text-outline" variant="text">Comment</v-btn>
        </div>
        <v-divider/>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>