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
            class="search-result-list"
          >
            <p class="w-[10%]">{{ result.date }}</p>
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
</template>

<script setup lang="ts">
import { ref, watch, onBeforeMount, computed } from 'vue'
import authAPI from '@/api/auth'
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast.store'
import CommonInput from '@/components/input/CommonInput.vue'

const router = useRouter()
const { addToast } = useToastStore()

const isLatest = ref<boolean>(true)

const search = ref<string>('')
const currentPage = ref<number>(1)
const totalPages = ref<number>(1)
const diaryList = ref<Diary[]>([
  {
    emotion: 'Happy',
    content:
      '오늘 아침, 새벽부터 강아지와 산책을 했다. 공기가 맑고 상쾌해서 기분이 좋았다. 평소보다 더 긴 산책을 하며 주변 풍경도 감상했다. 이후엔 친구들과 커피숍에서 만나 오랜만에 즐거운 시간을 보냈다. 서로의 근황을 이야기하고, 맛있는 디저트와 커피를 마시며 웃음이 끊이지 않았다. 오후에는 영화 한 편을 보고, 저녁에는 가족들과 함께 저녁 식사를 했다. 하루가 금방 지나갔다. 이렇게 보람차고 행복한 하루는 오랜 기억으로 남을 것 같다. 내일도 오늘처럼 즐겁게 보낼 수 있기를 바란다.',
    feedback: '',
    date: '2021/10/10'
  },
  {
    emotion: 'Blue',
    content:
      '직장에서 바쁜 하루를 보냈다. 아침부터 중요한 회의가 연달아 이어져서 정신없이 시간을 보냈다. 새로운 프로젝트가 시작되어 많은 준비와 계획이 필요했다. 회의가 계속 이어져 피곤했지만, 동료들과 협력하며 어려운 문제를 해결해 나가는 과정이 보람있었다. 저녁에는 집으로 돌아와 가족들과 함께 맛있는 저녁을 먹으며 피로를 풀었다. 하지만, 머릿속엔 아직도 끝나지 않은 일들이 떠올라 마음이 무거웠다. 오늘은 일찍 잠자리에 들어 내일을 준비해야겠다.',
    feedback: '',
    date: '2022-10-10'
  },
  {
    emotion: 'Peaceful',
    content:
      '오늘은 비가 와서 하루 종일 집에 있었다. 아침에 창문을 통해 비가 내리는 소리를 들으며 따뜻한 차를 마시는 여유를 즐겼다. 오랜만에 집에서 보내는 시간이 많아서 책을 읽고, 영화도 한 편 보았다. 비가 내리는 소리를 배경으로 고요하고 평화로운 시간이 흘렀다. 오후에는 간단한 요리를 하며 저녁 식사를 준비했고, 가족들과 함께 도란도란 이야기를 나눴다. 이렇게 평화롭고 차분한 하루가 가끔은 꼭 필요하다는 생각이 들었다. 오늘 밤은 편안히 잠들 수 있을 것 같다.',
    feedback: '',
    date: '2023.10.10'
  },
  {
    emotion: 'Happy',
    content:
      '오늘 아침, 새벽부터 강아지와 산책을 했다. 공기가 맑고 상쾌해서 기분이 좋았다. 평소보다 더 긴 산책을 하며 주변 풍경도 감상했다. 이후엔 친구들과 커피숍에서 만나 오랜만에 즐거운 시간을 보냈다. 서로의 근황을 이야기하고, 맛있는 디저트와 커피를 마시며 웃음이 끊이지 않았다. 오후에는 영화 한 편을 보고, 저녁에는 가족들과 함께 저녁 식사를 했다. 하루가 금방 지나갔다. 이렇게 보람차고 행복한 하루는 오랜 기억으로 남을 것 같다. 내일도 오늘처럼 즐겁게 보낼 수 있기를 바란다.',
    feedback: '',
    date: '2021/10/10'
  },
  {
    emotion: 'Blue',
    content:
      '직장에서 바쁜 하루를 보냈다. 아침부터 중요한 회의가 연달아 이어져서 정신없이 시간을 보냈다. 새로운 프로젝트가 시작되어 많은 준비와 계획이 필요했다. 회의가 계속 이어져 피곤했지만, 동료들과 협력하며 어려운 문제를 해결해 나가는 과정이 보람있었다. 저녁에는 집으로 돌아와 가족들과 함께 맛있는 저녁을 먹으며 피로를 풀었다. 하지만, 머릿속엔 아직도 끝나지 않은 일들이 떠올라 마음이 무거웠다. 오늘은 일찍 잠자리에 들어 내일을 준비해야겠다.',
    feedback: '',
    date: '2022-10-10'
  },
  {
    emotion: 'Peaceful',
    content:
      '오늘은 비가 와서 하루 종일 집에 있었다. 아침에 창문을 통해 비가 내리는 소리를 들으며 따뜻한 차를 마시는 여유를 즐겼다. 오랜만에 집에서 보내는 시간이 많아서 책을 읽고, 영화도 한 편 보았다. 비가 내리는 소리를 배경으로 고요하고 평화로운 시간이 흘렀다. 오후에는 간단한 요리를 하며 저녁 식사를 준비했고, 가족들과 함께 도란도란 이야기를 나눴다. 이렇게 평화롭고 차분한 하루가 가끔은 꼭 필요하다는 생각이 들었다. 오늘 밤은 편안히 잠들 수 있을 것 같다.',
    feedback: '',
    date: '2023.10.10'
  },
  {
    emotion: 'Happy',
    content:
      '오늘 아침, 새벽부터 강아지와 산책을 했다. 공기가 맑고 상쾌해서 기분이 좋았다. 평소보다 더 긴 산책을 하며 주변 풍경도 감상했다. 이후엔 친구들과 커피숍에서 만나 오랜만에 즐거운 시간을 보냈다. 서로의 근황을 이야기하고, 맛있는 디저트와 커피를 마시며 웃음이 끊이지 않았다. 오후에는 영화 한 편을 보고, 저녁에는 가족들과 함께 저녁 식사를 했다. 하루가 금방 지나갔다. 이렇게 보람차고 행복한 하루는 오랜 기억으로 남을 것 같다. 내일도 오늘처럼 즐겁게 보낼 수 있기를 바란다.',
    feedback: '',
    date: '2021/10/10'
  },
  {
    emotion: 'Blue',
    content:
      '직장에서 바쁜 하루를 보냈다. 아침부터 중요한 회의가 연달아 이어져서 정신없이 시간을 보냈다. 새로운 프로젝트가 시작되어 많은 준비와 계획이 필요했다. 회의가 계속 이어져 피곤했지만, 동료들과 협력하며 어려운 문제를 해결해 나가는 과정이 보람있었다. 저녁에는 집으로 돌아와 가족들과 함께 맛있는 저녁을 먹으며 피로를 풀었다. 하지만, 머릿속엔 아직도 끝나지 않은 일들이 떠올라 마음이 무거웠다. 오늘은 일찍 잠자리에 들어 내일을 준비해야겠다.',
    feedback: '',
    date: '2022-10-10'
  },
  {
    emotion: 'Peaceful',
    content:
      '오늘은 비가 와서 하루 종일 집에 있었다. 아침에 창문을 통해 비가 내리는 소리를 들으며 따뜻한 차를 마시는 여유를 즐겼다. 오랜만에 집에서 보내는 시간이 많아서 책을 읽고, 영화도 한 편 보았다. 비가 내리는 소리를 배경으로 고요하고 평화로운 시간이 흘렀다. 오후에는 간단한 요리를 하며 저녁 식사를 준비했고, 가족들과 함께 도란도란 이야기를 나눴다. 이렇게 평화롭고 차분한 하루가 가끔은 꼭 필요하다는 생각이 들었다. 오늘 밤은 편안히 잠들 수 있을 것 같다.',
    feedback: '',
    date: '2023.10.10'
  },
  {
    emotion: 'Happy',
    content:
      '오늘 아침, 새벽부터 강아지와 산책을 했다. 공기가 맑고 상쾌해서 기분이 좋았다. 평소보다 더 긴 산책을 하며 주변 풍경도 감상했다. 이후엔 친구들과 커피숍에서 만나 오랜만에 즐거운 시간을 보냈다. 서로의 근황을 이야기하고, 맛있는 디저트와 커피를 마시며 웃음이 끊이지 않았다. 오후에는 영화 한 편을 보고, 저녁에는 가족들과 함께 저녁 식사를 했다. 하루가 금방 지나갔다. 이렇게 보람차고 행복한 하루는 오랜 기억으로 남을 것 같다. 내일도 오늘처럼 즐겁게 보낼 수 있기를 바란다.',
    feedback: '',
    date: '2021/10/10'
  },
  {
    emotion: 'Blue',
    content:
      '직장에서 바쁜 하루를 보냈다. 아침부터 중요한 회의가 연달아 이어져서 정신없이 시간을 보냈다. 새로운 프로젝트가 시작되어 많은 준비와 계획이 필요했다. 회의가 계속 이어져 피곤했지만, 동료들과 협력하며 어려운 문제를 해결해 나가는 과정이 보람있었다. 저녁에는 집으로 돌아와 가족들과 함께 맛있는 저녁을 먹으며 피로를 풀었다. 하지만, 머릿속엔 아직도 끝나지 않은 일들이 떠올라 마음이 무거웠다. 오늘은 일찍 잠자리에 들어 내일을 준비해야겠다.',
    feedback: '',
    date: '2022-10-10'
  },
  {
    emotion: 'Peaceful',
    content:
      '오늘은 비가 와서 하루 종일 집에 있었다. 아침에 창문을 통해 비가 내리는 소리를 들으며 따뜻한 차를 마시는 여유를 즐겼다. 오랜만에 집에서 보내는 시간이 많아서 책을 읽고, 영화도 한 편 보았다. 비가 내리는 소리를 배경으로 고요하고 평화로운 시간이 흘렀다. 오후에는 간단한 요리를 하며 저녁 식사를 준비했고, 가족들과 함께 도란도란 이야기를 나눴다. 이렇게 평화롭고 차분한 하루가 가끔은 꼭 필요하다는 생각이 들었다. 오늘 밤은 편안히 잠들 수 있을 것 같다.',
    feedback: '',
    date: '2023.10.10'
  }
])
const searchResult = ref<Diary[]>([])
const ITEMS_PER_PAGE = 10

onBeforeMount(async () => {
  try {
    const response = await authAPI.checkLogin()
    if (response.userSeq !== 1) {
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

const sortDiaries = () => {
  searchResult.value = isLatest.value
    ? searchResult.value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : searchResult.value.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

const handleSearch = () => {
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

// onBeforeMount(() => {
//   searchResult.value = diaryList.value
// })

// watch(isLatest, () => {
//   searchResult.value = isLatest.value
//     ? searchResult.value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
//     : searchResult.value.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
// })

// const handleSearch = () => {
//   searchResult.value = diaryList.value.filter((diary) => diary.content.includes(search.value))
// }
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
