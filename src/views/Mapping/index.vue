<template>
  <div>
    <TopImage title="全港公屋地图" background="top-6"></TopImage>
    <div class="top-gap bottom-gap md-layout md-alignment-center">
      <div class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <Mapping></Mapping>
      </div>
    </div>
    <BottomNav lastChapter="公屋60年" nextChapter="团队" nextPath="/team" lastPath="album"></BottomNav>
  </div>
</template>

<script>
import TopImage from "../../components/TopImage";
import BottomNav from "../../components/BottomNav";
import TextUnit from "../../components/TextUnit";
import Mapping from "../../components/Mapping";
export default { components: { TopImage, BottomNav, TextUnit, Mapping } };
</script>

<style scoped>
</style>