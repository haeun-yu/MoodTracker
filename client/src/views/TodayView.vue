<template>
  <div class="flex items-center justify-between">
    <section class="diary-container">
      <h1>오늘의 감정</h1>
      <article class="grid grid-cols-3">
        <button v-for="(emotion, key) in emotions" v-bind:key class="emotion-box">
          <img :src="`/assets/icons/emotions/${emotion}.svg`" alt="emotion" />
        </button>
      </article>
    </section>
    <section class="diary-container"></section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emotions = ['Happy', 'Angry', 'Sad', 'IDK', 'Sick', 'Panick', 'Blue', 'Upset', 'Calm']
</script>

<style scoped>
.diary-container {
  border-radius: 40px;
  border: 1.5px solid #eeeeee;
  background-color: #fcf7ff;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-color: white;
  transition: all 0.3s;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}
.emotion-box:hover {
  background-color: #eeeeee;
  box-shadow: 0 0 #0000;
}
</style>
