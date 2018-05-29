<template>
  <div class="page-content">
    <TopImage title="漩涡中的香港住房问题" background="top-1"></TopImage>
    <TextUnit title="施老师说这里有一个卷首语" subtitle="卷首语的副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
    <div class="md-layout md-alignment-center">
      <ImageCard title="图片的标题" subtitle="图片的描述" class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <img src="../assets/overview-1.jpg" alt="">
      </ImageCard>
    </div>
    <TextUnit title="施老师说这里有一个媒体报道" subtitle="媒体报道的副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
    <div class="md-layout md-alignment-center">
      <Chart class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="polling"></Chart>
    </div>
    <TextUnit2 title="施老师说这里有一个文案占位" subtitle="文案占位的副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit2>
    <div class="md-layout md-alignment-center">
      <Chart class="bottom-gap top-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="report"></Chart>
    </div>
    <div class="md-layout md-alignment-center">
      <Chart class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="reportLastYear"></Chart>
    </div>
    <div class="md-layout md-alignment-center">
      <ImageCard title='' subtitle='' class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <img src="../assets/overview-2.jpg" alt="">
        
      </ImageCard>
    </div>
    <BottomNav lastChapter="" nextChapter="公屋与居民" nextPath="live" lastPath=""></BottomNav>
  </div>
</template>

<script>
import TopImage from "../components/TopImage";
import TextUnit from "../components/TextUnit";
import TextUnit2 from "../components/TextUnit2";
import ImageCard from "../components/ImageCard";
import Chart from "../components/Chart";
import BottomNav from "../components/BottomNav";
export default {
  components: { TopImage, TextUnit, TextUnit2, ImageCard, Chart, BottomNav }
};
</script>

<style>
/* 覆盖样式 */
.top-gap {
  margin-top: 4em !important;
}

.bottom-gap {
  margin-bottom: 4em !important;
}
</style>