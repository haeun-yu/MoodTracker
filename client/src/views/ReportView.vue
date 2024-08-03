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
    </section>

    <section v-if="!hasDiary">
      <p class="text-lg-bold text-[#888888]">
        해당 달에 일기를 작성하지 않았기 때문에 리포트를 생성할 수 없습니다.
      </p>
    </section>

    <section v-if="hasDiary && isNextMonth">
      <p class="text-lg-bold text-[#888888]">
        아직 해당 달이 지나지 않았기 때문에 리포트를 생성할 수 없습니다.
      </p>
    </section>

    <section
      v-if="!isNextMonth && !hasReport && hasDiary"
      class="w-full h-full flex items-center justify-center"
    >
      <p class="text-lg-bold text-[#888888] animate-bounce">분석 중 입니다...</p>
    </section>

    <section v-if="!isNextMonth && hasReport && hasDiary" class="flex flex-col gap-[30px]">
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

    <div class="w-full flex justify-end">
      <RouterLink to="/calendar">
        <button class="text-[#855CF8] border-b-[1.5px] border-[#855CF8]">
          Calendar로 돌아가기
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
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
const hasDiary = ref(false)

const report = ref<string | null>(null)
const emotionCount = ref<{ emotion: string; count: number }[]>([])
const monthScore = ref<number[]>([])

const id = route.params.id as string
const year = ref<string>()
const month = ref<string>()

const user = ref<User | null>({
  name: '',
  email: ''
})

onMounted(async () => {
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

watch(
  [year, month],
  async () => {
    await getDatas()
  },
  { deep: true }
)

const getDatas = async () => {
  const now = new Date()
  const nowYear = now.getFullYear()
  const nowMonth = now.getMonth() + 1

  if (+year.value! > nowYear || (+year.value! === nowYear && +month.value! >= nowMonth)) {
    isNextMonth.value = true
    return
  } else {
    isNextMonth.value = false

    hasDiary.value = await reportAPI.checkReport(user.value!.name, `${year.value!}-${month.value!}`)
    if (!hasDiary.value) return

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
}

const handleCreateReport = async () => {
  gemini.value = new Gemini(handleGeminiResult)

  const prompt = `###프롬프트###
다음은 감정 기록 앱 사용자의 월간 통계입니다. 당신은 반드시 '사용자'가 '선택한 감정'의 통계 결과를 바탕으로, 사용자에게 맞춤형 피드백을 작성해야 합니다.
월간 피드백:
###데이터###
* 사용자 이름: ${user.value!.name}
* 이번 달 감정 점수 합산: ${monthScore.value[+month.value!]}
* 저번 달 감정 점수 합산: ${monthScore.value[+month.value! - 1]}
###데이터 설명###
* 감정 점수는 다음과 같은 기준으로 부여됩니다.
긍정적인 감정(+1): happy, grateful, proud, excited
중립적인 감정(0): IDK
부정적인 감정(-1): sad, angry, panicked, exhausted
사용자가 선택한 감정에 따라 위의 기준을 적용하여 감정 점수를 계산합니다.
###피드백 작성 지침###
think step by step
1. **이번 달 감정 점수 분석:**
   * 이번 달 감정 점수 합산 결과를 확인합니다.
2. **지난 달 감정 점수 분석:**
   * 지난 달 감정 점수 합산 결과를 확인합니다.
3. **지난 달과 이번 달 값 비교
   * 이번 달 감정 점수 합산 결과 - 지난 달 감정 점수 합산 결과 = result
4. **감정 분석 피드백:**
   * 절차 1부터 3에서 나온 결과를 사용자에게 전달합니다.
   * 피드백은 심리상담 전문가의 종합 의견 형식을 채택합니다.
   * 동일한 감정에 대해서도 다양한 표현 방식을 사용하여 피드백의 지루함을 해소합니다.
   * 예시: '힘든 시간을 보내고 있지만', '혼란스러운 감정이 드는군요', '마음이 복잡한 하루였네요' 등
5. **추가적인 제안:**
   * 사용자의 감정 상태에 따라 전문적인 감정 돌봄에 대한 제안을 진행합니다. (예: '명상을 해보는 것은 어떨까요?', '좋아하는 음악을 들어보세요')
6. **형식:**
   * 존댓말을 사용하여 친근하고 공감적인 어투로 작성합니다.
   * 최대 글자 수는 1000자를 넘지 않도록 합니다.
###예상되는 피드백 예시###
예시 1: 긍정적인 변화 (큰 폭)
userName: 희망
* 이번 달 감정 점수 합산: +20
* 지난 달 감정 점수 합산: -5
희망님, 이번 달은 정말 밝은 빛이 가득했네요! 긍정적인 감정이 폭발적으로 증가했어요. 기분 좋은 일이 많았던 걸까요? 아니면, 스스로를 더욱 긍정적으로 바라보는 노력을 했던 걸까요? 어떤 이유에서든, 지금처럼 긍정적인 에너지를 유지한다면 앞으로 더욱 행복한 날들이 많아질 거예요. 혹시 긍정적인 감정을 유지하는 자신만의 비법이 있다면, 다른 사용자들과도 나눠주세요!
예시 2: 부정적인 변화 (작은 폭)
userName: 힘내
* 이번 달 감정 점수 합산: -3
* 지난 달 감정 점수 합산: 0
힘내님, 이번 달에는 조금 힘든 시간을 보내셨나 봐요. 하지만 걱정하지 마세요. 누구에게나 어려운 시기는 찾아오는 법이니까요. 좋아하는 음악을 들으며 잠시 휴식을 취하거나, 가벼운 운동을 해보는 건 어떠세요? 작은 변화부터 시작해보세요. 힘내님은 충분히 이겨낼 수 있어요.
예시 3: 큰 변화 없음
userName: 꾸준함
* 이번 달 감정 점수 합산: 0
* 지난 달 감정 점수 합산: -1
꾸준함님, 이번 달에는 감정적으로 큰 변화는 없었지만, 꾸준히 감정을 기록하고 있다는 것 자체가 대단한 일이에요. 어쩌면 지금 꾸준함님에게는 변화보다는 안정이 필요한 시기일 수도 있어요. 자신을 돌아보고, 현재에 집중하는 시간을 가져보는 건 어떨까요? 명상이나 요가를 통해 마음의 평화를 찾아보세요.
예시 4: 큰 폭으로 부정적인 변화
userName: 힘들어
* 이번 달 감정 점수 합산: -25
* 지난 달 감정 점수 합산: +5
힘들어님, 이번 달에는 유독 힘든 시간을 보내셨나 봐요. 감정 점수가 크게 떨어져 마음이 많이 무겁겠어요. 혹시 무슨 일이 있었는지 말하고 싶으시다면 언제든지 털어놓으셔도 돼요. 혼자 끙끙 앓기보다는 주변 사람들에게 도움을 요청하거나, 전문가의 상담을 받아보는 것도 좋은 방법이에요. 작은 변화부터 시작해도 괜찮아요. 힘들어님은 충분히 이겨낼 수 있습니다.
###참고###
위 예시는 일부분이며, 실제 피드백은 사용자의 데이터에 따라 더욱 다양하고 맞춤형으로 생성될 수 있습니다.
###추가적으로 고려해야 할 사항###
* **감정의 복잡성:** 감정은 단순히 숫자로 표현될 수 없는 복잡한 개념입니다. 앱에서 제공하는 피드백은 참고용이며, 전문적인 상담이 필요한 경우에는 전문가에게 도움을 받는 것이 좋습니다.
* **개인정보 보호:** 사용자의 개인정보를 보호하기 위해 민감한 정보는 노출하지 않도록 주의해야 합니다.
 `
  console.log(prompt)
  gemini.value!.generate(prompt)
}

const handleGeminiResult = async (result: string) => {
  report.value = result

  const data: ReportForm = {
    reportedMonth: `${year.value!}-${month.value!}`,
    monthlyFeedback: result
  }
  await reportAPI.createReport(data)

  setTimeout(async () => {
    await getDatas()
  }, 1000)
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
