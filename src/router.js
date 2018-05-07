import Vue from "vue";
import VueRouter from "vue-router";
import Policy from "./pages/Policy.vue";
import Live from "./pages/Live.vue";
import Mapping from "./pages/Mapping.vue";
import Attention from "./pages/Attention.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/policy",
      component: Policy
    },
    {
      path: "/live",
      component: Live
    },
    {
      path: "/attenion",
      component: Attention
    },
    {
      path: "/mapping",
      component: Mapping
    }
  ]
});
