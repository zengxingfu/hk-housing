<template>
  <div>
    <TopImage title="香港公屋地图" background="top-6"></TopImage>
    <TextUnit title="标题标题标题标题标题标题标题标题" subtitle="副标题副标题副标题副标题副标题副标题副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
    <div class="bottom-gap md-layout md-alignment-center">
      <div class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <iframe src="https://lbs.amap.com/dev/mapdata/share/fa7b6909a1d9d15476068709d25bc5a6" frameborder="0"></iframe>

      </div>

    </div>
    <BottomNav lastChapter="公屋图集" nextChapter="" nextPath="" lastPath="album"></BottomNav>
  </div>
</template>

<script>
import TopImage from "../components/TopImage";
import BottomNav from "../components/BottomNav";
import TextUnit from "../components/TextUnit";
export default { components: { TopImage, BottomNav, TextUnit } };
</script>

<style scoped>
iframe {
  width: 100%;
  height: 576px;
}
</style>