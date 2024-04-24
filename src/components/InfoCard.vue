<template>
    <div>
        <v-card class="mx-auto my-12 " max-width="374" variant="flat">
            <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            cover></v-img>
            <div class="d-flex justify-space-between align-center">
                <v-card-title>Starbucks</v-card-title>
                <div >
                    <v-icon class="mdi mdi-star" color="amber"></v-icon>
                    <span class="text-black">4.5</span>
                    <span class="text-grey">/5</span>
                </div>
            </div>
            <v-card-text>
            <v-row align="center" class="mx-0">
                <p class="grey--text"><span class="primary--text f-600">$20</span> • Cofee, set menu • 15 - 20 min </p>
            </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>