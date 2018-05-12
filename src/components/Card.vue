<template>
 <div class="demo-card-wide mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">香港公屋建造与历史发展</h2>
  </div>
  <div class="mdl-card__actions mdl-card--border">
<button @click="openMap()" id="mapping-get-started" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
  开始游览
</button>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    openMap() {
      let vm = this;
      vm.bus.$emit("openMap&sTop", "");
    }
  }
};
</script>

<style scoped>
.demo-card-wide.mdl-card {
  margin: 25px 0;
  width: 100%;
  background: url("https://ws4.sinaimg.cn/large/006tNc79ly1fr7bz1cc5yj30u00lgq7o.jpg")
    center / cover;
}
.demo-card-wide > .mdl-card__title {
  color: #fff;
  height: 240px;
}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}
#mapping-get-started {
  width: 200px;
  margin-left: 10px;
}
</style>