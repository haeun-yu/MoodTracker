import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + '/auth',
  withCredentials: true
})

const checkLogin = async (): Promise<CheckLogin> => {
  try {
    const response = await axiosInstance.get(``)

    return response.data
  } catch (error) {
    console.log('checkLogin error: ', error)
    throw error
  }
}

const signUp = async (data: User): Promise<any> => {
  try {
    const response = await axiosInstance.post(`/join`, data)

    return response.data
  } catch (error) {
    console.log('signup error: ', error)
    throw error
  }
}

const getInformation = async (): Promise<User> => {
  try {
    const response = await axiosInstance.get(`/info`)

    return response.data
  } catch (error) {
    console.log('getUsers error: ', error)
    throw error
  }
}

const login = async (data: Login): Promise<any> => {
  try {
    const response = await axiosInstance.post(`/login`, data)

    return response.data
  } catch (error) {
    console.log('login error: ', error)
    throw error
  }
}

const logout = async (): Promise<any> => {
  try {
    const response = await axiosInstance.get(`/logout`)

    return response.data
  } catch (error) {
    console.log('logout error: ', error)
    throw error
  }
}

const resetPassword = async (data: {
  currentPassword: string
  newPassword: string
}): Promise<any> => {
  try {
    const response = await axiosInstance.post(`/reset`, data)

    return response.data
  } catch (error) {
    console.log('resetPassword error: ', error)
    throw error
  }
}

const deleteAccount = async (data: { password: string }): Promise<any> => {
  try {
    const response = await axiosInstance.post(`/withdraw`, data)

    return response.data
  } catch (error) {
    console.log('deleteAccount error: ', error)
    throw error
  }
}

const authAPI = { checkLogin, signUp, getInformation, login, logout, resetPassword, deleteAccount }

export default authAPI
