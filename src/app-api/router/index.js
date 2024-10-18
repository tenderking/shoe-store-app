import CartPage from "../views/CartPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/products",
    name: "ProductsPage",
    component: ProductsPage
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: ProductDetailPage
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage
  },
  {
    path: "/",
    redirect: "/products"
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../views/LoginPage.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('userId') !== null;
  if (to.name === 'Cart' && !isLoggedIn) {
    next('/login'); // Redirect to login if not logged in
  } else {
    next(); // Otherwise, allow the navigation
  }
});


export default router;
