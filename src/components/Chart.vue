<template>
    <md-card>
      <md-card-header class="chart-header">
        <div class="md-title">{{ chartTitle }}</div>
        <div class="md-subhead">数据来源：{{dataSource}}</div>
      </md-card-header>
          <md-card-content>
            <canvas :id="chartId"></canvas>
          </md-card-content>
      
    </md-card>
</template>


<script>
import Chart from "chart.js";
import chartData from "../assets/chart_data.js";
export default {
  props: ["chartId"],
  computed: {
    chartTitle() {
      return chartData[this.chartId].options.title.text;
    },
    dataSource() {
      return chartData[this.chartId].options.dataSource.text;
    }
  },
  mounted() {
    let ctx = document.getElementById(this.chartId);
    let cfg = chartData[this.chartId];
    let myChart = new Chart(ctx, cfg);
  }
};
</script>

<style scoped>
.chart-header {
  border-bottom: 1px solid #e0e0e0 !important;
  padding: 0 0 8px 24px;
}
</style>