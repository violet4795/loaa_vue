import VueRouter, { RawLocation, Route } from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = async function push(
  location: RawLocation
): Promise<Route> {
  try {
    return await originalPush.bind(this)(location);
  } catch (e) {
    if (e?.name === "NavigationDuplicated") {
      console.warn(e);
      return e;
    } else {
      throw e;
    }
  }
};

// https://stackoverflow.com/questions/57837758/navigationduplicated-navigating-to-current-location-search-is-not-allowed
// thx

const router = new VueRouter({
  mode: "history",
  base: "loaa",
  routes: [
    {
      path: "/",
      redirect: "dashboard",
    },
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
    {
      path: "/dashboard",
      component: () => import("../pages/dashboard/Dashboard.vue"),
      name: "dashboard",
    },
  ],
});

export default router;
