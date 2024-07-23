import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + '/diary',
  withCredentials: true
})

const searchDiary = async (userName: string, keyword: string): Promise<any> => {
  try {
    const response = await axiosInstance.get(`/searchByKeword/${userName}`, {
      params: {
        searchWord: keyword
      }
    })

    return response.data
  } catch (error) {
    console.log('searchDiary error: ', error)
    throw error
  }
}

const searchDiaryByDate = async (userName: string, date: string): Promise<any> => {
  try {
    const response = await axiosInstance.get(`/searchByDate/${userName}/date`, {
      params: {
        submitDate: date
      }
    })

    return response.data
  } catch (error) {
    console.log('searchDiaryByDate error: ', error)
    throw error
  }
}

const writeDiary = async (userName: string, data: Diary): Promise<any> => {
  try {
    // const data = {
    //   content: string
    //   feedback: string
    //   feedbackCode: string
    //   emotion: string
    // }
    const response = await axiosInstance.post(`/submit/${userName}`, data)

    return response.data
  } catch (error) {
    console.log('writeDiary error: ', error)
    throw error
  }
}

const diaryAPI = {
  searchDiary,
  searchDiaryByDate,
  writeDiary
}

export default diaryAPI
