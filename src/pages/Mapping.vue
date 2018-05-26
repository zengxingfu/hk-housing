<template>
    <div class="page">
        <TopImage title="香港公屋地图" background="top-6"> </TopImage>
        <TextUnit title="哥伦比亚的金童" subtitle="梦幻般的世界杯之旅" content="香港公共房屋或称公营房屋，是香港经由政府、公营机构或非牟利机构为低收入市民而兴建的公共房屋。香港公共房屋可分为出租永久房屋、资助出售房屋、出租临时房屋数种，主要由香港房屋协会（房协）及香港房屋委员会（房委会）提供，但由房屋署统一管理。"></TextUnit>
        <div class="mapping-container">
            <iframe src="https://lbs.amap.com/dev/mapdata/share/82ed89bf82eee5173a32605e761c507f" frameborder="0"></iframe>
        </div>

    </div>
</template>

<script>
import TopImage from "../components/TopImage";
import TextUnit from "../components/TextUnit";

export default {
  components: {
    TopImage,
    TextUnit
  }
};
</script>

<style scoped>
.mapping-container {
  text-align: center;
}
.mapping-container iframe {
  display: inline-block;
  width: 75%;
  height: 720px;
}
</style>