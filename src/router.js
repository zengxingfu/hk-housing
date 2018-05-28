import Vue from 'vue';
import VueRouter from 'vue-router';
import Policy from "./views/Policy.vue";
import Live from "./views/Live.vue";
import Mapping from "./views/Mapping.vue";
import Environment from "./views/Environment.vue";
import Overview from "./views/Overview";
import Supply from "./views/Supply";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/overview'
    }, {
      path: "/overview",
      component: Overview
    }, {
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