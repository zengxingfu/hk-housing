<template>
  <!-- <div class="md-layout md-alignment-center"> -->
  <!-- class="md-layout-item md-xlarge-size-75 md-large-size-75 md-medium-size-75 md-small-size-100" -->
  <md-card>
    <md-card-media-cover md-solid>
      <md-card-media>
        <slot></slot>
      </md-card-media>
      <md-card-area v-if="showText">
        <md-card-header class="image-text">
          <span v-if="title===''? false : true" class="md-title">{{title}}</span>
          <span class="md-subhead">{{subtitle}}</span>
        </md-card-header>
        <md-card-actions v-if="showAction">
          <md-button class="md-icon-button">
            <md-icon>arrow_back</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>arrow_forward</md-icon>
          </md-button>
        </md-card-actions>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
  <!-- </div> -->

</template>

<script>
export default {
  data() {
    return {
      currentImage: 1
    };
  },
  computed: {
    showText() {
      let hasTitle = this.title !== "";
      let hasSubtitle = this.subtitle !== "";
      return hasTitle || hasSubtitle;
    },
    showAction() {
      if (this.action) {
        return true;
      }
      return false;
    }
  },
  props: ["title", "subtitle", "action"],
  methods: {}
};
</script>

<style scoped>
.md-title {
  font-weight: 300;
}
.image-text {
  padding-bottom: 0 !important;
}
</style>