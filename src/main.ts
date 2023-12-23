import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/routes/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import disableDevtool from'disable-devtool';

// https://github.com/theajack/disable-devtool/blob/master/README.cn.md
disableDevtool({url: "https://www.baidu.com/",  timeOutUrl: "https://www.baidu.com/"});

const app = createApp(App);
app.use(router);
app.use(ElementPlus, {
    locale: zhCn,
});
app.mount("#app");
