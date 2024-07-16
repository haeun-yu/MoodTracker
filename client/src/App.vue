<template>
  <header>
    <CommonHeader />
  </header>

  <main class="grid h-full min-h-[calc(100vh-200px)] py-[60px] px-[80px]">
    <RouterView />
  </main>

  <footer>
    <CommonFooter />
  </footer>

  <CommonToast />
</template>

<script setup lang="ts">
import CommonHeader from '@/components/general/CommonHeader.vue'
import CommonFooter from '@/components/general/CommonFooter.vue'
import CommonToast from '@/components/CommonToast.vue'
</script>

<style scoped></style>
