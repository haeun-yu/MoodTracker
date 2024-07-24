import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + '/auth',
  withCredentials: true
})

const checkLogin = async (): Promise<boolean> => {
  try {
    const response = await axiosInstance.get(``)
    console.log('checkLogin response: ', response)

    if (response.data.data.loggedIn) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('checkLogin error: ', error)
    return false
  }
}

const signUp = async (data: UserForm): Promise<boolean> => {
  try {
    const response = await axiosInstance.post(`/join`, data)
    console.log('signup response: ', response)

    if (response.data.data.resultCode === 'SUCCESS') {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('signup error: ', error)
    return false
  }
}

const getInformation = async (): Promise<User | null> => {
  try {
    const response = await axiosInstance.get(`/info`)
    console.log('getInformation response: ', response)

    if (response.data.data.resultCode && response.data.data.resultCode !== 'FAIL') {
      return response.data.data
    } else {
      return null
    }
  } catch (error) {
    console.log('getUsers error: ', error)
    return null
  }
}

const login = async (data: Login): Promise<boolean> => {
  try {
    const response = await axiosInstance.post(`/login`, data)
    console.log('login response: ', response)

    if (response.data.data.resultCode === 'SUCCESS') {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('login error: ', error)
    return false
  }
}

const logout = async (): Promise<boolean> => {
  try {
    const response = await axiosInstance.get(`/logout`)
    console.log('logout response: ', response)

    if (response.data.data.resultCode === 'SUCCESS') {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('logout error: ', error)
    return false
  }
}

const resetPassword = async (data: {
  currentPassword: string
  newPassword: string
}): Promise<string> => {
  try {
    const response = await axiosInstance.post(`/reset`, data)
    console.log('resetPassword response: ', response)

    if (response.data.data.resultCode === 'SUCCESS') {
      return ''
    } else {
      return response.data.data.message
    }
  } catch (error: any) {
    console.log('resetPassword error: ', error)
    return error.data.message
  }
}

const deleteAccount = async (data: { password: string }): Promise<boolean> => {
  try {
    const response = await axiosInstance.post(`/withdraw`, data)
    console.log('deleteAccount response: ', response)

    if (response.data.data.resultCode === 'SUCCESS') {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('deleteAccount error: ', error)
    return false
  }
}

const authAPI = { checkLogin, signUp, getInformation, login, logout, resetPassword, deleteAccount }

export default authAPI
