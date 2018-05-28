<template>
    <div class="page-content">
        <TopImage title="漩涡中的香港住房问题" background="top-1"></TopImage>
        <TextUnit title="施老师说这里有一个卷首语" subtitle="卷首语的副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
        <ImageCard></ImageCard>
        <TextUnit title="施老师说这里有一个媒体报道" subtitle="媒体报道的副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit>
        <Chart class="bottom-gap" chartId="yahaha"></Chart>
        <TextUnit2 title="施老师说这里有一个文案占位" subtitle="文案占位的副标题" content="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"></TextUnit2>
        <Chart class="bottom-gap top-gap" chartId="ohoho"></Chart>
        <Chart class="bottom-gap top-gap" chartId="ihihi"></Chart>
        <ImageCard class="bottom-gap"></ImageCard>
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

<style scoped>
/* 覆盖样式 */
.top-gap {
  margin-top: 4em;
}

.bottom-gap {
  margin-bottom: 4em;
}
</style>