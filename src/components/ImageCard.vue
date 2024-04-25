<script setup lang="ts">
    import { defineProps } from 'vue';

    const props = defineProps({
        imageSrc:String,
        title:String,
    });

</script>

<template>
    <v-card class="rounded-lg">
    <v-img
        class="align-end text-white"
        :src="imageSrc"
        aspect-ratio="3/4"
        cover
    >
        <v-card-title>{{title}}</v-card-title>
        <v-card-text>
            30 Places
            <v-icon class="mdi mdi-chevron-right"></v-icon>
        </v-card-text>
    </v-img>
    </v-card>
</template>
