import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + '/email',
  withCredentials: true
})

const sendVerificationEmail = async (data: { mail: string }): Promise<boolean> => {
  try {
    const response = await axiosInstance.get('/mailSend', {
      params: data
    })

    if (response.data.data.resultCode !== 'SUCCESS') {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('sendVerificationEmail error: ', error)
    return false
  }
}

const checkVerificationCode = async (data: { userNumber: string }): Promise<boolean> => {
  try {
    const response = await axiosInstance.get('/mailCheck', {
      params: data
    })

    if (response.data.data.resultCode !== 'SUCCESS') {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('checkVerificationCode error: ', error)
    return false
  }
}

const emailAPI = { sendVerificationEmail, checkVerificationCode }

export default emailAPI
