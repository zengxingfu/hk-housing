<template>
    <md-card>
      <md-card-header class="chart-header">
        <div class="md-title">全港公屋地图</div>
        <div class="md-subhead">地图上每个点表示一个公营房屋屋邨，点的大小表示屋邨规模大小，点的颜色表示用来区分公屋入伙时间。点击地图上的点，可以了解屋邨的详细信息。</div>
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