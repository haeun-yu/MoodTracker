<template>
  <div
    class="w-screen flex justify-between px-[30px] pt-[25px] pb-[30px] border-t-[1px] text-[#777777] bg-white"
  >
    <section>
      <h3 class="text-2xl-extrabold">Mood Tracker</h3>
      <p>Inside out</p>
      <!-- <img src="/logo/logo2.svg" class="h-full" /> -->
    </section>

    <section class="flex gap-[50px]">
      <article v-for="(member, index) in members" :key="index">
        <img :src="member.img" alt="member.name" class="w-[30px] h-[30px]" />
        <p class="text-[15px]">{{ member.name }}</p>
        <p class="text-[#888888] text-[13px]">{{ member.role }}</p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const members: any[] = [
  {
    img: '/images/sample-image.svg',
    name: 'Seungwook Byun',
    role: 'Team Leader & Planner'
  },
  {
    img: '/images/sample-image.svg',
    name: 'Gayeong Kim',
    role: 'Designer'
  },
  {
    img: '/images/sample-image.svg',
    name: 'Eunchan Ju',
    role: 'Back-end developer'
  },
  {
    img: '/images/sample-image.svg',
    name: 'Haeun Yu',
    role: 'Front-end developer'
  }
]
</script>

<style scoped></style>
