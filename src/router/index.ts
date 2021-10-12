import { createRouter, createWebHistory } from "vue-router";

// 路由信息
const routes = [
  {
    path: "/",
    redirect: "/entry",
  },
  {
    path: "/entry",
    name: "entry",
    component: () => import("../views/entry/index.vue"),
  },
  {
    path: "/earth",
    name: "earth",
    component: () => import("../views/earth/index.vue"),
  },
  {
    path: "/solarSystem",
    name: "solarSystem",
    component: () => import("../views/earth/index.vue"),
  },
];

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
