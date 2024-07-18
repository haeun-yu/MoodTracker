<template>
  <div class="flex items-center justify-between">
    <section v-if="!isDone" class="diary-container px-[30px] py-[60px] w-[35%] fade-in">
      <h1 class="text-4xl-bold mb-[30px] text-[#222222]">오늘의 감정</h1>

      <article class="grid grid-cols-3">
        <button
          v-for="(emotion, key) in emotions"
          v-bind:key
          class="emotion-box"
          :class="form.emotion === emotion ? 'bg-[#D0A7EB]' : 'bg-white'"
          @click="handleChangeEmotion(emotion)"
        >
          <img :src="`/icons/emotions/${emotion}.svg`" alt="emotion" class="w-[60px]" />
        </button>
      </article>

      <article></article>
    </section>

    <section v-if="form.emotion" class="w-[60%] fade-in relative">
      <article class="diary-container px-[40px] py-[30px]">
        <div class="w-full flex items-end justify-between text-[#484848]">
          <div class="flex flex-col gap-[20px]">
            <label class="text-lg-bold">{{ getToday() }}</label>
            <p class="text-lg-regular">
              오늘은 어떤 하루를 보내셨나요? <br />
              하루를 기록해보세요!
            </p>
          </div>

          <span class="bg-white p-[20px] rounded-[20px] shadow-md flex items-center gap-[20px]">
            <img :src="`/icons/emotions/${form.emotion}.svg`" alt="emotion" class="w-[30px]" />
            <p>{{ form.emotion }}</p>
          </span>
        </div>

        <div class="relative w-full">
          <textarea v-model="form.content" class="h-[calc(45vh)]" :disable="isDone" />
          <p class="absolute bottom-[10px] right-[10px] text-[#5B5B5B] text-sm-light">
            {{ form.content.length }}/1000
          </p>
        </div>

        <div v-if="isDone" class="absolute top-[-80px] right-[-50px]">
          <img src="/images/stamp.svg" alt="diary" class="w-[200px]" />
        </div>
      </article>

      <div v-if="!isDone" class="flex justify-end mt-[20px]">
        <button class="btn-primary p-[10px]" @click="handleSubmit" :disabled="isLoading">
          <img v-if="isLoading" src="/icons/loading.svg" class="w-[30px] animate-spin" />
          <p v-else>Submit</p>
        </button>
      </div>
    </section>

    <section
      v-if="isDone"
      class="diary-container px-[40px] py-[30px] w-[35%] fade-in text-[#434343]"
    >
      <div class="w-full">
        <p class="text-lg-regular">To. {{ user.name }}</p>
      </div>
      <textarea v-model="form.feedback" class="h-[calc(50vh)]" disabled />
      <div class="w-full text-end">
        <p class="text-lg-regular">From. Mood Tracker</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { formatDate } from '@vueuse/core'
import Gemini from '@/api/gemini'
import authAPI from '@/api/auth'
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast.store'

const router = useRouter()
const { addToast } = useToastStore()

const emotions = [
  'Happy',
  'Angry',
  'Sad',
  'IDK',
  'Exhausted',
  'Panicked',
  'Blue',
  'Upset',
  'Peaceful'
]

const user = {
  name: '아무개'
}
const form = ref<Diary>({
  date: '',
  emotion: '',
  content: '',
  feedback: ''
})
const gemini = ref<Gemini | null>(null)
const isLoading = ref<boolean>(false)
const isDone = ref<boolean>(false)

onMounted(async () => {
  try {
    const response = await authAPI.checkLogin()
    if (response.userSeq === 1) {
      router.push('/')
    } else {
      addToast({
        message: '로그인이 필요합니다.'
      })
      router.push('/login')
    }
  } catch (error) {
    addToast({
      message: '서버에 문제가 발생했습니다. 다시 시도해주세요.'
    })
    console.error(error)
  }

  gemini.value = new Gemini(handleGeminiResult)
  form.value.date = formatDate(new Date(), 'YYYY-MM-DD')
})

watch(
  () => form.value.content,
  (value) => {
    if (value.length > 1000) {
      form.value.content = value.slice(0, 1000)
    }
  }
)

const getToday = () => {
  const now = new Date()

  const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  const dayOfWeek = daysOfWeek[now.getDay()]

  return `${year}년 ${month}월 ${day}일 ${dayOfWeek}`
}

const handleChangeEmotion = (value: string) => {
  form.value.emotion = value
}

const handleSubmit = () => {
  if (isLoading.value) return

  isLoading.value = true
  handleQuestion()
}

const handleGeminiResult = (result: string) => {
  form.value.feedback = result
  submitDiary()
}

const handleQuestion = () => {
  const prompt = `사용자가 하루 동안 기록한 감정을 기반으로 따뜻하고 공감어린 피드백을 작성해줘.
  너가 준 내용 그대로 일기 작성자에게 보내줄거야.
  일기의 있는 내용으로 감정을 더 자세하게 분석해줘도 좋을 것 같아. (최대 1000자)
  선택한 감정: ${form.value.emotion}, 일기의 내용: ${form.value.content}`
  gemini.value!.generate(prompt)
}

const submitDiary = () => {
  // 일기 업로드
  console.log('Submit Diary: ', form.value)
  isLoading.value = false
  isDone.value = true
}
</script>

<style scoped>
.diary-container {
  min-height: 100%;
  border-radius: 25px;
  border: 1.5px solid #fefefe;
  background-color: #fcf7ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.emotion-box {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  transition: all 0.3s;
  margin: 10px;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.emotion-box:hover {
  background-color: #eeeeee;
  box-shadow: 0 0 #0000;
}

textarea {
  width: 100%;
  padding: 15px;
  border-radius: 20px;
  box-shadow: inset 0 4px 4px 0 rgb(0 0 0 / 0.05);
}

textarea:disabled {
  background-color: white;
}
</style>
