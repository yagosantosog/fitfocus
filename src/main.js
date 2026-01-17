import { createApp } from "vue";
import "./fanta.css";
import { initTheme } from "./theme/themeManager.js";
import App from "./App.vue";

initTheme();
createApp(App).mount("#app");
