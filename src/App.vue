<template>
<div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>bookmark</md-icon>
            </md-button>
            <span class="md-title">香港公屋问题研究</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row">
              <md-tabs class="md-primary" md-sync-route>
                <md-tab id="tab-overview" md-label="香港住房问题" to="/overview"></md-tab>
                <md-tab id="tab-live" md-label="公屋与居民" to="/live"></md-tab>
                <md-tab id="tab-supply" md-label="公屋供需" to="/supply"></md-tab>
                <md-tab id="tab-environment" md-label="居住环境" to="/environment"></md-tab>
                <md-tab id="tab-policy" md-label="政策迷思" to="/policy"></md-tab>
                <md-tab id="tab-mapping" md-label="公屋地图" to="/mapping"></md-tab>
              </md-tabs>
          <!-- <md-tabs class="md-primary" md-sync-route>
            <md-tab id="tab-overview" md-label="香港住房问题" to="/"></md-tab>
            <md-tab id="tab-live" md-label="公屋与居民" to=""></md-tab>
            <md-tab id="tab-supply" md-label="公屋供需" to="supply"></md-tab>
            <md-tab id="tab-environment" md-label="居住环境"></md-tab>
            <md-tab id="tab-policy" md-label="政策迷思"></md-tab>
            <md-tab id="tab-mapping" md-label="公屋地图"></md-tab>
          </md-tabs> -->
        </div>
      </md-app-toolbar>

      <!-- <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">香港公屋问题研究</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
           <span class="md-list-item-text">Inbox</span>
            
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer> -->

      <md-app-content class="view-container">
        <transition mode="out-in">
          <router-view></router-view>
        </transition>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "LastRowFixed",
  data() {
    return {
      menuVisible: false
    };
  }
};
</script>
<style lang="scss">
:root {
  --md-theme-default-primary: #3f51b5 !important;
  --md-theme-default-accent: #e91e63 !important;
}
.md-tabs.md-theme-default.md-primary .md-tabs-navigation {
  background-color: #3f51b5;
  background-color: var(--md-theme-default-primary-on-background, #3f51b5);
}
.md-theme-default :not(input):not(textarea)::selection {
  background-color: #e91e63;
  background-color: var(--md-theme-default-accent-on-background, #e91e63);
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
.md-app {
  max-height: 100vh;
  /* border: 1px solid rgba(#000, 0.12); */
}

/* // Demo purposes only */
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.page-container {
  height: 100%;
}

.view-container {
  padding: 0;
  background-color: #efefef;
}

/* 过渡动画 */
.v-enter {
  opacity: 0.5;
}
.v-enter-active {
  transition: 0.2s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0.5;
}
.v-leave-active {
  transition: 0.2s;
}
</style>