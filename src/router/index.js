import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "@/layouts/MainLayout.vue";

import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          name: "Home",
          path: "/",
          component: HomeView,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
