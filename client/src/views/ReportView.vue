<template>
  <div>Report</div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue'
import authAPI from '@/api/auth'
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast.store'

const router = useRouter()
const { addToast } = useToastStore()

onBeforeMount(async () => {
  const response = await authAPI.checkLogin()

  if (!response) {
    addToast({
      message: '로그인이 필요합니다.'
    })
    router.push('/login')
  }
})
</script>

<style scoped></style>
