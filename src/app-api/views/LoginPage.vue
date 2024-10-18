<template>
  <div id="page-wrap">
    <h1>Login</h1>
    <form @submit.prevent="login"> 
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
        >
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
        >
      </div>
      <button type="submit">
        Login
      </button>
      <p
        v-if="errorMessage"
        class="error-message"
      >
        {{ errorMessage }}
      </p>
    </form>
    <router-link to="/signup">
      Don't have an account? Sign up
    </router-link>
  </div>
</template>

<script>
import axiosInstance from "../axios"; 

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        this.errorMessage = ""; // Clear any previous error messages
        const response = await axiosInstance.post("/login", {
          email: this.email,
          password: this.password,
        });

        // Assuming your backend sends the JWT in the response
        const token = response.data.data.token; 
        const userId= response.data.data.userId;

        // Store the token (e.g., in localStorage)
        localStorage.setItem("authToken", token);
        localStorage.setItem("userId",userId);
        // Redirect to the products page or a protected route
        this.$router.push("/products"); 

      } catch (error) {
        if (error.response) {
          this.errorMessage = error.response.data.data.message; 
        } else {
          this.errorMessage = "An error occurred. Please try again later.";
        }
      }
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
#page-wrap {
  
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 32px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button[type="submit"] {
  background-color: black; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}

.error-message {
  color: red;
  margin-top: 8px;
}
</style>