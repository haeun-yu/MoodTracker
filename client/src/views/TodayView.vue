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
  const prompt = `###프롬프트###
다음은 감정 기록 앱 사용자의 일간 기록 '데이터'입니다. 당신은 반드시 '사용자'가 '선택한 감정'과 '감정 기록'을 바탕으로, 사용자에게 맞춤형 피드백을 작성해야 합니다.
피드백:
###데이터###
* 사용자 이름: ${user.value!.name}
* 일기의 내용: ${form.value.content}
* 선택한 감정: ${form.value.emotion}
###피드백 작성 지침###
think step by step
1. **감정 분석:**
   * 'IDK'와 같이 명확하지 않은 감정은 문맥을 분석하여 추정된 감정을 제시합니다. (예: '혼란스럽다', '복잡하다', '생각이 많다')
   * 다양한 감정이 혼재되어 있다면, 주된 감정과 부수적인 감정을 구분하여 표현합니다.
2. **맞춤형 격려:**
   * 사용자의 일기 내용에 등장하는 특정 단어나 문장을 활용하여 구체적인 격려 메시지를 전달합니다.
   * 사용자의 성장 가능성을 강조하고, 긍정적인 자아 이미지를 형성하도록 돕습니다.
3. **다양한 표현:**
   * 동일한 감정에 대해서도 다양한 표현 방식을 사용하여 피드백의 지루함을 해소합니다.
   * 예시: '힘든 시간을 보내고 있지만', '혼란스러운 감정이 드는군요', '마음이 복잡한 하루였네요' 등
4. **추가적인 제안:**
   * 사용자의 감정 상태에 따라 적절한 행동이나 활동을 제안합니다. (예: '명상을 해보는 것은 어떨까요?', '좋아하는 음악을 들어보세요')
5. **형식:**
   * 존댓말을 사용하여 친근하고 공감적인 어투로 작성합니다.
   * 최대 글자 수는 1000자를 넘지 않도록 합니다.
###예상되는 피드백 예시###
* userName: ASAP
* form.value.emotion: IDK(I don't know)
* form.value.content: 오늘은 영화 인사이드 아웃을 봤다. 인사이드 아웃은 라일리의 감정들이 등장하여 어떤식으로 감정이 표현되는지를 잘 다룬 영화라고 생각이 되면서, 나 자신 또한 돌아볼 수 있는 기회가 되었다. 아직 내 감정에 솔직하지 못하고 표현하는 방법도 잘 모르겠지만, 앞으로 일기를 작성하면서 나 자신을 돌이켜볼 수 있는 기회로 삼아야겠다.
ASAP님,
오늘 영화를 보며 자신을 돌아보는 시간을 가졌군요. 아직 자신의 감정을 명확하게 표현하기 어렵다고 느끼는 부분, 충분히 이해합니다.
하지만 영화를 통해 자신의 감정을 이해하려는 노력은 정말 멋진 일이에요.
혼란스러운 감정 속에서도 자신을 돌아보고 성장하려는 ASAP님의 모습에서 큰 용기를 얻었습니다. 앞으로도 일기를 통해 자신의 감정을 꾸준히 기록하고, 조금씩 변화해가는 자신을 발견해나가길 바랍니다.
혹시 혼자 해결하기 어려운 감정이 있다면,
주변 사람들에게 도움을 요청하거나 전문가의 도움을 받는 것도 좋은 방법이 될 수 있어요.
###참고###
위 예시는 일부분이며, 실제 피드백은 사용자의 데이터에 따라 더욱 다양하고 맞춤형으로 생성될 수 있습니다.
###추가적으로 고려해야 할 사항###
* **감정 사전:** 다양한 감정과 그에 따른 적절한 피드백을 연결하는 감정 사전을 구축하면 더욱 정교한 피드백 생성이 가능합니다.
* **문맥 분석:** 사용자의 일기 내용을 깊이 분석하여 숨겨진 의미나 감정을 파악하는 것이 중요합니다.
* **개인정보 보호:** 사용자의 개인정보를 보호하기 위해 민감한 정보는 노출하지 않도록 주의해야 합니다.`

  console.log(prompt)
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
