<template>
  <div id="nav-bar">
    <router-link
      id="products-link"
      to="/products"
    >
      <h1>FABULOUS FOOTWEAR</h1>
    </router-link>
    <div>
      <router-link
        id="cart-link"
        to="/cart"
      >
        <button>Shopping Cart</button>
      </router-link>
      <button
        v-if="isLoggedIn"
        class="button"
        @click="logout"
      >
        Logout
      </button>
      <router-link
        v-else
        to="/login"
      >
        Login
      </router-link>
    </div>
  </div>
</template>

<script>
  import axiosInstance from "../axios";
export default {

  name: 'NavBar',
  data() {
    return {
      isLoggedIn: localStorage.getItem('userId') !== null, // Initialize isLoggedIn here
    };
  },
   watch: {
    // Watcher to update isLoggedIn when userId in localStorage changes
    '$route.path'() { // Watch for route changes
      this.isLoggedIn = localStorage.getItem('userId') !== null;
    }
  },
  methods: {
    logout() {
      const token = localStorage.getItem('authToken');
      axiosInstance.post('/logout', {
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      localStorage.removeItem('userId');
      localStorage.removeItem('authToken');
      // After logout, redirect to the login page or home page
      this.$router.push('/login'); // Or this.$router.push('/');
    },
  }
};
</script>

<style scoped>
  #nav-bar {
    border-bottom: 1px solid #ddd;
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1rem;;
  }
  #nav-bar div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  #products-link {
    text-align: center;
    display: block;
    color: black;
    font-size: 22px;
    left: 32px;
    top: 16px;
    text-decoration: none;
  }

  #products-link h1 {
      margin: 0;
  }

  #cart-link {
      right: 16px;
    top: 16px;
  }
</style>
