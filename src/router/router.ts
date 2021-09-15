import VueRouter from "vue-router";

const router = new VueRouter({
  mode: "history",
  base: "loaa",
  routes: [
    {
      path: "/src/pages/home",
      component: () => import("../pages/home.vue"),
      name: "home",
    },
    {
      path: "/src/pages/character-search",
      component: () => import("../pages/character-search.vue"),
      name: "character-search",
    },
    {
      path: "/src/pages/dungeon-counter",
      component: () => import("../pages/dungeon-counter.vue"),
      name: "dungeon-counter",
    },
  ],
});

export default router;
