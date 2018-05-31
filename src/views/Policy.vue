<template>
  <div>
    <TopImage title="公屋安居" background="top-5"></TopImage>
    <TextUnit title="标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
    <div class="md-layout md-alignment-center">
      <ImageCard title="" subtitle="" class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <img src="../assets/policy1.png" alt="">
      </ImageCard>
    </div>
    <div class="top-gap bottom-gap md-layout md-alignment-center">
      <ImageCard title="" subtitle="" class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <img src="../assets/policy2.png" alt="">
      </ImageCard>
    </div>
    <TextUnit2 title="标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit2>

    <div class="md-layout md-alignment-center">
      <Chart class="top-gap md-layout-item md-xlarge-size-30 md-large-size-35 md-medium-size-80 md-small-size-90" chartId="housingRantal"></Chart>
      <Chart class="top-gap md-layout-item md-xlarge-size-30 md-large-size-35 md-medium-size-80 md-small-size-90" chartId="privateHousing"></Chart>
    </div>
    <TextUnit2 class="top-gap bottom-gap" title="标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit2>
    <div class="md-layout md-alignment-center">
      <Chart class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="estate"></Chart>
    </div>
    <TextUnit title="标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>

    <ImageCard class="no-margin" title="" subtitle="">
      <img src="../assets/policy3.png" alt="">
    </ImageCard>
    <TextUnit title="标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
    <div class="md-layout md-alignment-center">
      <Chart class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="ownership"></Chart>
    </div>
    <TextUnit2 title="下面是延时视频👇" subtitle="副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit2>
   <div class="top-gap md-layout md-alignment-center">
      <video controls preload="preload" :poster="poster" class="md-elevation-2 bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <source src="https://1252644334.vod2.myqcloud.com/99de09e9vodtransgzp1252644334/c5456b887447398156356440304/v.f20.mp4" type="video/mp4">
      </video>
    </div>
    <BottomNav lastChapter="人居变迁" nextChapter="公屋60年" nextPath="album" lastPath="environment"></BottomNav>

  </div>
</template>

<script>
import TopImage from "../components/TopImage";
import TextUnit from "../components/TextUnit";
import TextUnit2 from "../components/TextUnit2";
import BottomNav from "../components/BottomNav";
import ImageCard from "../components/ImageCard";
import Chart from "../components/Chart";
import videoPoster from "../assets/changju.jpg";

export default {
  data() {
    return {
      poster: videoPoster
    };
  },
  components: { TopImage, BottomNav, TextUnit, TextUnit2, ImageCard, Chart }
};
</script>

<style scoped>
</style>