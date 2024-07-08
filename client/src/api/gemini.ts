import { GoogleGenerativeAI } from '@google/generative-ai'

class Gemini {
  private genAI: GoogleGenerativeAI | null = null
  private model: any = null
  private handleResult: (result: string) => void = () => {}

  constructor(handleResult: (result: string) => void) {
    this.handleResult = handleResult
  }

  public setAPIKey = (key: string) => {
    this.genAI = new GoogleGenerativeAI(key)
  }

  public setModel = (model: string) => {
    if (!this.genAI) {
      alert('API key is not set')
      return
    }

    this.model = this.genAI.getGenerativeModel({ model })
  }

  public generate = async (prompt: string) => {
    if (!this.genAI) {
      alert('API key is not set')
      return
    }

    try {
      const result = await this.model.generateContent(prompt)

      const response = result.response
      const text = response.text()

      this.handleResult(text)
    } catch (error: any) {
      alert(error.message)
    }
  }
}

export default Gemini
