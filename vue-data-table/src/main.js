import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App";
import "vuetify/dist/vuetify.min.css";
import VueRouter from "vue-router";
import store from "./store/index";
import routes from "./routes";

/**
 * Registring and loading routers
 */
Vue.use(Vuetify);
Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  mode: "history",
});
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
