<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img v-bind:src="product.imageUrl" />
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">${{ product.price }}</h3>
      <p>Average rating: {{ product.averageRating }}</p>
      <button v-if="!showSucessMessage" id="add-to-cart" v-on:click="addToCart">
        Add to Cart
      </button>
      <button v-if="showSuccessMessage" id="add-to-cart" class="green-btn">
        Successfully added item to cart!
      </button>
      <h4>Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <NotFoundPage v-else />
</template>

<script setup>
import { computed,ref } from 'vue';
import { products } from '../fake-data';
import NotFoundPage from "./NotFoundPage.vue";
import { useRoute } from 'vue-router'
import { useCartStore } from '../store/cartStore'
const route = useRoute()
const store = useCartStore();

const product = computed(() => {
  return products.find((product) => product.id === route.params.id);
});
let showSuccessMessage = ref(false);

const addToCart = () => {
  // Add logic to add product to cart
  store.addToCart(route.params.id);
  showSuccessMessage.value = true;
  setTimeout(() => {
    showSuccessMessage.value = false;
  }, 2000);
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
.green-btn {
  background-color: green;
}
</style>
