type Login = {
  email: string
  password: string
}

type User = {
  userName: string
  email: string
  password: string
}

type Diary = {
  date: string
  emotion: string
  content: string
  feedback: string
}

type DiaryForm = {
  emotion: string
  content: string
  feedback: string
  feedbackCode?: string
}

type Toast = {
  id?: string
  message: string
  timeout?: number
}

type CheckLogin = {
  loggedIn: boolean
  userSeq: 0 | 1
  userName: string
  message: string
}
