<template>
  <div class="team-container">
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="handleBack">
            <md-icon>arrow_back</md-icon>
          </md-button>

          <span class="md-title">团队</span>
        </div>
      </md-app-toolbar>
      <md-app-content class="team-content">
        <p>正在建设中……</p>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
.team-content {
  min-height: 50vh;
  height: auto;
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleBack() {
      this.$router.back();
    }
  }
};
</script>