<template>
  <div class="relative flex flex-col items-center justify-center h-full rounded-lg">
    <canvas ref="doughnutChart" class="w-[130px]"></canvas>
    <div class="absolute flex flex-col items-center justify-center inset-0 text-white w-[130px]">
      <div class="text-2xl-bold">{{ monthlyCount }}/{{ endOfDay }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js'

// Chart.js에 필요한 컴포넌트를 등록
Chart.register(DoughnutController, ArcElement, Tooltip, Legend)

type Props = {
  monthlyCount: number
  endOfDay: number
}

const props = defineProps<Props>()

const doughnutChart = ref<HTMLCanvasElement | null>(null)
let chartInstance: Chart | null = null

const createChart = () => {
  if (chartInstance) chartInstance.destroy()

  if (doughnutChart.value) {
    chartInstance = new Chart(doughnutChart.value, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [props.monthlyCount, props.endOfDay - props.monthlyCount],
            backgroundColor: ['#a78bfa', '#e5e7eb'],
            borderWidth: 0,
            borderRadius: 5
          }
        ]
      },
      options: {
        cutoutPercentage: 90, // not working
        cutout: '80%',
        rotation: -150,
        circumference: 300,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      }
    })
  }
}

onMounted(() => {
  createChart()
})

watch([() => props.monthlyCount, () => props.endOfDay], createChart)
</script>

<style scoped>
/* Add any additional styles here */
</style>
