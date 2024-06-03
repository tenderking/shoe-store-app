<template>
  <div id="page-wrap">
    <ProductsGrid :products="products" />
  </div>
</template>

<script>
import ProductsGrid from "../components/ProductsGrid.vue";
import axiosInstance from '../axios';

export default {
  name: "ProductsPage",
  components: {
    ProductsGrid
  },
  data() {
    return {
      products: []
    };
  },
  async created() {
    const result = await axiosInstance.get("/api/products");
    const products = result.data;
    this.products = products;
  }
};
</script>
