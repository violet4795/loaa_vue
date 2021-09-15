import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "./router/router";
import router from "vue-router";
Vue.config.productionTip = false;
Vue.use(router);

new Vue({
  vuetify,
  render: (h) => h(App),
  router: VueRouter,
}).$mount("#app");
