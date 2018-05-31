<template>
    <md-card>
      <md-card-header class="chart-header">
        <div class="md-title">全港公屋地图</div>
        <div class="md-subhead">点的大小用来体现公屋户数大小</div>
      </md-card-header>
          <md-card-content>
            <iframe src="https://lbs.amap.com/dev/mapdata/share/fa7b6909a1d9d15476068709d25bc5a6" frameborder="0"></iframe>
          </md-card-content>
      
    </md-card>
</template>


<script>
export default {};
</script>

<style scoped>
.chart-header {
  border-bottom: 1px solid #e0e0e0 !important;
  padding: 1px 0 8px 24px;
}

iframe {
  width: 100%;
  height: 576px;
}

.md-card-content {
  padding: 0;
}
</style>