<template>
  <div class="flex items-center justify-between bg-[#D0A7EB] h-[70px] px-[30px]">
    <RouterLink to="/"><img src="/logo/logo.svg" class="h-full" /></RouterLink>

    <nav v-if="menu !== 'login' && isLogin">
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
    <RouterLink v-else to="/login" class="navigation"><img src="/icons/login.svg" /></RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import authAPI from '@/api/auth'

const route = useRoute()
const menu = ref<string>('')
const isLogin = ref<boolean>(false)

onBeforeMount(async () => {
  isLogin.value = await authAPI.checkLogin()
  menu.value = getMenuFromRoute()
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
