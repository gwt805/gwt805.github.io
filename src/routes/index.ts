import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import index from "@/components/index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: index
    }
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;