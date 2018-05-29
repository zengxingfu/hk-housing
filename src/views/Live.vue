<template>
  <div>
    <TopImage title="香港的公屋与居民" background="top-2"></TopImage>
    <TextUnit title="标题标题标题标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
    <div class="md-layout md-alignment-center">
      <ImageCard title="" subtitle="" class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <img src="../assets/live-1.png" alt="">
      </ImageCard>
    </div>
    <TextUnit title="标题标题标题标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
    <div class="md-layout md-alignment-center">
      <ImageCard title="" subtitle="" class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <img src="../assets/live-2.png" alt="">
      </ImageCard>
    </div>
    <TextUnit title="标题标题标题标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
    <div class="md-layout md-alignment-center bottom-gap">
      <ImageCard title="" subtitle="" class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <img src="../assets/live-3.png" alt="">
      </ImageCard>
    </div>
    <TextUnit2 title="下面是延时视频👇" subtitle="副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit2>
    <div class="md-layout md-alignment-center">
      <ImageCard title="" subtitle="" class="top-gap bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <img src="../assets/overview-1.jpg" alt="">
      </ImageCard>
    </div>
    <BottomNav lastChapter="“漩涡”中的香港住房问题" nextChapter="公屋的供需与资源配置效率" nextPath="supply" lastPath="overview"></BottomNav>

  </div>
</template>

<script>
import TopImage from "../components/TopImage";
import TextUnit from "../components/TextUnit";
import TextUnit2 from "../components/TextUnit2";
import ImageCard from "../components/ImageCard";
import BottomNav from "../components/BottomNav";
export default {
  components: { TopImage, BottomNav, TextUnit, TextUnit2, ImageCard }
};
</script>

<style scoped>
</style>