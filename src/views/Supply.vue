<template>
  <div>
    <TopImage title="公屋的供需与资源配置效率" background="top-3"></TopImage>
    <TextUnit2 title="标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit2>
    <div class="md-layout md-alignment-center">
      <Chart class="top-gap md-layout-item md-xlarge-size-30 md-large-size-35 md-medium-size-80 md-small-size-90" chartId="poverty"></Chart>
      <Chart class="top-gap md-layout-item md-xlarge-size-30 md-large-size-35 md-medium-size-80 md-small-size-90" chartId="housingPie"></Chart>
    </div>
    <TextUnit title="标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
    <div class="md-layout md-alignment-center">
      <Chart class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="povertyHousing"></Chart>
    </div>
    <div class="md-layout md-alignment-center">
      <Chart class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="hkPopulation"></Chart>
    </div>
    <TextUnit title="标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
    <div class="md-layout md-alignment-center">
      <Chart class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="hkFamily"></Chart>
    </div>
    <div class="md-layout md-alignment-center">
      <Chart class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="unitAndPopulation"></Chart>
    </div>
    <div class="md-layout md-alignment-center">
      <Chart class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="elder"></Chart>
    </div>
    <div class="md-layout md-alignment-center">
      <Chart class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="vacancy"></Chart>
    </div>
    <BottomNav lastChapter="香港的公屋与居民" nextChapter="公屋居住环境的改善情况" nextPath="environment" lastPath="live"></BottomNav>
  </div>
</template>

<script>
import TopImage from "../components/TopImage";
import BottomNav from "../components/BottomNav";
import Chart from "../components/Chart";
import TextUnit2 from "../components/TextUnit2";
import TextUnit from "../components/TextUnit";

export default {
  components: { TopImage, BottomNav, Chart, TextUnit2, TextUnit }
};
</script>

<style scoped>
</style>