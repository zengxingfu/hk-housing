<template>
  <div>
    <TopImage title="居民住房政策的迷思" background="top-5"></TopImage>
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
    <div class="md-layout md-alignment-center">
      <ImageCard title="" subtitle="" class="top-gap bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <img src="../assets/overview-1.jpg" alt="">
      </ImageCard>
    </div>
    <BottomNav lastChapter="公屋居住环境的改善情况" nextChapter="公屋图集" nextPath="album" lastPath="environment"></BottomNav>

  </div>
</template>

<script>
import TopImage from "../components/TopImage";
import TextUnit from "../components/TextUnit";
import TextUnit2 from "../components/TextUnit2";
import BottomNav from "../components/BottomNav";
import ImageCard from "../components/ImageCard";
import Chart from "../components/Chart";

export default {
  components: { TopImage, BottomNav, TextUnit, TextUnit2, ImageCard, Chart }
};
</script>

<style scoped>
</style>