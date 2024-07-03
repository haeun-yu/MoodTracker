<template>
  <div class="login-body">
    <section class="w-[40%] h-[calc(70vh)]">
      <img
        src="/images/login.svg"
        alt="sample-image"
        class="w-full h-full object-cover rounded-l-[40px]"
      />
    </section>

    <section class="w-[60%] flex flex-col items-center justify-center gap-[50px]">
      <h1 class="text-[34px] font-bold">Login</h1>

      <article class="w-[50%] flex flex-col gap-[15px]">
        <div class="flex items-center">
          <label>Email</label>
          <CommonInput v-model="form.email" placeholder="Enter Email" />
        </div>

        <div class="flex items-center">
          <label>Password</label>
          <CommonInput v-model="form.password" placeholder="Enter Password" />
        </div>

        <button class="btn-primary p-[10px]" @click="handleLogin">Login</button>
        <RouterLink to="/sign-up" class="btn-secondary p-[10px]">Sign up</RouterLink>
        <div class="w-full flex justify-end">
          <RouterLink to="/reset-password" class="btn-line">Forget password</RouterLink>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CommonInput from '@/components/input/CommonInput.vue'

const form = ref({
  email: '',
  password: ''
})

const handleLogin = () => {
  console.log(form.value)
}
</script>

<style scoped>
.login-body {
  width: 100%;
  height: 100%;
  background-color: white;
  border: 1.5px solid black;
  border-radius: 40px;
  display: flex;
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