import Vue from "vue";
import router from "./router";
import App from "./App.vue";

// Vue.use(VueRouter);
let bus = new Vue();
Vue.prototype.bus = bus;
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});