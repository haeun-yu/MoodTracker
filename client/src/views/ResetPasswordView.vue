<template>
  <div class="reset-password-body">
    <section class="w-[50%] flex flex-col items-center gap-[50px] pt-[50px] pb-[70px]">
      <h1 class="text-3xl-bold">Reset Password</h1>

      <article class="w-full flex flex-col gap-[15px]">
        <div class="flex flex-col gap-[10px]">
          <label>Email</label>
          <div class="flex items-center gap-[10px]">
            <CommonInput v-model="form.email" placeholder="Enter Email" />
            <button
              class="btn-primary p-[10px] text-sm"
              :disabled="isSendCode"
              @click="handleSendVerificationCode"
            >
              Send
            </button>
          </div>
          <div v-if="isSendCode" class="flex items-center gap-[10px]">
            <CommonInput v-model="confirmCode" placeholder="Enter Verification Code" />
            <button
              class="btn-primary p-[10px] text-sm"
              :disabled="isCheckCode"
              @click="handleCheckVerificationCode"
            >
              Confirm
            </button>
          </div>
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

        <div class="flex justify-end">
          <button
            class="btn-primary p-[10px]"
            @click="handleResetPassword"
            :disabled="isResetLoading"
          >
            Submit
          </button>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onBeforeMount } from 'vue'
import authAPI from '@/api/auth'
import emailAPI from '@/api/email'
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast.store'
import CommonInput from '@/components/input/CommonInput.vue'

const router = useRouter()
const { addToast } = useToastStore()

const form = ref<User>({
  name: '',
  email: '',
  password: ''
})
const confirmPassword = ref<string>('')
const confirmMessage = ref<string>('')
const confirmCode = ref<string>('')

const isSendCode = ref<boolean>(false)
const isCheckCode = ref<boolean>(false)
const isResetLoading = ref<boolean>(false)

const EMAIL_FORMAT = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/

const isEmpty = computed(() => {
  return !form.value.password || !confirmPassword.value
})

onBeforeMount(async () => {
  const response = await authAPI.checkLogin()
  if (response) {
    addToast({
      message: '로그인이 되어있습니다.'
    })
    router.push('/')
  }
})

watch(
  () => confirmPassword.value,
  (value) => {
    if (value !== form.value.password) {
      confirmMessage.value = '비밀번호가 일치하지 않습니다.'
    }
  }
)

const handleSendVerificationCode = async () => {
  if (!EMAIL_FORMAT.test(form.value.email) || !form.value.email) {
    addToast({
      message: '이메일을 올바르게 입력해주세요.'
    })
    return
  }

  isSendCode.value = true
  try {
    const data = {
      mail: form.value.email
    }
    const response = await emailAPI.sendVerificationEmail(data)
    if (response) {
      addToast({
        message: '인증 코드가 발송되었습니다. 메일을 확인해주세요.'
      })
    }
  } catch (error) {
    addToast({
      message: '서버에 문제가 발생했습니다. 다시 시도해주세요.'
    })
    console.error(error)
    isSendCode.value = false
  }
}

const handleCheckVerificationCode = async () => {
  if (!confirmCode.value) {
    addToast({
      message: '인증 코드를 입력해주세요.'
    })
    return
  }

  isCheckCode.value = true
  try {
    const data = {
      userNumber: confirmCode.value
    }
    const response = await emailAPI.checkVerificationCode(data)
    if (response) {
      addToast({
        message: '인증이 완료되었습니다.'
      })
    }
  } catch (error) {
    addToast({
      message: '올바른 인증 번호를 입력해주세요.'
    })
    console.error(error)
    isCheckCode.value = false
  }
}

const handleResetPassword = async () => {
  if (!isCheckCode.value) {
    addToast({
      message: '이메일 인증을 진행해주세요.'
    })
    return
  }

  if (isEmpty.value) {
    addToast({
      message: '비밀번호를 입력해주세요.'
    })
    return
  }

  if (form.value.password !== confirmPassword.value) {
    confirmMessage.value = '비밀번호가 일치하지 않습니다.'
    return
  }

  isResetLoading.value = true

  const data = {
    currentPassword: form.value.password,
    newPassword: confirmPassword.value
  }

  const response = await authAPI.resetPassword(data)

  if (response === '') {
    addToast({
      message: '비밀번호가 변경되었습니다.'
    })
    router.push('/login')
  } else {
    addToast({
      message: response
    })
  }
  isResetLoading.value = false
}
</script>

<style scoped>
.reset-password-body {
  width: 100%;
  height: 100%;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #eeeeee;
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
