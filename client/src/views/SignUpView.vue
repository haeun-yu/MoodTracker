<template>
  <div class="signup-body">
    <section class="w-[50%] flex flex-col items-center gap-[50px] pt-[50px] pb-[70px]">
      <h1 class="text-3xl-bold">Sign Up</h1>

      <article class="w-full flex flex-col gap-[15px]">
        <div class="flex flex-col gap-[10px]">
          <label>Name</label>
          <CommonInput v-model="form.userName" placeholder="Enter Email" />
        </div>

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
          <CommonInput v-model="confirmPassword" type="password" placeholder="Enter Password" />
          <p class="text-[14px] text-[#8E46BD]">{{ confirmMessage }}</p>
        </div>

        <div class="flex justify-end">
          <button
            class="btn-primary p-[10px]"
            @click="handleSignUp"
            :disabled="isSendLoading || isEmpty"
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
  userName: '',
  email: '',
  password: ''
})
const confirmPassword = ref<string>('')
const confirmMessage = ref<string>('')
const confirmCode = ref<string>('')

const isSendLoading = ref<boolean>(false)
const isSendCode = ref<boolean>(false)
const isCheckCode = ref<boolean>(false)
const isEmpty = computed(() => {
  return !form.value.userName || !form.value.email || !form.value.password || !confirmPassword.value
})

const EMAIL_FORMAT = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/

onBeforeMount(async () => {
  try {
    const response = await authAPI.checkLogin()
    if (response.userSeq === 1) {
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
    isSendLoading.value = false
  }
})

watch(
  () => confirmPassword.value,
  (value) => {
    if (value !== form.value.password) {
      confirmMessage.value = '비밀번호가 일치하지 않습니다.'
    } else {
      confirmMessage.value = ''
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

const handleSignUp = async () => {
  if (isSendLoading.value) return

  if (isEmpty.value) {
    addToast({
      message: '모든 항목을 입력해주세요.'
    })
    return
  }

  if (!isCheckCode.value) {
    addToast({
      message: '이메일 인증을 진행해주세요.'
    })
    return
  }

  if (form.value.password !== confirmPassword.value) {
    confirmMessage.value = '비밀번호가 일치하지 않습니다.'
    return
  }
  isSendLoading.value = true

  try {
    await authAPI.signUp(form.value)
    router.push('/login')
  } catch (error) {
    addToast({
      message: '회원가입에 실패했습니다. 다시 시도해주세요.'
    })
    console.error(error)
    isSendLoading.value = false
  }
}
</script>

<style scoped>
.signup-body {
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
