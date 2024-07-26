<template>
  <SlotModal>
    <div
      class="w-[calc(60vw)] max-h-[calc(70vh)] overflow-y-auto bg-white rounded-[5px] px-[30px] py-[20px]"
    >
      <div class="w-full flex justify-end">
        <button @click="closeModal">
          <img src="/icons/close.svg" />
        </button>
      </div>

      <section v-if="diary" class="pt-[10px] pb-[40px] border-b-[1.5px] border-black">
        <article class="flex items-center justify-between mb-[15px]">
          <label class="text-lg-medium">{{ date }}</label>

          <span class="bg-white p-[20px] rounded-[20px] shadow-md flex items-center gap-[20px]">
            <img :src="`/icons/emotions/${diary.emotion}.svg`" alt="emotion" class="w-[30px]" />
            <p>{{ diary.emotion }}</p>
          </span>
        </article>

        <article>
          <pre>{{ diary.content }}</pre>
        </article>
      </section>

      <section v-if="diary" class="py-[40px] flex flex-col gap-[10px]">
        <p>From. Mood tracker</p>
        <pre>{{ diary.feedback }}</pre>
      </section>
    </div>
  </SlotModal>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import SlotModal from '@/components/modal/SlotModal.vue'

type Props = {
  diary: Diary | undefined
}
const props = defineProps<Props>()
const emits = defineEmits(['close'])

const date = ref('')

onBeforeMount(() => {
  if (props.diary) date.value = getDate(props.diary.createdAt)
})

const getDate = (date: string | Date) => {
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  const dayArr = ['일', '월', '화', '수', '목', '금', '토']
  const dayOfWeek = dayArr[dateObj.getDay()]
  return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`
}

const closeModal = () => {
  emits('close')
}
</script>

<style scoped>
pre {
  padding: 20px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  white-space: pre-wrap;
}
</style>
