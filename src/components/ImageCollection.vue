<template>
  <!-- Slider main container -->
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="image in images" :key="image.id">
        <ImageCard class="no-margin" :title="image.title" :subtitle="image.subtitle">
          <img :src="image.src" alt="">
        </ImageCard>
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>


<script>
import Swiper from "swiper";
import ImageCard from "./ImageCard";
export default {
  props: {
    images: Array
  },
  mounted() {
    let mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "horizontal",
      loop: false,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
  },
  components: { ImageCard }
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
}
.no-padding {
  padding: 0 !important;
}
</style>