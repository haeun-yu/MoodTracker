import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + '/calendar',
  withCredentials: true
})

const getDiaryList = async (userName: string, date: string): Promise<Diary[]> => {
  try {
    const res = await axiosInstance.get(`/monthly/${userName}`, {
      params: { requestYearMonth: date }
    })
    console.log('getDiaryList response: ', res)

    if (res.data.data.resultCode !== 'FAIL') {
      return res.data.data
    } else {
      return []
    }
  } catch (error) {
    console.error(error)
    return []
  }
}

const getDiary = async (userName: string, date: string): Promise<Diary | null> => {
  try {
    const res = await axiosInstance.get(`/date/${userName}`, {
      params: { requestYearMonth: date }
    })

    console.log('getDiary response: ', res)

    if (res.data.data.resultCode !== 'FAIL') {
      return res.data.data
    } else {
      return null
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

const getEmotionCount = async (
  userName: string,
  date: string
): Promise<{ emotion: string; count: number }[]> => {
  try {
    const res = await axiosInstance.get(`/monthly/top3-emotions/${userName}`, {
      params: { requestYearMonth: date }
    })

    console.log('getEmotionCount response: ', res)

    if (res.data.data.resultCode !== 'FAIL') {
      return res.data.data.count
    } else {
      return []
    }
  } catch (error) {
    console.error(error)
    return []
  }
}

const getMonthlyCount = async (userName: string, date: string): Promise<number> => {
  try {
    const res = await axiosInstance.get(`/monthly/writing-count/${userName}`, {
      params: { requestYearMonth: date }
    })
    console.log('getMonthlyCount response: ', res)

    if (res.data.data.resultCode !== 'FAIL') {
      return res.data.data.count
    } else {
      return 0
    }
  } catch (error) {
    console.error(error)
    return 0
  }
}

const getLongestConsecutive = async (userName: string, date: string): Promise<number> => {
  try {
    const res = await axiosInstance.get(`/monthly/longest-streak/${userName}`, {
      params: { requestYearMonth: date }
    })
    console.log('getLongestConsecutive response: ', res)

    if (res.data.data.resultCode !== 'FAIL') {
      return res.data.data.count
    } else {
      return 0
    }
  } catch (error) {
    console.error(error)
    return 0
  }
}

const calendarAPI = {
  getDiaryList,
  getDiary,
  getEmotionCount,
  getMonthlyCount,
  getLongestConsecutive
}

export default calendarAPI
