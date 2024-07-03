<template>
  <div class="flex items-center justify-between bg-[#D0A7EB] h-[70px] px-[30px]">
    <h1 class="text-[22px] font-bold text-white">Mood Tracker</h1>

    <nav v-if="menu !== 'login'">
      <RouterLink to="/calendar" class="navigation" :class="{ active: menu === 'calendar' }"
        >Calendar</RouterLink
      >
      <RouterLink to="/today" class="navigation" :class="{ active: menu === 'today' }"
        >Today</RouterLink
      >
      <RouterLink to="/report" class="navigation" :class="{ active: menu === 'report' }"
        >Report</RouterLink
      >
      <RouterLink to="/search" class="navigation" :class="{ active: menu === 'search' }"
        >Search</RouterLink
      >
      <RouterLink to="/my" class="navigation" :class="{ active: menu === 'my' }">My</RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menu = ref<string>('')

onMounted(async () => {
  // isLogin.value = userStore.isJustLogin()
  menu.value = getMenuFromRoute()
  // information.value = (await userStore.getUserInfo()) as UserInformation
})

watch(
  () => route,
  () => {
    menu.value = getMenuFromRoute()
  },
  { deep: true }
)

const getMenuFromRoute = () => {
  const path = window.location.pathname
  const category = path.split('/')[1]
  return category
}
</script>

<style scoped>
nav {
  display: flex;
  gap: 20px;
}
.navigation {
  color: white;
  font-weight: 600;
}
.navigation:hover {
  color: #f0f0f0;
}
.navigation.active {
  color: white;
  font-weight: 800;
  text-decoration-line: underline;
  text-underline-offset: 4px;
}
</style>
