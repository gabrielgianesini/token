import { sign } from "jsonwebtoken"

class GenerateTokenProvider{

  
  async execute(userId: string) {
    const token = sign({}, "f90acbd9-f750-41ab-a7d4-bea61e742778",{
      subject: userId,
      expiresIn: "20s"
    })

    
    return token
  }

}

export { GenerateTokenProvider }
