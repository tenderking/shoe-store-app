<template>
  <div
    v-if="product"
    id="page-wrap"
  >
    <div id="img-wrap">
      <img :src="product.imageUrl">
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">
        ${{ product.price }}
      </h3>
      <p>Average rating: {{ product.averageRating }}</p>
      <button
        v-if="!showSucessMessage"
        id="add-to-cart"
        @click="addToCart"
      >
        Add to Cart
      </button>
      <button
        v-if="showSuccessMessage"
        id="add-to-cart"
        class="green-btn"
      >
        Successfully added item to cart!
      </button>
      <h4>Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <NotFoundPage v-else />
</template>

<script>
import axiosInstance from "../axios";


import NotFoundPage from "./NotFoundPage.vue";

export default {
  name: "ProductDetailPage",
  components: {
    NotFoundPage
  },
  data() {
    return {
      product: {},
      showSuccessMessage: false
    };
  },

  async created() {
    const result = await axiosInstance.get(`/api/products/${this.$route.params.id}`).then((response) => {
      console.log(response);
      return response.data;
    });
    console.log(result);
    const product = result.data;
    this.product = product;
  },
  methods: {
    async addToCart() {
      const user = localStorage.getItem("userId");
      const token = localStorage.getItem("authToken");
      await axiosInstance.post(
        `api/users/${user}/cart`,
        {
            productId: this.$route.params.id
        },
        {
          headers: {
            "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        }
        }
      );
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.$router.push("/products");
      }, 1500);
      console.log("added item to cart");
    }
  }
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
