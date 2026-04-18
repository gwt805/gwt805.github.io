import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import "element-plus/dist/index.css";
import disableDevtool from'disable-devtool';
import 'element-plus/theme-chalk/dark/css-vars.css';

disableDevtool({url: "https://www.baidu.com/",  timeOutUrl: "https://www.baidu.com/"});

const app = createApp(App);
app.mount("#app");
