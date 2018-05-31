<template>
  <div class="md-layout md-alignment-center-center">

    <div class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90 text-module2">
      <h1 v-if="title===''? false : true">{{title}}</h1>
      <h2 v-if="subtitle===''? false : true" class="text-module__subtitle">{{subtitle}}</h2>
      <h3 v-if="content===''? false : true">{{content}}</h3>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle", "content"]
};
</script>

<style scoped>
h1,
h3,
h2,
h4,
h5 {
  color: white;
  font-weight: 300;
  line-height: 2em;
  text-align: center;
}

h3 {
  text-align: left !important;
}
.md-layout {
  background: #3f51b5;
}
.text-module2 {
  padding-top: 4em;
  padding-bottom: 4em;
}

.text-module2__subtitle {
  font-weight: 400;
}
</style>