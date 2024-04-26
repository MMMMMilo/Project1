<template>
    <v-card
        class="my-4 d-flex"
        max-height="150"
        flat
        >
        <v-img
        max-width="150"
        max-height="150"
        aspect-ratio="1"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        cover
        ></v-img>
        
        <div class="d-flex flex-column px-3 py-1 ga-2 flex-grow-1">
            <p class="">Cafe Badilico</p>
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
                <div class="text-grey ms-4">
                (57)
                </div>
            </v-row>
            <div>
                <span class="text-subtitle-1">$25</span>
                <span class="text-subtitle-1">$22.5</span>
                <span class="text-subtitle-1">10% off</span>
                <p>(4 Pcs mutton in chicken keema gravy)</p>
            </div>
        </div>

        <v-card-actions class="flex-grow-1">
            <v-btn
                color="pink-darken-1"
                text="Add +"
                block
                border
            ></v-btn>
        </v-card-actions>
    </v-card>
</template>