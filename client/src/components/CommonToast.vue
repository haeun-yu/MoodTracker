<template>
  <div class="toast-list">
    <div v-for="(toast, key) in toasts" v-bind:key class="toast">
      <div class="flex gap-2 w-[90%]">
        <p>{{ toast.message }}</p>
      </div>

      <div></div>
      <img
        src="/icons/close_white.svg"
        width="24"
        color="white"
        @click="removeToast(toast.id!)"
        class="ml-[10px] cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '@/stores/toast.store'
const { toasts, removeToast } = useToastStore()
</script>

<style scoped>
.toast-list {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  display: flex;
  flex-direction: column-reverse;
  align-items: end;
  gap: 15px;
  margin-top: 60px;
  max-width: 30%;
}

.toast {
  position: relative;
  padding: 10px;
  color: white;
  background-color: #d0a7eb;
  border-radius: 6px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: end;
  animation: fadeInUp 0.3s;
}

p {
  color: white;
  font-size: 16px;
  font-weight: 500;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
}
</style>
