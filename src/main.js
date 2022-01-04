import { createApp } from "vue";
import App from "./app-fake-data/App.vue";
import router from "./app-fake-data/router";

createApp(App)
  .use(router)
  .mount("#app");
