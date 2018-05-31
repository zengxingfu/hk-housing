<template>
  <div>
    <TopImage title="供需迷局" background="top-3"></TopImage>
    <TextUnit title="六成香港贫穷人口并未住进公屋" subtitle="" content="从定义上来看，公屋是由香港政府主导，由香港房委会和房协向低收入人群提供租赁的保障性住房。那么，公屋的供应理应首先满足香港贫穷人口的住房需求。然而香港特区政府统计处发布的2016年统计年鉴显示，香港的贫穷人口中，仅有四成住进了租金低廉的公屋。六成贫穷人口并不在公屋的住房保障下。"></TextUnit>
    <div class="md-layout md-alignment-center">
      <Chart class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="povertyHousing"></Chart>
    </div>
    <TextUnit class="bottom-gap-negative" title="公屋资源分配严重不均" subtitle="" content="截止2016年底，全港贫穷人口总数为99.6万人，占香港总人口的12%，同年，香港公屋的认可居民数达到了香港总人口的28%。在理想的情况下，香港公屋的供应量应该完全可以满足香港贫穷人口的住房需求。但但这却和实际情况大相径庭。这说明，公屋的资源分配严重不均。"></TextUnit>
    <div class="md-layout md-alignment-center">
      <Chart class="top-gap md-layout-item md-xlarge-size-30 md-large-size-35 md-medium-size-80 md-small-size-90" chartId="poverty"></Chart>
      <Chart class="top-gap md-layout-item md-xlarge-size-30 md-large-size-35 md-medium-size-80 md-small-size-90" chartId="housingPie"></Chart>
    </div>
    
    <TextUnit class="bottom-gap-negative" title="家庭结构变化导致公屋需求状况改变" subtitle="" content="过去30年间，香港人口虽然在增长，但是增速较为平缓，人口增长并非导致公屋供需失衡的原因。而与此同时，港人的家庭结构却发生了急剧变化。由于生育率的降低和结婚年龄的推迟，香港的家庭住户平均人数在过去30年间明显减少。80年代普遍的4口之家，现今已缩减为不到3口。与此同时，青年人对于个人空间的重视也令他们渴望搬离父母家，拥有自己的独立居所。香港房委会公布的数据显示，过去20年间，公屋非长者（60岁以下）一人申请的个案数持续增长。2017年，公屋非长者一人申请数占总申请数的比例已接近50%；而在1999年，这一比例尚为13%。小家庭与一人申请个案的增加推高了公屋的需求量。受此影响，香港公屋单位数和认可居民总数变化趋势出现倒挂。香港公屋单位总数在不断增加，但公屋容纳的居民总量持续下滑。"></TextUnit>

    <div class="bottom-gap md-layout md-alignment-center">
      <Chart class="top-gap md-layout-item md-xlarge-size-30 md-large-size-35 md-medium-size-80 md-small-size-90" chartId="hkPopulation"></Chart>
      <Chart class="top-gap md-layout-item md-xlarge-size-30 md-large-size-35 md-medium-size-80 md-small-size-90" chartId="hkFamily"></Chart>
    </div>
    
    <div class="top-gap bottom-gap md-layout md-alignment-center">
      <Chart class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="unitAndPopulation"></Chart>
    </div>
    <div class="md-layout md-alignment-center">
      <Chart class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="elder"></Chart>
    </div>
    <TextUnit title="公屋资源接近满负荷运转" subtitle="" content="从政府部门的公屋申请处理效率上来看，公屋空置率逐年下降，2016年的公屋空置率仅为0.5%，达到历史最低点。在香港特区政府的努力下，公屋资源接近满负荷运转，但依然不能解决贫穷人口的住房问题，公屋轮候时间也还在逐年攀升。公屋供不应求的情况的确存在，但这一问题绝不可简单归结为公屋供应量不足。 一方面家庭结构的变化令单人或小家庭申请个案数激增，推高了公屋需求；另一方面，大量非贫穷人口挤占了公屋资源，公屋资源分配出现严重不均。"></TextUnit>
    
    <div class="md-layout md-alignment-center">
      <Chart class="bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90" chartId="vacancy"></Chart>
    </div>
    <BottomNav lastChapter="狮子山下" nextChapter="人居变迁" nextPath="environment" lastPath="live"></BottomNav>
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