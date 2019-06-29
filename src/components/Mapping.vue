<template>
    <md-card>
      <md-card-header class="chart-header">
        <div class="md-title">全港公屋地图</div>
        <div class="md-subhead">点的大小表示屋邨规模大小，颜色区分了公屋入伙时间，点击地图上的点，可以了解屋邨的详细信息。</div>
      </md-card-header>
          <md-card-content>
              <md-tabs md-alignment="right">
                <md-tab class="mapping-container" id="maping-all" md-label="所有时期">
                  <iframe src="https://lbs.amap.com/dev/mapdata/share/fa7b6909a1d9d15476068709d25bc5a6" frameborder="0"></iframe>
                </md-tab>
                <md-tab class="mapping-container" id="mapping-50" md-label="20世纪50-60年代（图）">
                  <!-- <img :src="mappingImage50" alt=""> -->
                  <div v-bind:style="{'background-image': `url(${mappingImage50})`}" class="mapping-image"></div>
                </md-tab>
                <md-tab class="mapping-container" id="mapping-70" md-label="20世纪70-80年代（图）">
                  <!-- <img :src="mappingImage70" alt=""> -->
                  <div v-bind:style="{'background-image': `url(${mappingImage70})`}" class="mapping-image"></div>
                  
                </md-tab>
                <md-tab class="mapping-container" id="mapping-90" md-label="20世纪90年代（图）">
                  <!-- <img :src="mappingImage90" alt=""> -->
                  <div v-bind:style="{'background-image': `url(${mappingImage90})`}" class="mapping-image"></div>
                  
                </md-tab>
                <md-tab class="mapping-container" id="maping-2000" md-label="21世纪（图）">
                  <!-- <img :src="mappingImage2000" alt=""> -->
                  <div v-bind:style="{'background-image': `url(${mappingImage2000})`}" class="mapping-image"></div>
                  
                </md-tab>
            </md-tabs>
          </md-card-content>
      
    </md-card>
</template>


<script>
import mappingImage50 from "../assets/mapping-images/50.png";
import mappingImage70 from "../assets/mapping-images/70.png";
import mappingImage90 from "../assets/mapping-images/90.png";
import mappingImage2000 from "../assets/mapping-images/2000.png";
export default {
  data() {
    return {
      mappingImage50,
      mappingImage70,
      mappingImage90,
      mappingImage2000
    };
  }
};
</script>
<style lang="scss" scoped>

</style>


<style scoped>

.chart-header {
  border-bottom: 1px solid #e0e0e0 !important;
  padding: 1px 0 8px 24px;
}

.mapping-container {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
}
.mapping-image {
  height: 640px;
  background-position: center;
  background-size: cover; 
}
iframe,
img {
  width: 100%;
  height: 640px;
}

.md-card-content {
  padding: 0;
}
</style>