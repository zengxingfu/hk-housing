<template>
    <div class="page">
        <img src="https://fakeimg.pl/440x230/282828/eae0d0/?retina=1&text=Overview">
        <h4>香港公共房屋或称公营房屋，是香港经由政府、公营机构或非牟利机构为低收入市民而兴建的公共房屋。香港公共房屋可分为出租永久房屋、资助出售房屋、出租临时房屋数种，主要由香港房屋协会（房协）及香港房屋委员会（房委会）提供，但由房屋署统一管理。</h4>
        <Card></Card>
        <Chart></Chart>
        <h4>请欣赏公屋视频</h4>
        
        <Video></Video>
    </div>
</template>

<script>
import Card from "../components/Card";
import Chart from "../components/Chart";
import Video from "../components/Video";
export default {
  mounted() {},
  components: {
    Card,
    Chart,
    Video
  }
};
</script>

<style scoped>
.page h4 {
  padding: 25px 0;
  text-align: center;
  line-height: 150%;
}
</style>