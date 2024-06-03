import { defineStore, acceptHMRUpdate } from "pinia"
import { products } from "../fake-data"


export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cartItems: [],
    products,
  }),
  getters: {
    totalItems() {
      return this.cartItems.length
    },
    totalPrice() {
      return this.cartItems.reduce((acc, item) => acc + Number(item.price), 0)
    },
  },
  actions: {
    addToCart(id) {
        const item = products.find((item) => item.id === id)
        if (item) {
            console.log("item", item)
            this.cartItems.push(item)
        }
    },
    removeFromCart(index) {
        this.cartItems.splice(index, 1)
    },
  },
})

    if (import.meta.hot) {
      import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
    }