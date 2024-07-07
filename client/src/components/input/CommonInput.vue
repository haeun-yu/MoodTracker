<template>
  <input
    v-model="value"
    :type="type ? type : 'text'"
    class="w-full border-[1.5px] border-[#222222] rounded-[5px] p-[8px]"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>

<script setup lang="ts">
type Props = {
  type?: 'text' | 'number' | 'password'
  placeholder?: string
  disabled?: boolean
}
const { type, disabled } = defineProps<Props>()
const value = defineModel<string | number>()
</script>
