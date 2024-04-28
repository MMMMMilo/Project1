<script setup lang="ts">
    import { defineProps } from 'vue';
    import { computed } from 'vue';

    interface Props {
        imageSrc: string;
        title: string;
    }
    const props = defineProps<Props>();

    const limitTitle = computed(()=>{
        const maxLengh = 18;
        if(props.title.length > maxLengh){
            return props.title.substring(0,maxLengh-3)+'...';
        }
        return props.title;
    })
</script>

<template>
    <div class="card-wrap rounded-lg my-2">
        <v-card class="mx-auto" variant="flat">
            <v-img
            height="250"
            :src="imageSrc"
            cover></v-img>
            <v-card-text class="pa-4">
                <div class="d-flex justify-space-between align-center">
                    <v-card-title class="font-weight-medium">{{limitTitle}}</v-card-title>
                    <div >
                        <v-icon class="mdi mdi-star" color="amber"></v-icon>
                        <span class="text-black">4.5</span>
                        <span class="text-grey">/5</span>
                    </div>
                </div>
            <v-row align="center" class="mx-0">
                <p class="grey--text"><span class="primary--text text-pink-darken-1">$20</span> • Cofee, set menu • 15 - 20 min </p>
            </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<style lang="scss" scoped>
    .card-wrap{
        border: 1px solid #eee;
    }
</style>
