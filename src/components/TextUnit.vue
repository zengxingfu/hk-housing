<template>
    <div class="overview-top-text page-content mdl-cell--7-col">
        <h2>{{title}}</h2>
        <h4 class="text_unit-subtitle">{{subtitle}}</h4>
        <h5>{{content}}</h5>
    </div>
</template>

<script>
export default {
  props: ["title", "subtitle", "content"]
};
</script>

<style scoped>
.overview-top-text h4.text_unit-subtitle {
  font-weight: 400;
  padding-top: 1.5em;
  font-size: 20px;
}
.overview-top-text h5 {
  padding-top: 1em;
}
</style>