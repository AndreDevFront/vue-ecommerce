<script lang="ts">
import { mapState } from 'pinia';
import { useProductsStore } from '../stores/products';
import ProductCard from './ProductCard.vue';

export default {
    components: {
        ProductCard
    },
    computed: {
        ...mapState(useProductsStore, ['products', 'loading'])
    }
}
</script>

<template>
    <div v-if="loading" class="d-flex justify-center align-center h-100">
        <v-progress-circular indeterminate :size="50" />
    </div>

    <v-row v-else>
        <v-col v-for="p in products" :key="p.id" cols="12" sm="6" md="4" lg="3">
            <ProductCard :product="p" />
        </v-col>
    </v-row>
</template>