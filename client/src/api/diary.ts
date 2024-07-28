import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + '/diary',
  withCredentials: true
})

const searchDiaryByKeyword = async (userName: string, keyword: string): Promise<Diary[]> => {
  try {
    const response = await axiosInstance.get(`/searchByKeword/${userName}`, {
      params: {
        searchWord: keyword
      }
    })

    console.log('searchDiary response: ', response)

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
      params: {
        submitDate: date
      }
    })

    console.log('searchDiaryByDate response: ', response)

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
    const response = await axiosInstance.post(`/submit/${userName}`, data)
    console.log('writeDiary response: ', response)

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

const hasDiary = async (userName: string, date: string): Promise<boolean> => {
  try {
    const response = await axiosInstance.get(`/exists/${userName}`, {
      params: {
        searchDate: date
      }
    })

    console.log('hasDiary response: ', response)

    if (response.data.data.resultCode && response.data.data.resultCode !== 'FAIL') {
      return false
    }

    return true
  } catch (error) {
    console.log('hasDiary error: ', error)
    return false
  }
}

const diaryAPI = {
  searchDiaryByKeyword,
  searchDiaryByDate,
  createDiary,
  hasDiary
}

export default diaryAPI
