import { createApp } from 'vue' 
import './index.css'
import App from './App.vue'
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(router.paths);
app.use(store);
app.mount("#app");