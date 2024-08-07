type Login = {
  email: string
  password: string
}

type User = {
  name: string
  email: string
  password?: string
  userSeq?: number
}

type UserForm = {
  userName: string
  email: string
  password: string
}

type Diary = {
  // date: string
  emotion: string
  content: string
  feedback: string
  createdAt: Date | string
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
  name: string
  message: string
}

type ReportForm = {
  reportedMonth: string
  monthlyFeedback: string
}
