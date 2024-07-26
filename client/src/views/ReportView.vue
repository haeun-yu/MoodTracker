<template>
  <div class="flex flex-col gap-[30px]">
    <section>
      <h1 class="text-4xl-bold mb-[10px]">월간 리포트</h1>
      <p>
        {{ year }}년 {{ month }}월달의 감정 변화를 분석했어요. 나의 감정 패턴을 이해하고 되새겨보는
        시간을 가져보세요.
      </p>
    </section>

    <section v-if="!hasReport" class="w-full h-full flex items-center justify-center">
      <p class="text-lg-bold text-[#888888] animate-bounce">분석 중 입니다...</p>
    </section>

    <section v-else class="flex flex-col gap-[30px]">
      <article class="flex gap-[20px] h-[300px]">
        <div class="w-[30%] boxs">
          <label>{{ year }}년 {{ month }}월 감정 순위</label>
          <p>어떤 감정을 느꼈는 지 한 눈에 확인하세요!</p>

          <div>
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
                <p>{{ emotion.count }}회</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-[70%] boxs2">
          <label>아무개 님의 2024년 6월달 감정을 분석했어요</label>
          <div></div>
          <p>*사용자 기록을 점수로 변환하여 누적 합산한 결과입니다.</p>
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
import Gemini from '@/api/gemini'
import { useRoute, useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast.store'

const route = useRoute()
const router = useRouter()
const { addToast } = useToastStore()
const gemini = ref<Gemini | null>(null)

const hasReport = ref(true)

const report = ref<string>(
  '레포트 내용이 나옵니다. 레포트 내용이 나옵니다. 레포트 내용이 나옵니다. 레포트 내용이 나옵니다. 레포트 내용이 나옵니다. 레포트 내용이 나옵니다. 레포트 내용이 나옵니다. 레포트 내용이 나옵니다. 레포트 내용이 나옵니다. 레포트 내용이 나옵니다. 레포트 내용이 나옵니다. 레포트 내용이 나옵니다. 레포트 내용이 나옵니다. '
)
const emotionCount = ref<{ emotion: string; count: number }[]>([
  {
    emotion: 'Happy',
    count: 10
  },
  {
    emotion: 'Sad',
    count: 5
  },
  {
    emotion: 'Angry',
    count: 3
  }
])

const id = route.params.id
const year = id.slice(0, 4)
const month = id.slice(-2)
const user = ref<User | null>({
  name: 'name',
  email: 'user@test.test'
})

onBeforeMount(async () => {
  // const checkLoginResponse = await authAPI.checkLogin()
  // if (!checkLoginResponse) {
  //   addToast({
  //     message: '로그인이 필요합니다.'
  //   })
  //   router.push('/login')
  // }

  // const getUserResponse = await authAPI.getInformation()
  // if (!getUserResponse) {
  //   addToast({
  //     message: '사용자 정보를 불러오는데 실패했습니다.'
  //   })
  //   router.push('/login')
  // }
  // user.value = getUserResponse

  getReport()
})

const getReport = async () => {
  // id값으로 해당 유저의 레포트 get
  // 만약 기록이 없으면 생성
}

const handleCreateReport = async () => {
  gemini.value = new Gemini(handleGeminiResult)

  const prompt = ``
  gemini.value!.generate(prompt)
}

const handleGeminiResult = (result: string) => {
  report.value = result
  // createReport() id 값 사용해서 생성
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
  padding: 20px;
  background-color: #e6afb9;
  color: white;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}
</style>
