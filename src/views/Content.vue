<template>
<div>
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button disabled class="md-icon-button">
              <md-icon :md-src="logoUri" />
            </md-button>
            <span class="md-title">何以安居：香港保障住房的误区与真相</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button" @click="goToTeamPage">
              <md-icon :md-src="teamUri"></md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row">
              <md-tabs class="md-primary" md-sync-route>
                <md-tab id="tab-overview" md-label="舆论漩涡" to="/content/overview"></md-tab>
                <md-tab id="tab-live" md-label="狮子山下" to="/content/live"></md-tab>
                <md-tab id="tab-supply" md-label="供需迷局" to="/content/supply"></md-tab>
                <md-tab id="tab-environment" md-label="人居变迁" to="/content/environment"></md-tab>
                <md-tab id="tab-policy" md-label="公屋安居" to="/content/policy"></md-tab>
                <md-tab id="tab-album" md-label="公屋60年" to="/content/album"></md-tab>
                <md-tab id="tab-mapping" md-label="全港公屋地图" to="/content/mapping"></md-tab>
              </md-tabs>
        </div>
      </md-app-toolbar>


      <md-app-content class="view-container">
        <transition mode="out-in">
          <router-view></router-view>
        </transition>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import logoUri from "../assets/logo.svg";
import teamUri from "../assets/people.svg";
export default {
  name: "LastRowFixed",
  data() {
    return {
      logoUri,
      teamUri
    };
  },
  methods: {
    goToTeamPage() {
      this.$router.push("/team");
    }
  }
};
</script>
<style lang="scss">
:root {
  --md-theme-default-primary: #3f51b5 !important;
  --md-theme-default-accent: #ff8600 !important;
}
.md-tabs.md-theme-default.md-primary .md-tabs-navigation {
  background-color: #3f51b5;
  background-color: var(--md-theme-default-primary-on-background, #3f51b5);
}
.md-theme-default :not(input):not(textarea)::selection {
  background-color: #ff8600;
  background-color: var(--md-theme-default-accent-on-background, #ff8600);
  color: #fff;
  color: var(--md-theme-default-text-primary-on-accent, #fff);
}
// @import "vue-material/dist/theme/engine";
// @include md-register-theme(
//   "default",
//   (
//     primary: md-get-palette-color(blue, A200),
//     accent: md-get-palette-color(red, A200)
//   )
// );

// @import "~vue-material/dist/theme/all";
</style>

<style scoped>
.view-container {
  padding: 0;
  background-color: #efefef;
}
</style>