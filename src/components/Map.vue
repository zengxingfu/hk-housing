<template>
 <dialog class="mdl-dialog">
    <!-- <h4 class="mdl-dialog__title">公屋地图</h4> -->
    <div id="hk-mapping" class="mdl-dialog__content"></div>
    <div class="mdl-dialog__actions">
      <button @click="close" type="button" class="mdl-button close">关闭</button>
    </div>
  </dialog>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    dialog() {
      let dialog = document.querySelector("dialog");
      if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
      }
      return dialog;
    }
  },
  mounted() {
    var map = new AMap.Map("hk-mapping", {
      mapStyle: "amap://styles/whitesmoke",
      resizeEnable: true,
      zoom: 12,
      center: [114.1779899597, 22.2901288435]
    });
  },
  methods: {
    open() {
      this.dialog.showModal();
    },
    close() {
      this.dialog.close();
    }
  }
};
</script>

<style scoped>
dialog {
  width: 1024px;
  padding: 0;
}
#hk-mapping {
  width: 976px;
  height: 480px;
}
</style>