<template>
<div class="video-card-event mdl-card mdl-shadow--2dp">
  <!-- <div class="mdl-card__title mdl-card--expand">
    <h4>
        公屋视频
    </h4>
  </div> -->
  <div class="video-container">
      <video src="http://acvideo-1252754384.cossh.myqcloud.com/ac_13354_480p_v1.mp4" controls="controls">
Your browser does not support the video tag.
</video>
  </div>
  
  <!-- <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Action Button
    </a>
    <div class="mdl-layout-spacer"></div>
    <i class="material-icons">event</i>
  </div> -->
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.video-card-event.mdl-card {
  margin: 25px 0;
  width: 100%;
  height: auto;
  background: white;
}
.video-card-event > .mdl-card__actions {
  border-color: rgba(0, 0, 0, 0.1);
}
.video-card-event > .mdl-card__title {
  align-items: flex-start;
}
.video-card-event > .mdl-card__title > h4 {
  margin-top: 0;
}
.video-card-event > .mdl-card__actions {
  display: flex;
  box-sizing: border-box;
  align-items: center;
}
.video-card-event > .mdl-card__actions > .material-icons {
  padding-right: 10px;
}
.video-container video {
  width: 100%;
}
</style>