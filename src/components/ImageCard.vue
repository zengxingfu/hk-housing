<template>
    <div>
        <div class="demo-card-image mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title mdl-card--expand"></div>
            <div class="mdl-card__actions">
                <span class="demo-card-image__filename">Image.jpg</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.demo-card-image.mdl-card {
  width: 250px;
  min-height: 50px !important;
  background: url("https://getmdl.io/assets/demos/dog.png") center / cover
    #46b6ac;
}
.demo-card-image > .mdl-card__actions {
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
}
.demo-card-image__filename {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}
.mdl-card__title.mdl-card--expand {
  height: 50px;
}
</style>