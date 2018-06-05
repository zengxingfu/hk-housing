<template>
  <div>
    <TopImage title="公屋60年" background="top-7"></TopImage>
    <TextUnit2 title="二十世纪50年代" subtitle="" content=""></TextUnit2>

    <div class="top-gap md-layout md-alignment-center">
      <ImageCollection :images="collectionData.fifty" class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90"></ImageCollection>
    </div>

    <TextUnit2 class="bottom-gap" title="二十世纪60年代" subtitle="" content=""></TextUnit2>
    <div class="md-layout md-alignment-center">
      <ImageCollection :images="collectionData.sixty" class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90"></ImageCollection>
    </div>
    <TextUnit2 class="bottom-gap" title="二十世纪70年代" subtitle="" content=""></TextUnit2>
    <div class="md-layout md-alignment-center">
      <ImageCollection :images="collectionData.seventy" class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90"></ImageCollection>
    </div>
    <TextUnit2 class="bottom-gap" title="二十世纪80年代" subtitle="" content=""></TextUnit2>
    <div class="md-layout md-alignment-center">
      <ImageCollection :images="collectionData.eighty" class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90"></ImageCollection>
    </div>
    <TextUnit2 class="bottom-gap" title="二十世纪90年代" subtitle="" content=""></TextUnit2>
    <div class="md-layout md-alignment-center">
      <ImageCollection :images="collectionData.ninety" class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90"></ImageCollection>
    </div>
    <TextUnit2 class="bottom-gap" title="二十一世纪" subtitle="" content=""></TextUnit2>
    <div class="md-layout md-alignment-center">
      <ImageCollection :images="collectionData.twentyFirst" class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90"></ImageCollection>
    </div>
    <!-- <div class="bottom-gap md-layout md-alignment-center">
      <div class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">

      </div>
    </div> -->
    <BottomNav lastChapter="公屋安居" nextChapter="全港公屋地图" nextPath="mapping" lastPath="policy"></BottomNav>
  </div>
</template>

<script>
import TopImage from "../../components/TopImage";
import BottomNav from "../../components/BottomNav";
import TextUnit2 from "../../components/TextUnit2";
import TextUnit from "../../components/TextUnit";
import ImageCollection from "../../components/ImageCollection";
import imageCollectionData from "../../assets/image_collection_data.js";
export default {
  data() {
    return {
      collectionData: imageCollectionData
    };
  },
  components: { TopImage, BottomNav, TextUnit2, TextUnit, ImageCollection }
};
</script>

<style scoped>
</style>