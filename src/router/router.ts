import VueRouter, { RawLocation, RouteConfig, Route } from "vue-router";
import Vue from "vue";

/* Layout */
import Layout from "@/layout/index.vue";
import LayoutBlank from "@/layouts/Blank.vue";
import LayoutContent from "@/layouts/Content.vue";

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
export const constRoutes: RouteConfig[] = [
  {
    path: "/home",
    component: LayoutContent, //() => import("../pages/home.vue"),
    redirect: "noredirect",
    name: "home",
    children: [
      {
        path: "/",
        component: () =>
          import(/* webpackChunkName: "redirect" */ "@/pages/home.vue"),
      },
    ],
  },
  {
    path: "/character-search",
    component: LayoutContent,
    children: [
      {
        name: "character-search",
        path: "/",
        component: () =>
          import(
            /* webpackChunkName: "redirect" */ "@/pages/character-search.vue"
          ),
      },
    ],
  },
  {
    path: "/homework-counter",
    component: LayoutContent,
    children: [
      {
        name: "homework-counter",
        path: "/index",
        component: () =>
          import(
            /* webpackChunkName: "redirect" */ "@/pages/homework-counter/index.vue"
          ),
      },
    ],
  },
  {
    path: "/DPM-calculator",
    component: LayoutContent,
    children: [
      {
        name: "DPM-calculator",
        path: "/index",
        component: () =>
          import(
            /* webpackChunkName: "redirect" */ "@/pages/DPM-calculator/index.vue"
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    component: LayoutContent,
    name: "dashboard",
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () =>
          import(
            /* webpackChunkName: "redirect" */ "@/pages/dashboard/dashboard.vue"
          ),
      },
    ],
  },
  {
    path: "/login",
    component: LayoutBlank,
    name: "login",
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () =>
          import(/* webpackChunkName: "redirect" */ "@/pages/login.vue"),
      },
    ],
  },
  {
    path: "/",
    redirect: "DPM-calculator",
  },
];

const router = new VueRouter({
  mode: "history",
  base: "loaa",
  routes: constRoutes,
});

export default router;
