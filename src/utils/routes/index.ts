import { type RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import index from "@/components/index.vue";
import hotnet from "@/components/hotnet.vue";
import websites from "@/components/websites.vue";
import empty from "@/components/empty.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/index",
    },
    {
        path: "/index",
        name: "index",
        component: index,
    },
    {
        path: "/hotnet",
        name: "hotnet",
        component: hotnet,
    },
    {
        path: "/websites",
        name: "websites",
        component: websites,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: empty },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
