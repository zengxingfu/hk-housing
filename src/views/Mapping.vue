<template>
  <div>
    <TopImage title="全港公屋地图" background="top-6"></TopImage>
    <TextUnit title="标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
    <div class="bottom-gap md-layout md-alignment-center">
      <div class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <Mapping></Mapping>
      </div>
    </div>
    <BottomNav lastChapter="公屋60年" nextChapter="" nextPath="" lastPath="album"></BottomNav>
  </div>
</template>

<script>
import TopImage from "../components/TopImage";
import BottomNav from "../components/BottomNav";
import TextUnit from "../components/TextUnit";
import Mapping from "../components/Mapping";
export default { components: { TopImage, BottomNav, TextUnit, Mapping } };
</script>

<style scoped>
</style>