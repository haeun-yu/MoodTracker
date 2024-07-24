import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + '/diary',
  withCredentials: true
})

const cookie = document.cookie

const searchDiaryByKeyword = async (userName: string, keyword: string): Promise<Diary[]> => {
  try {
    const response = await axiosInstance.get(`/searchByKeword/${userName}`, {
      headers: {
        Cookie: cookie
      },
      params: {
        searchWord: keyword
      }
    })

    if (response.data.data.resultCode && response.data.data.resultCode !== 'FAIL') {
      return []
    }

    return response.data.data
  } catch (error) {
    console.log('searchDiary error: ', error)
    return []
  }
}

const searchDiaryByDate = async (userName: string, date: string): Promise<Diary | null> => {
  try {
    const response = await axiosInstance.get(`/searchByDate/${userName}/date`, {
      headers: {
        Cookie: cookie
      },
      params: {
        submitDate: date
      }
    })

    if (response.data.data.resultCode && response.data.data.resultCode !== 'FAIL') {
      return null
    }

    return response.data.data
  } catch (error) {
    console.log('searchDiaryByDate error: ', error)
    return null
  }
}

const createDiary = async (userName: string, data: DiaryForm): Promise<boolean> => {
  try {
    // const data = {
    //   content: string
    //   feedback: string
    //   feedbackCode: string
    //   emotion: string
    // }
    const response = await axiosInstance.post(`/submit/${userName}`, data, {
      headers: {
        Cookie: cookie
      }
    })

    if (response.data.data.resultCode === 'SUCCESS') {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('writeDiary error: ', error)
    return false
  }
}

const diaryAPI = {
  searchDiaryByKeyword,
  searchDiaryByDate,
  createDiary
}

export default diaryAPI
