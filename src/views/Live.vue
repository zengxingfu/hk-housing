<template>
  <div>
    <TopImage title="狮子山下" background="top-2"></TopImage>
    <TextUnit2 title="" subtitle="" content="在香港，住在保障性住宅中的居民并非少数。约半数的香港居民租住或购买了香港政府组织兴建的保障性住宅。从整体比例上来看，香港政府提供的保障性住房的覆盖程度并不低。对于很多港人来说，维港的繁华或深水埗的破败，都并非日常。狮子山下密布的公共屋邨里平实的烟火气，才是生活。"></TextUnit2>
    
    <TextUnit title="约三成居民租住公屋" subtitle="" content="香港的住房大致可以分为四种：公屋、居屋、私人楼宇和其他房屋。其中，公屋和居屋是由香港政府组织兴建的保障性住房。公屋相当于中国内地的廉租房，只可租赁；居屋相当于中国内地的经济适用房，以低于市场价向符合收入条件的市民出售。在香港，有大约28.9%的居民租住在政府提供的公屋中，15.2%的居民购买了居屋。"></TextUnit>
    <div class="md-layout md-alignment-center">
      <ImageCard title="" subtitle="" class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <img src="../assets/live-1.png" alt="">
      </ImageCard>
    </div>
    <TextUnit title="公屋轮候首先满足养老需求" subtitle="" content="香港公屋的申请者必须满足：18岁以上、香港长期居民以及收入限额这三个条件。由于香港社会步入老龄化，公屋同时也承担了一部分养老功能。60岁以上的老年人或者与60岁以上亲属共同居住的家庭，在申请过程中拥有较高的优先级，轮候时间较短。以个人为单位申请公屋的中青年人在轮候过程中的优先级最低。这意味着，香港的年轻人，如果想通过申请公屋拥有独立空间，搬离父母家，是比较艰难的。"></TextUnit>
    <div class="md-layout md-alignment-center">
      <ImageCard title="" subtitle="" class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <img src="../assets/live-2.png" alt="">
      </ImageCard>
    </div>
    <TextUnit title="公屋居民密集居住在狮子山下" subtitle="" content="香港的热门旅游景点与游客熟知的目的地大多分布在维港两岸的港岛湾仔区和中西区，以及九龙的油尖旺区。其中，湾仔是全港18区中唯一没有公屋分布的区。中西区和油尖旺区的公屋居民占比也低至可以基本忽略不计。公屋居民占整体居民比例最高的是观塘区，区内半数以上的居民租住在公屋中。而这里，也正是香港人口密度最大的地方，每平方公里的居民数超过5万人。与观塘区毗邻的是黄大仙区，这里也是香港人口密度和公屋居民比例双高的地区。在观塘区和黄大仙区的大部分地方，抬头在楼林的缝隙中搜寻，目力所及的范围内，都可以看到香港的狮子山。1973年，香港电视台开始连续21年播放一部单元剧《狮子山下》，讲述着香港普通市民逆境自强的励志故事。对于很多港人来说，维港的繁华或是深水埗的潦倒，都并非日常。狮子山下平实的烟火气，才是生活。"></TextUnit>
    <div class="md-layout md-alignment-center">
      <ImageCard title="" subtitle="" class="md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <img src="../assets/live-3.png" alt="">
      </ImageCard>
    </div>
    <!-- <TextUnit title="请欣赏视频" subtitle="" content=""></TextUnit> -->
    
    <div class="top-gap md-layout md-alignment-center">
      <video controls preload="preload" :poster="poster" class="md-elevation-2 bottom-gap md-layout-item md-xlarge-size-60 md-large-size-70 md-medium-size-80 md-small-size-90">
        <source src="https://1252644334.vod2.myqcloud.com/99de09e9vodtransgzp1252644334/c57e77347447398156356475407/v.f20.mp4" type="video/mp4">
      </video>
    </div>
    <BottomNav lastChapter="舆论漩涡" nextChapter="供需迷局" nextPath="supply" lastPath="overview"></BottomNav>

  </div>
</template>

<script>
import TopImage from "../components/TopImage";
import TextUnit from "../components/TextUnit";
import TextUnit2 from "../components/TextUnit2";
import ImageCard from "../components/ImageCard";
import BottomNav from "../components/BottomNav";
import videoPoster from "../assets/60year.jpg";
export default {
  data() {
    return {
      poster: videoPoster
    };
  },
  components: { TopImage, BottomNav, TextUnit, TextUnit2, ImageCard }
};
</script>

<style scoped>
video {
}
</style>