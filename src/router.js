import Vue from "vue";
import VueRouter from "vue-router";
import Policy from "./views/Policy";
import Live from "./views/Live";
import Mapping from "./views/Mapping";
import Environment from "./views/Environment";
import Overview from "./views/Overview";
import Supply from "./views/Supply";
import Album from "./views/Album";
import Team from "./views/Team";
import Content from "./views/Content";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/content"
    },
    {
      path: "/content",
      redirect: "/content/overview",
      component: Content,
      children: [
        {
          path: "overview",
          component: Overview
        },
        {
          path: "policy",
          component: Policy
        },
        {
          path: "live",
          component: Live
        },
        {
          path: "environment",
          component: Environment
        },
        {
          path: "mapping",
          component: Mapping
        },
        {
          path: "supply",
          component: Supply
        },
        {
          path: "album",
          component: Album
        }
      ]
    },
    {
      path: "/team",
      component: Team
    }
  ]
});

router.afterEach(function(to, from) {
  // document.documentElement.scrollTop = 0;
  window.scrollTo(0, 0);
});

export default router;
