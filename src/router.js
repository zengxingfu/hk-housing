import Vue from "vue";
import VueRouter from "vue-router";
import Policy from "./pages/Policy.vue";
import Live from "./pages/Live.vue";
import Mapping from "./pages/Mapping.vue";
import Attention from "./pages/Attention.vue";
import Overview from "./pages/Overview";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Overview
    },
    {
      path: "/policy",
      component: Policy
    },
    {
      path: "/live",
      component: Live
    },
    {
      path: "/attention",
      component: Attention
    },
    {
      path: "/mapping",
      component: Mapping
    }
  ]
});

export default router;
