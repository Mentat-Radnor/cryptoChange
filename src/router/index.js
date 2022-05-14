import { createRouter, createWebHistory } from "vue-router";

import Exchange from "@/view/Exchange.vue";

const routes = [{ path: "/", component: Exchange, name: "Home" }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
