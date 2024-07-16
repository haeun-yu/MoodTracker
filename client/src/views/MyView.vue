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
            <p class="w-[70%]] text-[26px] font-light">{{ user.userName }}</p>
          </div>
          <div class="flex border-b-[1.5px] border-black">
            <label class="w-[30%] text-[26px]">Email</label>
            <p class="w-[70%]] text-[26px] font-light">{{ user.email }}</p>
          </div>
        </div>
      </article>
      <article v-else-if="menu === 'Reset Password'" class="function-box">
        <div class="w-full flex flex-col justify-between gap-[30px] p-[20px]">
          <div class="flex flex-col gap-[30px]">
            <div class="flex flex-col gap-[10px]">
              <label class="w-[50%] text-[20px]">Current Password</label>
              <CommonInput type="password" class="w-[50%] text-[20px] font-light" />
            </div>
            <div class="flex flex-col gap-[10px]">
              <label class="w-[50%] text-[20px]">New Password</label>
              <CommonInput type="password" class="w-[50%] text-[20px] font-light" />
            </div>
            <div class="flex flex-col gap-[10px]">
              <label class="w-[50%] text-[20px]">Confirm New Password</label>
              <CommonInput type="password" class="w-[50%] text-[20px] font-light" />
            </div>
          </div>

          <div class="flex justify-end">
            <button class="btn-primary p-[10px]">Reset Password</button>
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
import { onMounted, ref } from 'vue'
import authAPI from '@/api/auth'
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast.store'
import CommonInput from '@/components/input/CommonInput.vue'

const router = useRouter()
const { addToast } = useToastStore()

const menu = ref<string>('My Information')
const user = ref<User>({
  userName: '',
  email: '',
  password: ''
})
const password = ref<string>('')

const isDeleteLoading = ref<boolean>(false)

onMounted(async () => {
  try {
    const response = await authAPI.checkLogin()
    if (response.userSeq === 1) {
      router.push('/')
    } else {
      addToast({
        message: '로그인이 필요합니다.'
      })
      router.push('/login')
    }
  } catch (error) {
    addToast({
      message: '서버에 문제가 발생했습니다. 다시 시도해주세요.'
    })
    console.error(error)
  }

  try {
    const response = await authAPI.getInformation()
    if (response) {
      user.value = response
    }
  } catch (error) {
    addToast({
      message: '사용자 정보를 가져올 수 없습니다. 다시 시도해주세요.'
    })
    console.error(error)
    router.back()
  }
})

const handleMenu = (value: string) => {
  menu.value = value
}

const handleDeleteAccount = async () => {
  if (isDeleteLoading.value) return

  try {
    const data = { password: password.value }
    await authAPI.deleteAccount(data)
    router.push('/')
  } catch (error) {
    addToast({
      message: '탈퇴에 실패했습니다. 다시 시도해주세요.'
    })
    console.error(error)
    isDeleteLoading.value = false
  }
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
