<template>
  <div
    v-if="props.data"
    class="w-[80%] h-full bg-white rounded-[10px] py-[10px] pl-[30px] pr-[20px] relative"
  >
    <canvas ref="chartCanvas" />
    <img src="/icons/positive.svg" alt="happy" class="absolute top-[10px] left-[10px] w-[20px]" />
    <img src="/icons/negative.svg" alt="sad" class="absolute bottom-[10px] left-[10px] w-[20px]" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, defineProps } from 'vue'
import { Chart, registerables } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'

interface Props {
  data: number[]
}
const props = defineProps<Props>()

const chartCanvas = ref<HTMLCanvasElement | null>(null)
let chart: Chart | null = null
const chartOptions: any = {
  type: 'line',
  data: {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [
      {
        data: props.data,
        borderColor: '#855CF8',
        backgroundColor: 'rgba(91, 60, 255, 0.2)',
        pointBackgroundColor: '#855CF8',
        pointBorderColor: '#fff',
        pointRadius: 6,
        pointHoverRadius: 7,
        borderWidth: 1,
        tension: 0.4
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#855CF8'
        }
      },
      y: {
        suggestedMin: -31,
        suggestedMax: 100,
        grid: {
          display: false
        },
        ticks: {
          callback: (value: number) => {
            return value === 0 ? '0' : ''
          },
          color: 'black'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        // enabled: false
        backgroundColor: '#855CF8',
        callbacks: {
          label: (context: any) => {
            return `${context.raw}점`
          },
          title: () => ''
        },
        displayColors: false,
        yAlign: 'bottom'
      },
      annotation: {
        annotations: {
          yLine: {
            type: 'line',
            scaleID: 'y',
            value: '0',
            borderWidth: 1,
            label: {
              content: 'y = 0',
              enabled: true,
              position: 'end'
            }
          }
        }
      }
    }
  }
}

onMounted(() => {
  Chart.register(...registerables, annotationPlugin)
  chart = new Chart(chartCanvas.value!, chartOptions)
})

watch(
  () => props.data,
  (newData) => {
    chart!.data.datasets[0].data = newData
    chart?.update()
  },
  { deep: true }
)
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 400px;
  width: 100%;
}

canvas {
  display: block;
  width: 100% !important;
  height: 100% !important;
}

.custom-tooltip {
  background: rgba(91, 60, 255, 0.8);
  color: white;
  padding: 5px;
  border-radius: 5px;
}
</style>
