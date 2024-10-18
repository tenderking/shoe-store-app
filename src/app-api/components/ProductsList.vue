<template>
  <div v-if="products.length > 0">
    <ProductsListItem
      v-for="product in products"
      :key="product._id"
      :product="product"
      @remove-from-cart="$emit('remove-from-cart', product._id)"
    />
  </div>
  <p v-else>
    You haven't added anything to your cart yet!
  </p>
</template>

<script>
import ProductsListItem from "./ProductsListItem.vue";

export default {
  name: "ProductsList",
  components: {
    ProductsListItem
  },
  props: ["products"],
  emits: ["remove-from-cart"]
};
</script>
