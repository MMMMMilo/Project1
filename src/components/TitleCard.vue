<script setup lang="ts">
    import { defineProps } from 'vue';

    interface Props {
        imageSrc: string;
        title: string;
    }
    const props = defineProps<Props>();
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
    
