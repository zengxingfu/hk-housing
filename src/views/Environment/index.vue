<template>
    <div>
        <TopImage title="人居变迁" background="top-4"></TopImage>    
        <TextUnit2 title="" subtitle="" content="公屋制度在香港已经推行了60年，公屋政策的以安置为目的的初衷已被改善居住环境所替代。公屋的建设目的，实际上已经发生了迁移。香港公屋历经了数个建设发展阶段。人居环境得到明显改善，居民对于居住环境的满意度不断提升。最近的居民调查显示，四分之三的香港公屋居民对于公屋的管理及服务表示非常满意或满意。"></TextUnit2>
        
        <TextUnit title="公营房屋的安置初衷早已改变" subtitle="" content="20世纪40年代中期，处于内忧外患下的香港开始出现“房荒”的问题。许多无房的居民在公共或私人土地上利用简陋的铁皮和木板非法自行搭建住宅，这些房屋也被称为“寮屋”。1954年，位于香港九龙石硖尾的寮屋区发生了史无前例的大火，这场大火使得5万多寮屋居民露宿街头，同时也迫使政府开始关注并介入居民的住房问题，重新审视住房政策，成为政府为居民兴建公共住房的起点。此后，香港的公营房屋建设历经了3个阶段。1972年，当时港英政府通过“十年建屋计划”，公屋的大规模、标准化建设由此而始。随着大批公屋的落成，当时的香港低收入人群陆续迁入，居住环境得到明显改善。此后，香港政府的建屋与修缮计划多以“改善居住环境、提高生活质素”为目的，供应的安置初衷已被改善居住环境所替代。"></TextUnit>
                <ImageCard class="no-margin" title="" subtitle="">
        <img src="../../assets/environment-2.png" alt="">
    </ImageCard>
        <TextUnit title="香港政府多种努力改善居住环境" subtitle="" content="公屋的建设与香港的城市规划互为表里。香港政府通过延续多年、渐进式的努力，逐渐将香港由单一中心的贸易港发展为多中心的现代化大都市。人口密集的城市中心区人口逐渐向新界其他地区的新市镇迁移。这一过程缓慢、有序，变化并不剧烈但在持续进行。与此同时，公屋的居住环境也得到了显著的改善。香港公屋的人均居住面积从上世纪90年代的7.8平方米，一路增加到2014年的13平方米，几乎翻了一倍。随着香港政府多年以来对于公屋设计标准的改良、配套设施以及管理的优化，公屋居民对于居住环境的满意度不断提升。最近的居民调查显示，四分之三的香港公屋居民对于公屋的管理及服务表示非常满意或满意。"></TextUnit>
    
    <div class="md-layout md-alignment-center">
      <Chart class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="housingChange"></Chart>
    </div>
    <TextUnit2>
        <img src="../../assets/environment-1.png" alt="">
    </TextUnit2>
      <div class="top-gap md-layout md-alignment-center">
      <Chart class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="satisfaction"></Chart>
    </div>

    
        <BottomNav lastChapter="供需迷局" nextChapter="公屋安居" nextPath="policy" lastPath="supply"></BottomNav>
    </div>
</template>

<script>
import TopImage from "../../components/TopImage";
import TextUnit from "../../components/TextUnit";
import TextUnit2 from "../../components/TextUnit2";
import Chart from "../../components/Chart";
import BottomNav from "../../components/BottomNav";
import ImageCard from "../../components/ImageCard";
import ImageCollection from "../../components/ImageCollection";
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