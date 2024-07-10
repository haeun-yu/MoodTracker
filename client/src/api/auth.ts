import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + '/auth',
  withCredentials: true
})

const checkLogin = async (): Promise<boolean> => {
  try {
    const response = await axiosInstance.get(``)

    return response.data
  } catch (error) {
    console.log('checkLogin error: ', error)
    throw error
  }
}

const signup = async (data: User): Promise<any> => {
  try {
    const response = await axiosInstance.post(`/join`, data)

    return response.data
  } catch (error) {
    console.log('signup error: ', error)
    throw error
  }
}

const getInformation = async (): Promise<User[]> => {
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

const resetPassword = async (data: { email: string }): Promise<any> => {
  try {
    const response = await axiosInstance.post(`/reset`, data)

    return response.data
  } catch (error) {
    console.log('resetPassword error: ', error)
    throw error
  }
}

const deleteAccount = async (): Promise<any> => {
  try {
    const response = await axiosInstance.delete(`/withdraw`)

    return response.data
  } catch (error) {
    console.log('deleteAccount error: ', error)
    throw error
  }
}

const authAPI = { checkLogin, signup, getInformation, login, logout }

export default authAPI
