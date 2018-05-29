<template>
    <div class="text-module">
        <h2 v-if="subtitle===''? false : true" >{{title}}</h2>
        <h4 v-if="subtitle===''? false : true" class="text-module__subtitle">{{subtitle}}</h4>
        <h5 v-if="subtitle===''? false : true" >{{content}}</h5>
        <slot></slot>
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
  font-weight: 300;
  text-align: center;
}
.text-module {
  padding: 4em;
}
.text-module__subtitle {
  font-weight: 400;
}
</style>