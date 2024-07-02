<template>
  <header>
    <CommonHeader />
  </header>

  <main class="min-h-[calc(100vh-210px)]">
    <RouterView />
  </main>

  <footer>
    <CommonFooter />
  </footer>
</template>

<script setup lang="ts">
import CommonHeader from '@/components/general/CommonHeader.vue'
import CommonFooter from '@/components/general/CommonFooter.vue'
</script>

<style scoped></style>
