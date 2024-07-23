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
      <h1 class="text-5xl-bold">Login</h1>

      <article class="w-[50%] flex flex-col gap-[15px]">
        <div class="flex items-center">
          <label>Email</label>
          <CommonInput v-model="form.email" placeholder="Enter Email" />
        </div>

        <div class="flex items-center">
          <label>Password</label>
          <CommonInput v-model="form.password" type="password" placeholder="Enter Password" />
        </div>

        <button
          class="btn-primary p-[10px]"
          @click="handleLogin"
          :disabled="isSendLoading || isEmpty"
        >
          Login
        </button>
        <RouterLink to="/sign-up" class="btn-secondary p-[10px]">Sign up</RouterLink>
        <div class="w-full flex justify-end">
          <RouterLink to="/reset-password" class="btn-line">Forget password</RouterLink>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue'
import authAPI from '@/api/auth'
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast.store'
import CommonInput from '@/components/input/CommonInput.vue'

const router = useRouter()
const { addToast } = useToastStore()

const form = ref<Login>({
  email: '',
  password: ''
})
const isSendLoading = ref<boolean>(false)
const isEmpty = computed(() => {
  return !form.value.email || !form.value.password
})
const EMAIL_FORMAT = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/

onBeforeMount(async () => {
  try {
    const response = await authAPI.checkLogin()
    if (response.loggedIn) {
      addToast({
        message: '로그인이 되어있습니다.'
      })
      router.push('/')
    }
  } catch (error) {
    addToast({
      message: '서버에 문제가 발생했습니다. 다시 시도해주세요.'
    })
    console.error(error)
    router.push('/')
  }
})

const handleLogin = async () => {
  if (isSendLoading.value) return
  isSendLoading.value = true

  if (isEmpty.value) {
    addToast({
      message: '모든 항목을 입력해주세요.'
    })
    isSendLoading.value = false
    return
  }

  if (!EMAIL_FORMAT.test(form.value.email)) {
    addToast({
      message: '이메일을 올바르게 입력해주세요.'
    })
    isSendLoading.value = false
    return
  }

  try {
    await authAPI.login(form.value)
    router.push('/')
  } catch (error) {
    addToast({
      message: '로그인에 실패했습니다. 다시 시도해주세요.'
    })
    console.error(error)
    isSendLoading.value = false
  }
}
</script>

<style scoped>
.login-body {
  width: 100%;
  height: 100%;
  border: 1.5px solid #eeeeee;
  border-radius: 40px;
  display: flex;
  background-color: #fcf7ff;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
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
