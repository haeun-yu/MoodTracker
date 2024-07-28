<template>
  <div class="flex flex-col gap-[30px]">
    <section class="w-full flex items-end justify-between">
      <div>
        <h1 class="text-4xl-bold mb-[10px]">월간 리포트</h1>
        <p>
          {{ year }}년 {{ month }}월달의 감정 변화를 분석했어요. 나의 감정 패턴을 이해하고
          되새겨보는 시간을 가져보세요.
        </p>
      </div>
      <div class="flex items-center gap-[10px]">
        <button class="btn-tertiary" @click="prevMonth">
          <img src="/icons/arrow-left.svg" class="w-[40px]" />
        </button>
        <button class="btn-tertiary" @click="nextMonth">
          <img src="/icons/arrow-left.svg" class="w-[40px] -scale-x-100" />
        </button>
      </div>
    </section>

    <section v-if="isNextMonth">
      <p class="text-lg-bold text-[#888888]">
        아직 해당 달이 지나지 않았기 때문에 리포트를 생성할 수 없습니다.
      </p>
    </section>

    <section
      v-if="!isNextMonth && !hasReport"
      class="w-full h-full flex items-center justify-center"
    >
      <p class="text-lg-bold text-[#888888] animate-bounce">분석 중 입니다...</p>
    </section>

    <section v-if="!isNextMonth && hasReport" class="flex flex-col gap-[30px]">
      <article class="flex gap-[20px] h-[300px]">
        <div class="w-[35%] boxs gap-[10px]">
          <label class="text-lg-bold">{{ year }}년 {{ month }}월 감정 순위</label>
          <p class="text-[#607D8B]">어떤 감정을 느꼈는 지 한 눈에 확인하세요!</p>

          <div class="h-full flex flex-col justify-between">
            <div
              v-for="(emotion, key) in emotionCount"
              v-bind:key
              class="flex items-center gap-[10px]"
            >
              <img
                class="w-[40px]"
                :src="'/icons/emotions/' + emotion.emotion + '.svg'"
                alt="emotion"
              />
              <div class="w-full">
                <div
                  class="bg-[#e6afb9] h-[20px] rounded-r-[10px] mt-[5px]"
                  :style="{ width: (emotion.count / 30) * 100 + '%' }"
                ></div>
                <p class="text-[#e6afb9]">{{ emotion.emotion }}/{{ emotion.count }}회</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full boxs2 justify-between">
          <label class="text-lg-bold">아무개 님의 2024년 6월달 감정을 분석했어요</label>
          <div class="w-full h-[80%] flex gap-[20px]">
            <LineChart :data="monthScore" />
            <div class="flex flex-col gap-[10px] justify-end">
              <div class="flex items-center gap-[5px]">
                <div
                  class="text-center w-[45px] rounded-[40px] bg-white text-sm-semibold text-[#E9ACAC]"
                >
                  + 1
                </div>
                <img class="w-[20px]" src="/icons/emotions/Happy.svg" alt="Happy" />
                <img class="w-[20px]" src="/icons/emotions/Proud.svg" alt="Proud" />
                <img class="w-[20px]" src="/icons/emotions/Excited.svg" alt="Excited" />
                <img class="w-[20px]" src="/icons/emotions/Grateful.svg" alt="Grateful" />
              </div>

              <div class="flex items-center gap-[5px]">
                <div
                  class="text-center w-[45px] rounded-[40px] bg-white text-sm-semibold text-[#E9ACAC]"
                >
                  0
                </div>
                <img class="w-[20px]" src="/icons/emotions/IDK.svg" alt="IDK" />
              </div>

              <div class="flex items-center gap-[5px]">
                <div
                  class="text-center w-[45px] rounded-[40px] bg-white text-sm-semibold text-[#E9ACAC]"
                >
                  - 1
                </div>
                <img class="w-[20px]" src="/icons/emotions/Sad.svg" alt="Sad" />
                <img class="w-[20px]" src="/icons/emotions/Angry.svg" alt="Angry" />
                <img class="w-[20px]" src="/icons/emotions/Panicked.svg" alt="Panicked" />
                <img class="w-[20px]" src="/icons/emotions/Exhausted.svg" alt="Exhausted" />
              </div>
            </div>
          </div>
          <p class="text-sm-light">*사용자 기록을 점수로 변환하여 누적 합산한 결과입니다.</p>
        </div>
      </article>

      <article class="boxs w-full text-black gap-[10px]">
        <p>To. {{ user!.name }}</p>

        <pre>{{ report }}</pre>

        <p class="w-full text-end">From. Mood Tracker</p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue'
import authAPI from '@/api/auth'
import calendarAPI from '@/api/calendar'
import reportAPI from '@/api/report'
import Gemini from '@/api/gemini'
import LineChart from '@/components/chart/LineChart.vue'
import { useRoute, useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast.store'

const route = useRoute()
const router = useRouter()
const { addToast } = useToastStore()
const gemini = ref<Gemini | null>(null)

const hasReport = ref(true)
const isNextMonth = ref(false)

const report = ref<string | null>(null)
const emotionCount = ref<{ emotion: string; count: number }[]>([])
const monthScore = ref<number[]>([10, 2, -10, 0, 20, 13, 8, 0, 0, 0, 1, 0])

const id = route.params.id as string
const year = ref<string>()
const month = ref<string>()

const user = ref<User | null>({
  name: 'name',
  email: 'user@test.test'
})

onBeforeMount(async () => {
  year.value = id.split('-')[0]
  month.value = id.split('-')[1]

  const checkLoginResponse = await authAPI.checkLogin()
  if (!checkLoginResponse) {
    addToast({
      message: '로그인이 필요합니다.'
    })
    router.push('/login')
  }

  const getUserResponse = await authAPI.getInformation()
  if (!getUserResponse) {
    addToast({
      message: '사용자 정보를 불러오는데 실패했습니다.'
    })
    router.push('/login')
  }
  user.value = getUserResponse

  await getDatas()
})

watch([year, month], async () => {
  await getDatas()
})

const getDatas = async () => {
  const now = new Date()
  const nowYear = now.getFullYear()
  const nowMonth = now.getMonth() + 1

  if (+year.value! > nowYear || (+year.value! === nowYear && +month.value! >= nowMonth)) {
    isNextMonth.value = true
  } else {
    isNextMonth.value = false
    return
  }

  report.value = await reportAPI.getReport(user.value!.name, `${year.value!}-${month.value!}`)
  monthScore.value = await reportAPI.getMonthScore(
    user.value!.name,
    `${year.value!}-${month.value!}`
  )
  emotionCount.value = await calendarAPI.getEmotionCount(
    user.value!.name,
    `${year.value!}-${month.value!}`
  )

  if (!report.value) {
    hasReport.value = false
    await handleCreateReport()
  } else {
    hasReport.value = true
  }
}

const handleCreateReport = async () => {
  gemini.value = new Gemini(handleGeminiResult)

  const prompt = ``
  gemini.value!.generate(prompt)
}

const handleGeminiResult = async (result: string) => {
  report.value = result
  await getDatas()
}

const prevMonth = () => {
  const date = new Date(+year.value!, +month.value! - 2)
  router.push(`/report/${date.getFullYear()}-${date.getMonth() + 1}`)
  year.value = date.getFullYear().toString()
  month.value = (date.getMonth() + 1).toString()
}

const nextMonth = () => {
  const date = new Date(+year.value!, +month.value! + 1)

  if (date.getFullYear() === new Date().getFullYear() && date.getMonth() >= new Date().getMonth()) {
    return
  }
  router.push(`/report/${date.getFullYear()}-${date.getMonth() + 1}`)
  year.value = date.getFullYear().toString()
  month.value = (date.getMonth() + 1).toString()
}
</script>

<style scoped>
pre {
  padding: 20px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  white-space: pre-wrap;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.boxs {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.boxs2 {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 10px;
  padding: 20px;
  background-color: #e6afb9;
  color: white;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}
</style>
