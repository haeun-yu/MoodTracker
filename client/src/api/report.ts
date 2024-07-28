import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + '/report',
  withCredentials: true
})

const getReport = async (userName: string, date: string): Promise<string | null> => {
  try {
    const response = await axiosInstance.get(`/monthlyFeedback/${userName}`, {
      params: {
        requestYearMonth: date
      }
    })

    console.log('getReport response: ', response)

    if (response.data.data.resultCode && response.data.data.resultCode !== 'SUCCESS') {
      return null
    }

    return response.data.data.monthlyFeedback
  } catch (error) {
    console.log('getReport error: ', error)
    return null
  }
}

const createReport = async (data: ReportForm): Promise<boolean> => {
  try {
    const response = await axiosInstance.post(`/submit`, data)
    console.log('createReport response: ', response)

    if (response.data.data.resultCode === 'SUCCESS') {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('createReport error: ', error)
    return false
  }
}

const getMonthScore = async (userName: string, date: string): Promise<number[]> => {
  try {
    const response = await axiosInstance.get(`/chart/${userName}`, {
      params: {
        requestYearMonth: date
      }
    })

    console.log('getMonthScore response: ', response)

    if (response.data.data.resultCode && response.data.data.resultCode === 'FAIL') {
      return []
    }

    return response.data.data
  } catch (error) {
    console.log('getMonthScore error: ', error)
    return []
  }
}

const reportAPI = {
  getReport,
  createReport,
  getMonthScore
}

export default reportAPI
