import axios, { Axios } from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + '/auth',
  withCredentials: true
})

const cookie = document.cookie

const checkLogin = async (): Promise<boolean> => {
  try {
    const response = await axiosInstance.get(``, {
      headers: {
        Cookie: cookie
      }
    })

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
    const response = await axiosInstance.get(`/info`, {
      headers: {
        Cookie: cookie
      }
    })

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
    const response = await axiosInstance.get(`/logout`, {
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
    const response = await axiosInstance.post(`/withdraw`, data, {
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
    console.log('deleteAccount error: ', error)
    return false
  }
}

const authAPI = { checkLogin, signUp, getInformation, login, logout, resetPassword, deleteAccount }

export default authAPI
