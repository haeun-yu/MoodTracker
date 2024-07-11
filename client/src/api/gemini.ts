import { GoogleGenerativeAI } from '@google/generative-ai'
const KEY = import.meta.env.VITE_GEMINI_KEY

class Gemini {
  private genAI: GoogleGenerativeAI | null = null
  private model: any = null
  private handleResult: (result: string) => void = () => {}

  constructor(handleResult: (result: string) => void) {
    this.handleResult = handleResult
    this.genAI = new GoogleGenerativeAI(KEY)
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.0-pro' })
  }

  public generate = async (prompt: string) => {
    try {
      const result = await this.model.generateContent(prompt)

      const response = result.response
      const text = response.text()

      this.handleResult(text)
    } catch (error: any) {
      console.log(error.message)
    }
  }
}

export default Gemini
