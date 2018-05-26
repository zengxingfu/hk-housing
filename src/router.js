import Vue from "vue";
import VueRouter from "vue-router";
import Policy from "./pages/Policy.vue";
import Live from "./pages/Live.vue";
import Mapping from "./pages/Mapping.vue";
import Environment from "./pages/Environment.vue";
import Overview from "./pages/Overview";
import Supply from "./pages/Supply";

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
      path: "/environment",
      component: Environment
    },
    {
      path: "/mapping",
      component: Mapping
    },
    {
      path: "/supply",
      component: Supply
    }
  ]
});

export default router;
