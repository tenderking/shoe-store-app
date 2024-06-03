<template>
  <div v-if="products.length" >
    <ProductsListItem
      v-for="(product,index) in products"
      v-on:remove-from-cart="store.removeFromCart(index)"
      :key="product.id"
      :product="product"
    />
  </div>
  <p v-else>You haven't added anything to your cart yet!</p>
</template>

<script setup>
import ProductsListItem from "./ProductsListItem.vue";

import { useCartStore } from '../store/cartStore'
import { computed } from "vue";

const store = useCartStore();
const products = computed(() => store.cartItems);
</script>
