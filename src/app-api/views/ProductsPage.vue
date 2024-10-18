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
    const result = await axiosInstance.get("/api/products").then((response) => {
      console.log(response);
      return response.data
    });
    const products =await result.data;
    this.products = products;
  }
};
</script>
