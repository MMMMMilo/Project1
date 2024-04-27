<template>
    <v-card class="my-4" flat>
        <v-row>
            <v-col cols="12" sm="4">
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                aspect-ratio="1"
                cover
            ></v-img>
            </v-col>
            <v-col cols="12" sm="6" class="d-flex flex-column px-3 py-1">
                <p>Cafe Badilico</p>
                <v-chip class="align-self-start text-grey-darken-3" color="grey">MUST TRY</v-chip>
                <v-row align="center" class="mx-1">
                    <v-rating
                    :model-value="4.5"
                    color="amber"
                    density="compact"
                    size="small"
                    half-increments
                    readonly
                    ></v-rating>
                    <div class="text-grey ms-4">(57)</div>
                </v-row>
                <div>
                    <span class="text-subtitle-1">$25</span>
                    <span class="text-subtitle-1">$22.5</span>
                    <span class="text-subtitle-1">10% off</span>
                    <p>(4 Pcs mutton in chicken keema gravy)</p>
                </div>
            </v-col>
            <v-col cols="12" sm="2" class="d-flex align-items-start justify-content-center">
                <v-card-actions>
                    <v-btn
                        color="pink-darken-1"
                        text="Add +"
                        block
                        border
                    ></v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
    .direction{
        flex-direction: row;
    }
@media screen and (max-width: $md){
    .direction{
        flex-direction: column;
    }
}
</style>