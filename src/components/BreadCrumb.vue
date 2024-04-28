<script setup lang="ts">
    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';
    
    interface BreadcrumbItem{
        text:string;
        to?:string,
        active?:boolean
    }
    const props = defineProps<{
        breadcrumb:BreadcrumbItem[];
    }>();

</script>

<template>
    <nav class="my-6">
        <ol>
            <li v-for="(crumb,index) in breadcrumb" :key="index" class="breadcrumb-item">
                <span v-if="crumb.active" class="text-medium-emphasis px-4">{{ crumb.text }}</span>
                <RouterLink v-else :to="crumb.to" class="text-decoration-none text-black px-4">{{ crumb.text }}</RouterLink>
            </li>
        </ol>
    </nav>
</template>

<style scoped>
    .breadcrumb-item{
        display:inline-block;
    }
    li+li::before{
        content:'>';
    }
</style>