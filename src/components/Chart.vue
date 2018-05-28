<template>
    <div class="md-layout md-alignment-center">
        <md-card class="md-layout-item md-xlarge-size-50 md-large-size-75 md-medium-size-75 md-small-size-100 card-chart">
            <canvas :id="chartId"></canvas>
        </md-card>
    </div>
</template>

<script>
import Chart from "chart.js";
import chartData from "../assets/chart_data.js";
export default {
  props: ["chartId"],
  mounted() {
    let ctx = document.getElementById(this.chartId);
    let cfg = chartData[this.chartId];
    let myChart = new Chart(ctx, cfg);
  }
};
</script>

<style scoped>
.card-chart {
  padding: 2%;
}
</style>