<template>
  <div class="h-full flex flex-col items-center justify-between gap-[150px]">
    <section class="flex flex-col items-center gap-[50px]">
      <p class="text-3xl-regular">Mood tracker와 감정을 기록하며 하루를 되새겨보세요.</p>
      <RouterLink
        :to="isLoggedIn ? '/today' : '/login'"
        class="btn-tertiary py-[10px] px-[35px] text-[24px] font-semibold"
      >
        기록 시작
      </RouterLink>

      <img src="/images/main/main-image.svg" />
    </section>

    <section ref="fadeSection1" class="flex items-center justify-between w-full fade-up">
      <article class="relative">
        <img src="/images/main/main1.svg" />
        <img
          ref="fadeSection1_1"
          class="absolute top-[-40px] right-[-30px] fade-up-1"
          src="/images/main/main1-1.svg"
        />
        <img
          ref="fadeSection1_2"
          class="absolute top-0 left-[-30px] fade-up-2"
          src="/images/main/main1-2.svg"
        />
        <img
          ref="fadeSection1_3"
          class="absolute bottom-[-15px] right-[80px] fade-up-3"
          src="/images/main/main1-3.svg"
        />
      </article>
      <article class="flex flex-col gap-[15px]">
        <p class="text-3xl-bold">나만의 감정 다이어리</p>
        <p class="text-2xl-regular text-[#363636]">하루의 감정을 다이어리에 적어보세요.</p>
        <p class="text-2xl-regular text-[#363636]">
          AI의 피드백으로 당신의 감정을 스마트하게 관리해드립니다.
        </p>
      </article>
    </section>

    <section ref="fadeSection2" class="flex items-center justify-between w-full fade-up">
      <article class="flex flex-col gap-[15px]">
        <p class="text-3xl-bold">이번 달의 감정 점수는?</p>
        <p class="text-2xl-regular text-[#363636]">감정을 분석해 달마다 종합 점수를 제공합니다.</p>
        <p class="text-2xl-regular text-[#363636]">
          나의 감정 패턴을 이해하고 긍정적 변화를 이끌어내세요!
        </p>
      </article>

      <article class="relative">
        <img src="/images/main/main2.svg" />
        <img
          ref="fadeSection2_1"
          class="absolute top-[213px] left-[152px] fade-up-1"
          src="/images/main/main2-1.svg"
        />
        <img
          ref="fadeSection2_2"
          class="absolute bottom-[100px] right-[212px] fade-up-2"
          src="/images/main/main2-2.svg"
        />
      </article>
    </section>

    <section ref="fadeSection3" class="flex items-center justify-between w-full fade-up">
      <img src="/images/main/main3.svg" />

      <article class="flex flex-col gap-[15px]">
        <p class="text-3xl-bold">캘린더로 한 눈에 확인하세요!</p>
        <p class="text-2xl-regular text-[#363636]">
          매일의 감정 기록을 통해 월간/주간 변화 추이를 확인하세요.
        </p>
        <p class="text-2xl-regular text-[#363636]">감정 상태를 시각적으로 파악하기 쉬워</p>
        <p class="text-2xl-regular text-[#363636]">
          나의 감정을 더욱 잘 이해하고 관리할 수 있습니다.
        </p>
      </article>
    </section>

    <section
      class="border-t-[3px] border-[#D0A7EB] w-full py-[100px] flex flex-col items-center gap-[30px]"
    >
      <p class="text-2xl-regular text-[#363636]">이제 저희와 함께 여정을 떠나 보실래요?</p>
      <RouterLink
        :to="isLoggedIn ? '/today' : '/login'"
        class="btn-tertiary w-[calc(70vw)] p-[10px] text-[24px] font-semibold"
      >
        기록하러 가기
      </RouterLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import authAPI from '@/api/auth'
import { useToastStore } from '@/stores/toast.store'

const isLoggedIn = ref(false)
const { addToast } = useToastStore()

const fadeSection1 = ref(null)
const fadeSection2 = ref(null)
const fadeSection3 = ref(null)
const fadeSection1_1 = ref(null)
const fadeSection1_2 = ref(null)
const fadeSection1_3 = ref(null)
const fadeSection2_1 = ref(null)
const fadeSection2_2 = ref(null)

const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-up-visible')
    }
    // else {
    //   entry.target.classList.remove('fade-up-visible')
    // }
  })
}

onMounted(async () => {
  const response = await authAPI.checkLogin()
  isLoggedIn.value = response

  const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.1
  })

  if (fadeSection1.value) observer.observe(fadeSection1.value)
  if (fadeSection2.value) observer.observe(fadeSection2.value)
  if (fadeSection3.value) observer.observe(fadeSection3.value)
  if (fadeSection1_1.value) observer.observe(fadeSection1_1.value)
  if (fadeSection1_2.value) observer.observe(fadeSection1_2.value)
  if (fadeSection1_3.value) observer.observe(fadeSection1_3.value)
  if (fadeSection2_1.value) observer.observe(fadeSection2_1.value)
  if (fadeSection2_2.value) observer.observe(fadeSection2_2.value)
})

onUnmounted(() => {
  // Cleanup observers if needed
})
</script>

<style scoped>
.fade-up {
  opacity: 0;
  transform: translateY(100px);
  transition:
    opacity 0.5s ease-in-out,
    transform 0.5s ease-in-out;
}

.fade-up-visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-up-1 {
  opacity: 0;
  transform: translateY(100px);
  transition:
    opacity 0.6s ease-in-out,
    transform 0.6s ease-in-out;
}

.fade-up-1.fade-up-visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-up-2 {
  opacity: 0;
  transform: translateY(100px);
  transition:
    opacity 0.7s ease-in-out,
    transform 0.7s ease-in-out;
}

.fade-up-2.fade-up-visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-up-3 {
  opacity: 0;
  transform: translateY(100px);
  transition:
    opacity 0.8s ease-in-out,
    transform 0.8s ease-in-out;
}

.fade-up-3.fade-up-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
