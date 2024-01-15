<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';
import ShoppingCartItem from './ShoppingCartItem.vue';

export default {
    components: { 
        ShoppingCartItem 
    },
    computed: {
        ...mapState(useCartStore, ["details"])
    }
}
</script>

<template>
    <v-card>
        <v-card-title>
            Produtos adicionados ao carrinho
        </v-card-title>

        <v-card-text>
            <v-table v-if="details.length > 0">
                <thead>
                <tr>
                    <th class="text-left">Produto</th>
                    <th class="text-center">Quantidade</th>
                    <th>Preço</th>
                    <th class="text-left">Subtotal</th>
                    <th><span class="d-sr-only">Remover</span></th>
                </tr>
                </thead>
                <tbody>
                    <ShoppingCartItem
                        v-for="detail in details" 
                        :key="detail.product.id"
                        :detail="detail" 
                    />
                </tbody>
            </v-table>
            <p v-else>
                Ainda não há items adicionados ao carrinho de compras.
                Então <router-link to="/">clique aqui</router-link> para ver os produtos disponíveis.
            </p>
        </v-card-text>
    </v-card>
</template>