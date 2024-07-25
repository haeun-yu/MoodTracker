<template>
  <div class="my-body">
    <h1 class="text-3xl-bold mb-[20px]">{{ menu }}</h1>

    <section class="grid grid-cols-4">
      <article class="flex flex-col gap-[10px] pt-[20px]">
        <button
          @click="handleMenu('My Information')"
          class="btn-menu"
          :class="{ active: menu === 'My Information' }"
        >
          내 정보
        </button>
        <button
          @click="handleMenu('Reset Password')"
          class="btn-menu"
          :class="{ active: menu === 'Reset Password' }"
        >
          비밀번호 수정
        </button>
        <button
          @click="handleMenu('Delete Account')"
          class="btn-menu"
          :class="{ active: menu === 'Delete Account' }"
        >
          회원 탈퇴하기
        </button>
      </article>

      <article v-if="menu === 'My Information'" class="function-box">
        <div class="w-[80%] flex flex-col gap-[30px] p-[20px]">
          <img
            src="/images/sample-image.svg"
            alt="sample-image"
            class="w-[180px] h-[180px] rounded-[10px] border object-cover"
          />
          <div class="flex border-b-[1.5px] border-black">
            <label class="w-[30%] text-[26px]">Name</label>
            <p class="w-[70%]] text-[26px] font-light">{{ user.name }}</p>
          </div>
          <div class="flex border-b-[1.5px] border-black">
            <label class="w-[30%] text-[26px]">Email</label>
            <p class="w-[70%]] text-[26px] font-light">{{ user.email }}</p>
          </div>
          <div class="w-full flex justify-end">
            <button class="btn-primary p-[10px]" @click="handleLogout">Logout</button>
          </div>
        </div>
      </article>
      <article v-else-if="menu === 'Reset Password'" class="function-box">
        <div class="w-full flex flex-col justify-between gap-[30px] p-[20px]">
          <div class="flex flex-col gap-[30px]">
            <div class="flex flex-col gap-[10px]">
              <label class="w-[50%] text-[20px]">Current Password</label>
              <CommonInput
                type="password"
                v-model="changePassword.currentPassword"
                class="w-[50%] text-[20px] font-light"
              />
            </div>
            <div class="flex flex-col gap-[10px]">
              <label class="w-[50%] text-[20px]">New Password</label>
              <CommonInput
                type="password"
                v-model="changePassword.newPassword"
                class="w-[50%] text-[20px] font-light"
              />
            </div>
            <div class="flex flex-col gap-[10px]">
              <label class="w-[50%] text-[20px]">Confirm New Password</label>
              <CommonInput
                type="password"
                v-model="changePassword.confirmPassword"
                class="w-[50%] text-[20px] font-light"
              />
            </div>
          </div>

          <div class="flex justify-end">
            <button class="btn-primary p-[10px]" @click="handleResetPassword">
              Reset Password
            </button>
          </div>
        </div>
      </article>
      <article v-else-if="menu === 'Delete Account'" class="function-box">
        <div class="w-full flex flex-col justify-between gap-[30px] p-[20px]">
          <div class="flex flex-col gap-[10px]">
            <label class="w-[50%] text-[20px]">Your Password</label>
            <CommonInput
              type="password"
              v-model="password"
              class="w-[50%] text-[20px] font-light"
            />
          </div>

          <div class="flex items-end justify-between">
            <img src="/images/delete-account.svg" />
            <button
              class="btn-primary px-[20px] py-[10px] rounded-[30px] rounded-br-none"
              @click="handleDeleteAccount"
              :disabled="isDeleteLoading"
            >
              Delete Account
            </button>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import authAPI from '@/api/auth'
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast.store'
import CommonInput from '@/components/input/CommonInput.vue'

const router = useRouter()
const { addToast } = useToastStore()

const menu = ref<string>('My Information')
const user = ref<User>({
  name: '',
  email: '',
  password: ''
})
const password = ref<string>('')
const changePassword = ref<any>({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const isDeleteLoading = ref<boolean>(false)

onBeforeMount(async () => {
  const checkLoginResponse = await authAPI.checkLogin()
  if (!checkLoginResponse) {
    addToast({
      message: '로그인이 필요합니다.'
    })
    router.push('/login')
  }

  const getInfoResponse = await authAPI.getInformation()
  if (getInfoResponse) {
    user.value = getInfoResponse
  } else {
    addToast({
      message: '사용자 정보를 가져올 수 없습니다. 다시 시도해주세요.'
    })
    router.back()
  }
})

const handleMenu = (value: string) => {
  menu.value = value
}

const handleLogout = async () => {
  const response = await authAPI.logout()

  if (response) {
    addToast({
      message: '로그아웃 되었습니다.'
    })
    router.push('/login')
  } else {
    addToast({
      message: '로그아웃에 실패했습니다. 다시 시도해주세요.'
    })
  }
}

const handleResetPassword = async () => {
  if (
    !changePassword.value.currentPassword ||
    !changePassword.value.newPassword ||
    !changePassword.value.confirmPassword
  ) {
    addToast({
      message: '비밀번호를 입력해주세요.'
    })
    return
  }

  if (changePassword.value.newPassword !== changePassword.value.confirmPassword) {
    addToast({
      message: '비밀번호가 일치하지 않습니다.'
    })
    return
  }

  const data = {
    currentPassword: changePassword.value.currentPassword,
    newPassword: changePassword.value.newPassword
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
}

const handleDeleteAccount = async () => {
  if (isDeleteLoading.value) return

  const data = { password: password.value }
  const response = await authAPI.deleteAccount(data)

  if (response) {
    addToast({
      message: '탈퇴가 완료되었습니다.'
    })
    router.push('/login')
  } else {
    addToast({
      message: '탈퇴에 실패했습니다. 다시 시도해주세요.'
    })
  }
  isDeleteLoading.value = false
}
</script>

<style scoped>
.my-body {
  width: 100%;
  height: 100%;
  border: 1.5px solid #eeeeee;
  border-radius: 40px;
  padding: 50px 90px;
  background-color: #fcf7ff;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.function-box {
  grid-column: span 3 / span 3;
  border: 1.5px solid #eeeeee;
  border-radius: 20px;
  padding: 10px 30px;
  min-height: calc(60vh);
  display: flex;
  justify-content: center;
  background-color: white;
  box-shadow: inset 0 2px 10px 0 rgb(0 0 0 / 0.05);
}

.btn-menu {
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px 0 0 10px;
  background-color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: semibold;
  transition: all 0.3s;
  border: 1px solid #eeeeee;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.btn-menu.active {
  background-color: #d0a7eb;
  font-size: 22px;
  font-weight: semibold;
  color: white;
}
</style>
