<template>
  <div v-bind:style="{'background-image': `url(${covers[background-1]})`}" class="top-image">
    <div class="mask">
      <!-- <h1>{{title}}</h1> -->
      <span class="md-display-2">{{title}}</span>
    </div>
  </div>
</template>

<script>
import cover1 from "../assets/cover-images/1.jpg";
import cover2 from "../assets/cover-images/2.jpg";
import cover3 from "../assets/cover-images/3.jpg";
import cover4 from "../assets/cover-images/4.jpg";
import cover5 from "../assets/cover-images/5.jpg";
import cover6 from "../assets/cover-images/6.jpg";
import cover7 from "../assets/cover-images/7.jpg";
export default {
  name: "TopImage",
  props: ["title", "background"],
  data() {
    return {
      covers: [cover1, cover2, cover3, cover4, cover5, cover6, cover7]
    };
  }
};
</script>

<style scoped>
.top-image {
  width: 100%;
  height: 480px;
  background-position: center;
  background-size: contain;
}

.top-image > .mask {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 998;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top-image > .mask > span {
  color: white;
  /* font-size: 55px; */
  font-weight: 300;
}
</style>