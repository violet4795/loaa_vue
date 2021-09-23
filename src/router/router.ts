import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const Foo = { template: "<div>foo</div>" };
const router = new VueRouter({
  mode: "history",
  base: "loaa",
  routes: [
    {
      path: "/home",
      component: () => import("../pages/home.vue"),
      name: "home",
    },
    {
      path: "/character-search",
      component: () => import("../pages/character-search.vue"),
      name: "character-search",
    },
    {
      path: "/dungeon-counter",
      component: () => import("../pages/dungeon-counter.vue"),
      name: "dungeon-counter",
    },
  ],
});

export default router;
