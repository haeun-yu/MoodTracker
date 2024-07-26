<template>
  <div>
    <section
      class="w-full flex flex-col items-center justify-between border-b-[2px] border-black pb-[60px]"
    >
      <h3 class="text-4xl-bold mb-[60px] text-[#222222]">SEARCH</h3>
      <article class="flex item-center gap-[10px] w-[80%]">
        <CommonInput v-model="search" />
        <button class="btn-primary px-[30px] py-[10px] text-xl-bold" @click="handleSearch">
          검색
        </button>
      </article>
    </section>

    <section class="w-full flex flex-col items-center justify-between pt-[10px]">
      <article v-if="searchResult.length <= 0" class="pt-[100px]">
        <p class="text-xl-regular">검색 결과가 없습니다.</p>
      </article>

      <article v-else class="w-full flex flex-col gap-[20px]">
        <div class="flex items-center justify-between">
          <label class="text-lg-bold">검색 결과({{ searchResult.length }})</label>

          <div class="flex items-center gap-[10px]">
            <button :class="isLatest ? 'text-lg-bold' : 'text-lg-regular'" @click="isLatest = true">
              최신 순
            </button>
            <span class="w-[5px] h-[5px] bg-black rounded-full"></span>
            <button
              :class="isLatest ? 'text-lg-regular' : 'text-lg-bold'"
              @click="isLatest = false"
            >
              오래된 순
            </button>
          </div>
        </div>

        <div class="search-result-container">
          <div
            v-for="(result, index) in paginatedDiaryList"
            :key="index"
            class="search-result-list cursor-pointer"
            @click="handleClickDiary(result)"
          >
            <p class="w-[10%]">{{ getDate(result.createdAt) }}</p>
            <img :src="`/icons/emotions/${result.emotion}.svg`" alt="emotion" class="w-[2%]" />
            <p class="w-[80%] ellipsis">{{ result.content }}</p>
          </div>
        </div>

        <div class="w-full flex items-center justify-center gap-[10px]">
          <button @click="prevPage" :disabled="currentPage <= 1">
            <img src="/icons/page-nation-left.svg" class="w-[30px]" />
          </button>
          <span>{{ currentPage }} / {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage >= totalPages">
            <img src="/icons/page-nation-left.svg" class="w-[30px] -scale-x-100" />
          </button>
        </div>
      </article>
    </section>
  </div>
  <DiaryModal v-if="isModalOpen" :diary="selectedDiary" @close="isModalOpen = false" />
</template>

<script setup lang="ts">
import { ref, watch, onBeforeMount, computed } from 'vue'
import authAPI from '@/api/auth'
import DiaryAPI from '@/api/diary'
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast.store'
import CommonInput from '@/components/input/CommonInput.vue'

const router = useRouter()
const { addToast } = useToastStore()

const isLatest = ref<boolean>(false)
const isModalOpen = ref<boolean>(false)

const user = ref<User | null>(null)
const search = ref<string>('')
const currentPage = ref<number>(1)
const totalPages = ref<number>(1)
const diaryList = ref<Diary[]>([])
const searchResult = ref<Diary[]>([])
const ITEMS_PER_PAGE = 10
const selectedDiary = ref<Diary | null>(null)

onBeforeMount(async () => {
  const checkLoginResponse = await authAPI.checkLogin()

  if (!checkLoginResponse) {
    addToast({
      message: '로그인이 필요합니다.'
    })
    router.push('/login')
  }

  const getInfoResponse = await authAPI.getInformation()

  if (!getInfoResponse) {
    addToast({
      message: '서버에 문제가 발생했습니다. 다시 시도해주세요.'
    })
    router.push('/')
  }
  user.value = getInfoResponse

  const response = await DiaryAPI.searchDiaryByKeyword(user.value!.name, '')
  console.log(response)
  diaryList.value = response

  searchResult.value = diaryList.value
  updateTotalPages()
})

watch(isLatest, () => {
  sortDiaries()
})

watch(search, () => {
  handleSearch()
})

watch([searchResult, currentPage], () => {
  updateTotalPages()
})

const getDate = (date: Date | string) => {
  const newDate = new Date(date)
  return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
}

const sortDiaries = () => {
  searchResult.value = isLatest.value
    ? searchResult.value.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    : searchResult.value.sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
}

const handleSearch = async () => {
  const response = await DiaryAPI.searchDiaryByKeyword(user.value!.name, search.value)

  diaryList.value = response

  searchResult.value = diaryList.value.filter((diary) => diary.content.includes(search.value))
  currentPage.value = 1
  sortDiaries()
}

const updateTotalPages = () => {
  totalPages.value = Math.ceil(searchResult.value.length / ITEMS_PER_PAGE)
}

const paginatedDiaryList = computed(() => {
  const start = (currentPage.value - 1) * ITEMS_PER_PAGE
  return searchResult.value.slice(start, start + ITEMS_PER_PAGE)
})

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1
  }
}

const handleClickDiary = (diary: Diary) => {
  console.log(diary)
  selectedDiary.value = diary
  isModalOpen.value = true
}
</script>

<style scoped>
.search-result-container {
  min-height: 100%;
  max-width: calc(90vw);
  border-radius: 25px;
  border: 1.5px solid #fefefe;
  background-color: #fdfbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 30px 20px;
}
.search-result-list {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 30px;
  padding: 10px 30px;
  border-bottom: 2px solid black;
}
</style>
