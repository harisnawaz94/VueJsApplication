import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import item from "../classes/item";
Vue.use(Vuex);

/**
 * Registring ORM and loading store
 */
const database = new VuexORM.Database();
database.register(item);
export default new Vuex.Store({
  plugins: [VuexORM.install(database)],
});
