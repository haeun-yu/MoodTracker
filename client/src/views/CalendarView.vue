<template>
  <div>Calendar</div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue'
import authAPI from '@/api/auth'
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast.store'

const router = useRouter()
const { addToast } = useToastStore()

onBeforeMount(async () => {
  try {
    const response = await authAPI.checkLogin()
    if (response.userSeq !== 1) {
      addToast({
        message: '로그인이 필요합니다.'
      })
      router.push('/login')
    }
  } catch (error) {
    addToast({
      message: '서버에 문제가 발생했습니다. 다시 시도해주세요.'
    })
    console.error(error)
  }
})
</script>

<style scoped></style>
