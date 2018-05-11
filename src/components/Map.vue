<template>
 <dialog class="mdl-dialog">
    <!-- <h4 class="mdl-dialog__title">公屋地图</h4> -->
    <div id="hk-mapping" class="mdl-dialog__content">
      <!-- <iframe src="http://lbs.amap.com/dev/mapdata/share/8510d74a40bbd8ac1ab101d6816681e8" frameborder="0"></iframe> -->
    </div>
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
  created() {
    let vm = this;
    vm.bus.$on("openMap&sTop", function(val) {
      vm.open();
    });
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
  width: 1200px;
  padding: 0;
}
/* #hk-mapping {
  padding: 0;
}
#hk-mapping iframe {
  width: 1200px;
  height: 480px;
} */
#hk-mapping {
  width: 1152px;
  height: 480px;
}
</style>