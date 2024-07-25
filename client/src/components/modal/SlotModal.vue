<template>
  <div class="fixed top-0 left-0 w-full h-full z-[100] bg-black opacity-[20%]"></div>
  <div class="modal">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.modal {
  @apply fixed top-0 left-0 z-[110] w-full h-full flex justify-center items-center;
}
</style>
