<template>
  <div class="flex items-center justify-between">
    <div class="relative w-full">
      <textarea v-model="content" class="h-[calc(45vh)]" />
      <p class="absolute bottom-[10px] right-[10px] text-[#5B5B5B] text-sm-light">
        {{ content.length }}/1000
      </p>
    </div>
    <button class="btn-primary p-[10px]" @click="handleQuestion">
      <p>Submit</p>
    </button>
    <textarea v-model="feedback" class="h-[calc(50vh)]" disabled />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue'
import Gemini from '@/api/gemini'

const content = ref('')
const feedback = ref('')
const gemini = ref<Gemini | null>(null)

onBeforeMount(async () => {
  gemini.value = new Gemini(handleGeminiResult)
})

const handleGeminiResult = (result: string) => {
  feedback.value = result
}

const handleQuestion = () => {
  gemini.value!.generate(content.value)
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
