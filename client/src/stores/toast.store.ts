import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useToastStore = defineStore('toasts', () => {
  const toasts = ref<Toast[]>([])

  const addToast = (toast: Toast) => {
    if (!toast.id) {
      toast.id = Math.floor(Math.random() * 1001).toString()
    }
    toasts.value.push(toast)
    setTimeout(() => removeToast(toast.id!), toast.timeout ? toast.timeout : 5000)
  }

  const removeToast = (toastId: string) => {
    const index = toasts.value.findIndex((toast) => toast.id === toastId)
    if (index !== -1) {
      toasts.value.splice(index, 1)
    }
  }

  return {
    toasts: toasts,
    addToast,
    removeToast
  }
})
