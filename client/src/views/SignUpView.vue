<template>
  <div class="signup-body">
    <section class="w-[50%] flex flex-col items-center gap-[50px] pt-[50px] pb-[70px]">
      <h1 class="text-[34px] font-bold">Sign Up</h1>

      <article class="w-full flex flex-col gap-[15px]">
        <div class="flex flex-col gap-[10px]">
          <label>Name</label>
          <CommonInput v-model="form.name" placeholder="Enter Email" />
        </div>

        <div class="flex flex-col gap-[10px]">
          <label>Email</label>
          <CommonInput v-model="form.email" placeholder="Enter Email" />
        </div>

        <div class="flex flex-col gap-[10px]">
          <label>Password</label>
          <CommonInput v-model="form.password" type="password" placeholder="Enter Password" />
        </div>

        <div class="flex flex-col gap-[10px]">
          <label>Confirm Password</label>
          <CommonInput v-model="form.password" type="password" placeholder="Enter Password" />
          <p class="text-[14px] text-[#8E46BD]">{{ confirmMessage }}</p>
        </div>

        <button class="btn-primary p-[10px]" @click="handleSignUp">Sign up</button>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import CommonInput from '@/components/input/CommonInput.vue'

const form = ref<User>({
  name: '',
  email: '',
  password: ''
})
const confirmPassword = ref<string>('')
const confirmMessage = ref<string>('')

watch(
  () => confirmPassword.value,
  (value) => {
    if (value !== form.value.password) {
      confirmMessage.value = '비밀번호가 일치하지 않습니다.'
    }
  }
)

const handleSignUp = () => {
  if (form.value.password !== confirmPassword.value) {
    confirmMessage.value = '비밀번호가 일치하지 않습니다.'
    return
  }

  console.log(form.value)
}
</script>

<style scoped>
.signup-body {
  width: 100%;
  height: 100%;
  background-color: white;
  border: 1.5px solid black;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

label {
  width: 40%;
  font-size: 18px;
  font-weight: 600;
}

button {
  font-weight: 800;
}
</style>
