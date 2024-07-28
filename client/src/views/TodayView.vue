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
        <p class="text-lg-regular">To. {{ user?.name }}</p>
      </div>
      <textarea v-model="form.feedback" class="h-[calc(50vh)]" disabled />
      <div class="w-full text-end">
        <p class="text-lg-regular">From. Mood Tracker</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue'
import Gemini from '@/api/gemini'
import authAPI from '@/api/auth'
import diaryAPI from '@/api/diary'
import calendarAPI from '@/api/calendar'
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast.store'

const router = useRouter()
const { addToast } = useToastStore()

const emotions = [
  'Happy',
  'Angry',
  'Sad',
  'Proud',
  'IDK',
  'Excited',
  'Panicked',
  'Grateful',
  'Exhausted'
]

const user = ref<User | null>(null)
const form = ref<DiaryForm>({
  emotion: '',
  content: '',
  feedback: ''
})
const gemini = ref<Gemini | null>(null)
const isLoading = ref<boolean>(false)
const isDone = ref<boolean>(false)

onBeforeMount(async () => {
  const response = await authAPI.checkLogin()
  if (!response) {
    addToast({
      message: '로그인이 필요합니다.'
    })
    router.push('/login')
  }

  user.value = await authAPI.getInformation()

  const hasDiary = await diaryAPI.hasDiary(user.value?.name!, getTodayFormatted())

  if (hasDiary) {
    isDone.value = true
    const diary = await calendarAPI.getDiary(user.value?.name!, getTodayFormatted())

    if (diary) {
      form.value.emotion = diary.emotion
      form.value.content = diary.content
      form.value.feedback = diary.feedback
    }
  } else {
    gemini.value = new Gemini(handleGeminiResult)
  }
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

const getTodayFormatted = () => {
  const now = new Date()

  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  return `${year}-${month}-${day}`
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
  const prompt = `사용자가 하루 동안 기록한 감정을 기반으로 따뜻하고 공감어린 피드백을 작성해줘. 감정에 따라 아래와 같은 피드백을 출력해줘. 각 피드백은 사용자의 감정과 일기 내용을 바탕으로 특별하고 맞춤형으로 작성되어야 해.

사용자 정보:
- 사용자 이름: ${user.value!.name}
- 일기의 내용: ${form.value.content}
- 선택한 감정: ${form.value.emotion}

감정에 따른 피드백 예시:

- Happy: "${user.value!.name}, 오늘 정말 기쁜 하루를 보낸 것 같아 기뻐요! 당신의 긍정적인 에너지가 당신의 일기를 통해 전해졌어요. 오늘 하루도 너무 수고 많았고, 내일도 이 기운 그대로 멋진 하루가 될 거예요!"

- Angry: "${user.value!.name}, 오늘 화가 나는 일이 있었군요. 당신의 일기를 읽으니 당신의 감정을 충분히 이해할 수 있어요. 때로는 화를 내는 것도 필요해요. 내일은 더 나은 날이 될 거예요. 당신을 항상 응원하고 있어요."

- Sad: "${user.value!.name}, 오늘 슬픈 일이 있었군요. 당신의 일기를 통해 당신의 마음이 느껴져요. 슬픔도 우리가 느껴야 할 중요한 감정이에요. 충분히 쉬고, 당신이 소중한 존재라는 걸 잊지 마세요. 내일은 더 나은 날이 될 거예요."

- Exhausted: "${user.value!.name}, 오늘 많이 피곤했나 봐요. 당신의 일기를 읽으니 정말 힘든 하루를 보낸 것 같아요. 충분히 쉬어야 해요. 당신의 건강이 가장 중요해요. 내일은 더 활기찬 하루가 되길 바랄게요."

- Panicked: "${user.value!.name}, 오늘 두려움을 느낀 일이 있었군요. 당신의 일기를 보니 얼마나 힘들었을지 이해가 돼요. 두려움은 우리를 성장하게 하는 감정이에요. 당신이 이겨낼 수 있다는 걸 믿어요. 내일은 더 안정된 하루가 될 거예요."

- IDK: "${user.value!.name}, 오늘 무기력한 하루를 보냈군요. 당신의 일기를 보니 모든 것이 귀찮게 느껴졌겠어요. 누구나 가끔은 이렇게 느낄 때가 있어요. 충분히 쉬고, 자신을 돌봐주세요. 내일은 더 활기찬 하루가 되길 바라요."

- Blue: "${user.value!.name}, 오늘 우울한 기분이었군요. 당신의 일기를 통해 당신의 마음이 느껴져요. 우울함도 우리가 겪는 중요한 감정이에요. 충분히 쉬고, 자신을 잘 돌봐주세요. 내일은 더 나은 날이 되길 바랄게요."

- Upset: "${user.value!.name}, 오늘 속상한 일이 있었군요. 당신의 일기를 보니 얼마나 마음이 아팠을지 이해가 돼요. 속상함을 느끼는 것도 중요해요. 충분히 쉬고, 자신을 잘 돌봐주세요. 내일은 더 나은 날이 될 거예요."

- Peaceful: "${user.value!.name}, 오늘 평온한 하루를 보낸 것 같아 기뻐요. 당신의 일기를 읽으니 당신의 마음이 안정된 것 같아 좋네요. 평온한 하루를 보낸 만큼 내일도 이렇게 평온하길 바랄게요."

사용자가 선택한 감정에 따라 예시보다 좀 더 자세한 적절한 피드백을 보내줘`

  gemini.value!.generate(prompt)
}

const submitDiary = async () => {
  const sendForm: DiaryForm = {
    emotion: form.value.emotion,
    content: form.value.content,
    feedback: form.value.feedback,
    feedbackCode: 'SUCCESS'
  }
  const response = await diaryAPI.createDiary(user.value?.name!, sendForm)

  if (response) {
    isLoading.value = false
    isDone.value = true
  }
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
