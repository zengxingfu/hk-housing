<template>
    <div class="md-layout">
        <div @click="pushPath(lastPath)" v-bind:class="lastChapter==='' ? 'nav-disabled': ''" class="md-layout-item md-medium-size-50 md-small-size-20 md-xsmall-size-20 bottom-nav__left">
            <span>
                <!-- <md-icon>arrow_back</md-icon> -->
                ← 上一个</span>
                 <span class="chapter last-chapter">
                     {{lastChapter}}
                </span>
        </div>
       
        <div @click="pushPath(nextPath)" v-bind:class="nextChapter==='' ? 'nav-disabled': ''" class="md-layout-item md-medium-size-50 md-small-size-80 md-xsmall-size-80 bottom-nav__right">
            <span>下一个 →
            <!-- <md-icon>arrow_forward</md-icon> -->
            </span>
            <span class="chapter next-chapter">{{nextChapter}}</span>
        </div>
       
        
    </div>
</template>

<script>
export default {
  props: ["nextChapter", "lastChapter", "nextPath", "lastPath"],
  methods: {
    pushPath(path) {
      if (path !== "") {
        this.$router.push(path);
      }
    }
  }
};
</script>

<style scoped>
.md-layout-item {
  display: flex;
  color: white;
  cursor: pointer;
  height: 126px;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
}
span {
  text-align: center;
  align-self: center;
}
.bottom-nav__left {
  /* background: #5c6bc0; */
  background: #3f51b5;
}
.bottom-nav__right {
  background: #e91e63;
}
.chapter {
  font-weight: 500;
}
.nav-disabled {
  opacity: 0.25;
  cursor: not-allowed;
}
</style>