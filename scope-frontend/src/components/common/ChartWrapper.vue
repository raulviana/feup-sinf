<template>
  <v-container id='chart-container'>
    <bar-chart :chartData='chartData' :options='options' />
  </v-container>
</template>

<script>
import BarChart from '@/components/charts/BarChart.vue'
export default {
  name: 'ChartWrapper',
  props: [ 'stackedX', 'stackedY' ],
  components: {
    BarChart,
  },
  // computed() {

  // },
  data() {
    return {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Purchases',
            backgroundColor: '#4caf50',
            data: [40, 20, 10, 55, 32, 32, 12, 54, 30, 20, 30, 40],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'right',
        },
        scales: {
          xAxes: [
            {
              stacked: this.stackedX,
            },
          ],
          yAxes: [
            {
              stacked: this.stackedY,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    }
  }
};
</script>

<style scoped lang='scss'>

#chart-container {
  min-height: 0;
  div {
    position: relative;
    max-height: 100%;
    width: 100%;
  }
}

</style>