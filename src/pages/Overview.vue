<template>
    <div class="page">
        <div class="top-img">
            <div class="mask">
                <h1>Overview</h1>
            </div>
        </div>
        <div class="page-content mdl-cell--7-col">
            <h4>香港公共房屋或称公营房屋，是香港经由政府、公营机构或非牟利机构为低收入市民而兴建的公共房屋。香港公共房屋可分为出租永久房屋、资助出售房屋、出租临时房屋数种，主要由香港房屋协会（房协）及香港房屋委员会（房委会）提供，但由房屋署统一管理。</h4>
            <Card></Card>
            <Chart></Chart>
            <h4>请欣赏公屋视频</h4>
            <Video></Video>
        </div>
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

<style>
.page h4 {
  padding: 25px 0;
  text-align: center;
  line-height: 150%;
}
.top-img {
  background: url("http://ww1.sinaimg.cn/large/76a6e147ly1fr8cuutwunj20p00go42d.jpg")
    center / cover;
  width: 100%;
  height: 360px;
}

.top-img > .mask {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-img > .mask > h1 {
  color: white;
}
.page-content {
  align-self: center;
}
</style>