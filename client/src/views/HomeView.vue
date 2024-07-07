<template>
  <div class="h-full flex flex-col items-center justify-between gap-[20px]">
    <div class="flex flex-col items-center gap-[50px]">
      <h3 class="text-[26px]">Mood tracker와 감정을 기록하며 하루를 되새겨보세요.</h3>
      <RouterLink to="/today" class="btn-tertiary py-[10px] px-[35px] text-[24px] font-semibold">
        기록 시작
      </RouterLink>
    </div>

    <img src="/images/main-image.svg" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
