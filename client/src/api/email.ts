import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + '/email',
  withCredentials: true
})

const sendVerificationEmail = async (data: { mail: string }): Promise<any> => {
  try {
    const response = await axiosInstance.get('/mailSend', {
      params: data
    })

    return response.data
  } catch (error) {
    console.log('sendVerificationEmail error: ', error)
    throw error
  }
}

const checkVerificationCode = async (data: { userNumber: string }): Promise<any> => {
  try {
    const response = await axiosInstance.get('/mailCheck', {
      params: data
    })

    return response.data
  } catch (error) {
    console.log('checkVerificationCode error: ', error)
    throw error
  }
}

const emailAPI = { sendVerificationEmail, checkVerificationCode }

export default emailAPI
