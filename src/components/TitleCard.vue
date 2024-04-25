<script setup lang="ts">
    import { defineProps } from 'vue';

    const props = defineProps({
        imageSrc:String,
        title:String,
    });
</script>

<template>
    <v-card
        class="mx-auto rounded-lg"
        max-width="344"
    >
        <v-img
        height="200px"
        :src="imageSrc"
        cover
        ></v-img>

        <v-card-title>{{title}}</v-card-title>

    </v-card>
</template>
    
