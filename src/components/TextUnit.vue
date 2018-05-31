<template>
  <div class="md-layout md-alignment-center-center">
    <div class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90 text-module">
      <h1 v-if="title===''? false : true">{{title}}</h1>
      <!-- <span v-if="title===''? false : true" class="md-headline"> {{title}} </span><br> -->
      <h2 v-if="subtitle===''? false : true" class="text-module__subtitle">{{subtitle}}</h2>
      <!-- <span v-if="subtitle===''? false : true" class="md-title"> {{subtitle}} </span><br> -->
      <h3 v-if="content===''? false : true">{{content}}</h3>
      <!-- <span v-if="content===''? false : true" class="md-subtitle"> {{content}} </span> -->
      
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
h5,
h2,
h3,
h4 {
  line-height: 2em;
  font-weight: 300;
  text-align: center;
}

h3 {
  text-align: left !important;
}

/* span {
  font-weight: 300;
  text-align: center;
} */
.text-module {
  padding-top: 4em;
  padding-bottom: 4em;
}
.text-module__subtitle {
  font-weight: 400;
}
</style>