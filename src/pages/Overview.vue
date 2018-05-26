<template>
    <div class="page">
        <TopImage title="漩涡中的香港住房问题" background="top-1"></TopImage>
        <TextUnit title="哥伦比亚的金童" subtitle="梦幻般的世界杯之旅" content="香港公共房屋或称公营房屋，是香港经由政府、公营机构或非牟利机构为低收入市民而兴建的公共房屋。香港公共房屋可分为出租永久房屋、资助出售房屋、出租临时房屋数种，主要由香港房屋协会（房协）及香港房屋委员会（房委会）提供，但由房屋署统一管理。"></TextUnit>
        <div id="overview-map" class="page-content full-width">
          <h2 class="text-white">公屋地图 - 建造与历史发展</h2>
          <h5 class="text-white">两大事件成就了哈梅斯令人瞩目的一年 - 对战乌拉圭的进球以及加盟皇家马德里。</h5>
          <a class="card-button">
            开始游览
          </a>
          <!-- <Card></Card> -->
          
        </div>
        <!-- <iframe width="100%" height="480" src="https://lbs.amap.com/dev/mapdata/share/82ed89bf82eee5173a32605e761c507f" frameborder="0"></iframe> -->
        
        <!-- <div class="page-content full-width">
          
        </div> -->
            <!-- <Chart></Chart>
            <h4>请欣赏公屋视频</h4>
            <Video></Video> -->
        
    </div>
</template>

<script>
import Card from "../components/Card";
import Chart from "../components/Chart";
import Video from "../components/Video";
import TopImage from "../components/TopImage";
import TextUnit from "../components/TextUnit";

export default {
  mounted() {},
  components: {
    Card,
    Chart,
    Video,
    TopImage,
    TextUnit
  }
};
</script>

<style>
/* 规定h标签字号 */
h2 {
  font-size: 38px;
}
h5 {
  font-size: 17px;
  padding-top: 1.5em;
}

.text-white {
  color: white;
}
.page .page-content {
  height: auto;
  /* display: flex;
  flex-direction: column; */
  align-self: center;
  text-align: center;
  padding: 80px 0 80px 0;
}
.full-width {
  width: 100%;
}
.page h4,
h2,
h5 {
  margin: 0;
  text-align: center;
  font-weight: 300;
  line-height: 1.4;
}

#overview-map {
  background-color: #283593;
  /* height: 100%; */
}

.card-button {
  color: #283593;
  background: white;
  display: inline-block;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 2px;
  letter-spacing: 0.5px;
  line-height: 1.5em;
  margin-top: 28px;
  padding-bottom: 12px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 12px;
  text-align: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
</style>