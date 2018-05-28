<template>
    <div class="text-module2">
        <h2 v-if="subtitle===''? false : true" >{{title}}</h2>
        <h4 v-if="subtitle===''? false : true" class="text-module__subtitle">{{subtitle}}</h4>
        <h5 v-if="subtitle===''? false : true" >{{content}}</h5>
    </div>
</template>

<script>
export default {
  props: ["title", "subtitle", "content"]
};
</script>

<style scoped>
h2,
h4,
h5 {
  color: white;
  font-weight: 300;
  text-align: center;
}
.text-module2 {
  padding: 4em;
  background: #3f51b5;
}
.text-module2__subtitle {
  font-weight: 400;
}
</style>