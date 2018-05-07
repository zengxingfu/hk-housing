import Vue from "vue";
import router from "./router";
import App from "./App.vue";

// Vue.use(VueRouter);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
