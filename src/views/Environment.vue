<template>
    <div>
        <TopImage title="公屋居住环境的改善情况" background="top-4"></TopImage>    
        <TextUnit title="标题标题标题标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
            <div class="md-layout md-alignment-center">
      <Chart class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="housingChange"></Chart>
    </div>
    <TextUnit2>
        <img src="../assets/environment-1.png" alt="">
    </TextUnit2>
        <TextUnit title="标题标题标题标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
      <div class="md-layout md-alignment-center">
      <Chart class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="satisfaction"></Chart>
    </div>
        <TextUnit2 title="标题标题标题标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit2>
        <ImageCard class="no-margin" title="" subtitle="">
        <img src="../assets/environment-2.png" alt="">
    </ImageCard>
        <TextUnit title="请欣赏公屋图集" subtitle="副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
    
      <div class="md-layout md-alignment-center">
        <ImageCollection class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90"></ImageCollection>
      </div>
        <BottomNav lastChapter="公屋的供需与资源配置效率" nextChapter="居民住房政策的迷思" nextPath="policy" lastPath="supply"></BottomNav>
    </div>
</template>

<script>
import TopImage from "../components/TopImage";
import TextUnit from "../components/TextUnit";
import TextUnit2 from "../components/TextUnit2";
import Chart from "../components/Chart";
import BottomNav from "../components/BottomNav";
import ImageCard from "../components/ImageCard";
import ImageCollection from "../components/ImageCollection";
export default {
  components: {
    TopImage,
    BottomNav,
    TextUnit,
    TextUnit2,
    Chart,
    ImageCard,
    ImageCollection
  }
};
</script>

<style>
.no-margin {
  margin: 0 !important;
}
</style>