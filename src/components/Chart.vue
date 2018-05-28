<template>
    <div class="md-layout md-alignment-center">
        <md-card class="md-layout-item md-xlarge-size-50 md-large-size-75 md-medium-size-75 md-small-size-100 card-chart">
            <canvas :id="chartId"></canvas>
        </md-card>
    </div>
</template>

<script>
import Chart from "chart.js";
export default {
  props: ["chartId"],
  mounted() {
    let ctx = document.getElementById(this.chartId);
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "公屋申请平均轮候时长",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
};
</script>

<style scoped>
.card-chart {
  padding: 2%;
}
</style>