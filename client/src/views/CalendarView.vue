<template>
  <div>
    <h1 class="text-4xl-bold mb-[10px]">Calendar</h1>
    <div class="flex justify-between">
      <section class="w-[70%] calendar-container">
        <article class="calendar-box">
          <table class="text-center w-full">
            <thead>
              <tr>
                <th v-for="(weekName, index) in weekNames" :key="index" class="text-sm-bold">
                  <p class="th">{{ weekName }}</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(week, index) in currentCalendarMatrix" :key="index">
                <td
                  v-for="(day, index2) in week"
                  :key="index2"
                  class="td"
                  :class="day === 0 ? 'bg-[#DDDDDD]' : 'bg-white cursor-pointer'"
                  @click="handleDate(day)"
                >
                  <div class="w-full h-full flex flex-col justify-between p-[5px]">
                    <p class="text-start text-sm-bold ml-[3px]">
                      {{ day !== 0 ? day : '' }}
                    </p>

                    <div class="w-full flex items-center justify-center">
                      <img
                        v-if="getDiary(day)"
                        class="w-[40%]"
                        :src="'/icons/emotions/' + getDiary(day)?.emotion + '.svg'"
                        alt="emotion"
                      />
                    </div>

                    <span></span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </article>

        <article class="flex flex-col items-center gap-[20px] w-[27%]">
          <div class="boxs w-full text-2xl-bold items-center">
            {{ currentYear }}/{{ currentMonth }}
          </div>

          <div class="w-full flex items-center gap-[10px] text-base-medium">
            <button class="boxs items-center" @click="prevMonth">지난 달</button>
            <button class="boxs items-center" @click="nextMonth">다음 달</button>
          </div>

          <div class="boxs text-base-medium">
            <p>최장 연속 기록</p>
            <p class="text-center">{{ longestConsecutive }}일</p>
          </div>

          <div class="boxs text-base-medium">
            <p>주간 평균 기록</p>
            <p class="text-center">{{ weeklyAverage }}일</p>
          </div>

          <div class="boxs2 text-base-medium">
            <p class="mb-[10px]">이달 작성 횟수</p>
            <div class="flex items-end justify-center">
              <doughnutChart
                :monthlyCount="monthlyCount"
                :endOfDay="getEndOfDay(currentYear, currentMonth)"
              />
              <p>회</p>
            </div>
          </div>
        </article>
      </section>

      <section class="w-[28%]">
        <article class="flex flex-col gap-[13px] py-[10px] border-b-[1.5px] border-black">
          <div class="boxs text-2xl-bold text-center">이달의 감정</div>
          <div class="boxs2 gap-[15px]">
            <div
              v-for="(emotion, key) in emotionCount"
              v-bind:key
              class="flex items-center gap-[10px] px-[20px]"
            >
              <img
                class="w-[40px]"
                :src="'/icons/emotions/' + emotion.emotion + '.svg'"
                alt="emotion"
              />
              <div class="w-full">
                <div
                  class="bg-white h-[20px] rounded-r-[10px] mt-[5px]"
                  :style="{ width: (emotion.count / 30) * 100 + '%' }"
                ></div>
                <p>{{ emotion.emotion }}/{{ emotion.count }}회</p>
              </div>
            </div>
          </div>
        </article>

        <article
          class="mt-[10px] w-full flex flex-col items-start gap-[20px] bg-white shadow-md p-[20px] rounded-[20px]"
        >
          <p class="w-full flex justify-end text-[#B49BC5] text-xl-medium">
            이 달의 리포트 분석이에요
          </p>
          <RouterLink :to="'/report/' + currentYear + '-' + currentMonth" class="btn-route"
            >리포트 확인하기</RouterLink
          >
        </article>

        <article
          class="mt-[10px] w-full flex flex-col items-start gap-[20px] bg-[#B49BC5] shadow-md p-[20px] rounded-[20px]"
        >
          <p class="w-full text-white text-xl-medium">오늘의 감정을 기록하세요</p>
          <div class="w-full flex justify-end">
            <RouterLink to="/today" class="btn-route2">기록하러 가기</RouterLink>
          </div>
        </article>
      </section>
    </div>
  </div>
  <DiaryModal v-if="isModalOpen" :diary="selectedDiary" @close="isModalOpen = false" />
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue'
import authAPI from '@/api/auth'
import calendarAPI from '@/api/calendar'
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast.store'
import doughnutChart from '@/components/chart/DoughnutChart.vue'
import DiaryModal from '@/components/modal/DiaryModal.vue'

const router = useRouter()
const { addToast } = useToastStore()

const endOfDay = ref<number | null>(null)
const ROOT_YEAR = 2001
const ROOT_DAY_OF_WEEK_INDEX = 1
const currentCalendarMatrix = ref<number[][]>([])
const currentMonthStartWeekIndex = ref<number | null>(null)
const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const currentYear = ref<number>(0)
const currentMonth = ref<number>(0)

const user = ref<User | null>(null)
const diaryList = ref<Diary[]>([])

const longestConsecutive = ref<number>(0)
const weeklyAverage = ref<number>(0)
const monthlyCount = ref<number>(0)
const emotionCount = ref<{ emotion: string; count: number }[]>([])

const selectedDiary = ref<Diary>()
const isModalOpen = ref<boolean>(false)

onBeforeMount(async () => {
  // const response = await authAPI.checkLogin()
  // if (!response) {
  //   addToast({
  //     message: '로그인이 필요합니다.'
  //   })
  //   router.push('/login')
  // }
  // user.value = await authAPI.getInformation()
  // currentYear.value = new Date().getFullYear()
  // currentMonth.value = new Date().getMonth() + 1
  // init()
  // await getDatas()
})

watch([currentYear, currentMonth], async () => {
  init()
  await getDatas()
})

const getDatas = async () => {
  diaryList.value = await calendarAPI.getDiaryList(
    user.value!.name,
    `${currentYear.value}-${currentMonth.value}`
  )
  emotionCount.value = await calendarAPI.getEmotionCount(
    user.value!.name,
    `${currentYear.value}-${currentMonth.value}`
  )
  monthlyCount.value = await calendarAPI.getMonthlyCount(
    user.value!.name,
    `${currentYear.value}-${currentMonth.value}`
  )
  longestConsecutive.value = await calendarAPI.getLongestConsecutive(
    user.value!.name,
    `${currentYear.value}-${currentMonth.value}`
  )
  weeklyAverage.value = await calendarAPI.getWeeklyAverage(
    user.value!.name,
    `${currentYear.value}-${currentMonth.value}`
  )
}

const init = () => {
  currentMonthStartWeekIndex.value = getStartWeek(currentYear.value, currentMonth.value)
  endOfDay.value = getEndOfDay(currentYear.value, currentMonth.value)
  initCalendar()
}

const initCalendar = () => {
  currentCalendarMatrix.value = []
  const weeksCount = Math.ceil((endOfDay.value! + currentMonthStartWeekIndex.value!) / 7)
  let day = 1

  for (let i = 0; i < weeksCount; i++) {
    let calendarRow: number[] = []
    for (let j = 0; j < 7; j++) {
      if (i == 0 && j < currentMonthStartWeekIndex.value!) {
        calendarRow.push(0)
      } else if (day <= endOfDay.value!) {
        calendarRow.push(day)
        day++
      } else {
        calendarRow.push(0)
      }
    }
    currentCalendarMatrix.value.push(calendarRow!)
  }
}

const getEndOfDay = (year: number, month: number) => {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31
    case 4:
    case 6:
    case 9:
    case 11:
      return 30
    case 2:
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return 29
      } else {
        return 28
      }
    default:
      console.log('unknown month ' + month)
      return 0
  }
}

const getStartWeek = (targetYear: number, targetMonth: number): number => {
  let year = ROOT_YEAR
  let month = 1
  let sumOfDay = ROOT_DAY_OF_WEEK_INDEX

  while (year < targetYear || (year === targetYear && month < targetMonth)) {
    sumOfDay += getEndOfDay(year, month)

    month++
    if (month > 12) {
      month = 1
      year++
    }
  }

  return sumOfDay % 7
}

const prevMonth = () => {
  if (currentMonth.value === 1) {
    currentYear.value--
    currentMonth.value = 12
  } else {
    currentMonth.value--
  }
}

const nextMonth = () => {
  if (currentMonth.value === 12) {
    currentYear.value++
    currentMonth.value = 1
  } else {
    currentMonth.value++
  }
}

const getDiary = (day: number) => {
  if (day === 0) return null

  const diary = diaryList.value.find((diary) => {
    const diaryDate = new Date(diary.createdAt)
    return (
      diaryDate.getFullYear() === currentYear.value &&
      diaryDate.getMonth() + 1 === currentMonth.value &&
      diaryDate.getDate() === day
    )
  })

  return diary || null
}

const handleDate = async (day: number) => {
  if (day === 0) return

  const diary = await calendarAPI.getDiary(
    user.value!.name,
    `${currentYear.value}-${currentMonth.value}-${day}`
  )
  if (diary) {
    selectedDiary.value = diary
    isModalOpen.value = true
  } else {
    addToast({
      message: '작성된 일기가 없습니다.'
    })
  }
}
</script>

<style scoped>
.calendar-container {
  padding: 30px;
  border: 1.5px solid #eeeeee;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  background-color: #fcf7ff;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.calendar-box {
  width: 70%;
  border: 1.5px solid #eeeeee;
  border-radius: 20px;
  padding: 20px;
  min-height: calc(60vh);
  display: flex;
  justify-content: center;
  background-color: white;
  box-shadow: inset 0 2px 10px 0 rgb(0 0 0 / 0.05);
}

table {
  border-collapse: separate;
  border-spacing: 10px;
}

.th {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #d0a7eb;
  border-radius: 10px;
}

.td {
  border: 1.2px solid #222222;
  width: 70px;
  height: 70px;
  align-items: top;
  border-radius: 10px;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.boxs {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  background-color: white;
  color: #e19595;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.boxs2 {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  background-color: #e6afb9;
  color: white;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.btn-route {
  padding: 5px 20px;
  color: white;
  background-color: #b49bc5;
  border-radius: 10px;
  cursor: pointer;
  transition: all 300ms;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn-route:hover,
.btn-route:active {
  background-color: #a37abe;
  box-shadow: 0 0 #0000;
}

.btn-route2 {
  padding: 5px 20px;
  color: #826c90;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: all 300ms;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn-route2:hover,
.btn-route2:active {
  background-color: white;
  box-shadow: 0 0 #0000;
}

.btn-route:disabled,
.btn-route2:disabled {
  background-color: #a1a1a1;
  color: white;
  cursor: not-allowed;
}
</style>
