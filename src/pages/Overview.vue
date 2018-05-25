<template>
    <div class="page">
        <div class="top-img">
            <div class="mask">
                <h1>公屋概况</h1>
                <h4>“杰瑞德·莱托 奥斯卡”(jared leto oscar) 的搜索量在今年出现 28 倍的飙升，而他的 Instagram 帐户所获得的搜索量涨幅更高。</h4>
            </div>
        </div>
        <div id="overview-top-text" class="page-content mdl-cell--7-col">
          <h2>哥伦比亚的金童</h2>
          <h4 class="part-title">梦幻般的世界杯之旅</h4>
          <h5>香港公共房屋或称公营房屋，是香港经由政府、公营机构或非牟利机构为低收入市民而兴建的公共房屋。香港公共房屋可分为出租永久房屋、资助出售房屋、出租临时房屋数种，主要由香港房屋协会（房协）及香港房屋委员会（房委会）提供，但由房屋署统一管理。</h5>
            
        </div>
        <div id="overview-map" class="page-content full-width">
          <h2 class="text-white">公屋地图 - 建造与历史发展</h2>
          <h5 class="text-white">两大事件成就了哈梅斯令人瞩目的一年 - 对战乌拉圭的进球以及加盟皇家马德里。</h5>
          <a class="card-button">
            开始游览
          </a>
          <!-- <Card></Card> -->
          
        </div>
        <iframe width="100%" height="480" src="https://lbs.amap.com/dev/mapdata/share/82ed89bf82eee5173a32605e761c507f" frameborder="0"></iframe>
        
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
#overview-top-text h4.part-title {
  font-weight: 400;
  padding-top: 1.5em;
  font-size: 20px;
}
#overview-top-text h5 {
  padding-top: 1em;
}
.top-img {
  background: url("http://ww1.sinaimg.cn/large/76a6e147ly1fr8cuutwunj20p00go42d.jpg")
    center / cover;
  width: 100%;
  height: 720px;
}

.top-img > .mask {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 998;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top-img > .mask > h1 {
  color: white;
  font-size: 55px;
  font-weight: 300;
}
.top-img > .mask > h4 {
  color: white;
  font-size: 24px;
  padding-top: 1em;
  padding-left: 20%;
  /* padding-left: 18.75%; */
  padding-right: 20%;
  text-align: center;
  line-height: 1.4;
}

#overview-map {
  background-color: #283593;
  /* height: 100%; */
}
h2 {
  font-size: 38px;
}
h5 {
  font-size: 17px;
  padding-top: 1.5em;
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