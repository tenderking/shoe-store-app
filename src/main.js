import { createApp } from "vue";
import { createPinia } from "pinia"
const pinia = createPinia()
// import App from "./app-fake-data/App.vue";
// import router from "./app-fake-data/router";
import App from "./app-api/App.vue";
import router from "./app-api/router";

createApp(App)
.use(pinia)
  .use(router)
  .mount("#app");
