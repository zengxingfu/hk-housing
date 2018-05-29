<template>
  <!-- Slider main container -->
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <ImageCard class="no-margin" title="50年代" subtitle="副标题">
          <img src="../assets/overview-1.jpg" alt="">
        </ImageCard>
      </div>
      <div class="swiper-slide">
        <ImageCard class="no-margin" title="60年代" subtitle="副标题">
          <img src="../assets/overview-1.jpg" alt="">
        </ImageCard>
      </div>
      <div class="swiper-slide">
        <ImageCard class="no-margin" title="70年代" subtitle="副标题">
          <img src="../assets/overview-1.jpg" alt="">
        </ImageCard>
      </div>
      <div class="swiper-slide">
        <ImageCard class="no-margin" title="80年代" subtitle="副标题">
          <img src="../assets/overview-1.jpg" alt="">
        </ImageCard>
      </div>
      <div class="swiper-slide">
        <ImageCard class="no-margin" title="90年代" subtitle="副标题">
          <img src="../assets/overview-1.jpg" alt="">
        </ImageCard>
      </div>
      <div class="swiper-slide">
        <ImageCard class="no-margin" title="00年代" subtitle="副标题">
          <img src="../assets/overview-1.jpg" alt="">
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