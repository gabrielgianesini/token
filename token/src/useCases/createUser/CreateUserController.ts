import { Request, Response } from "express"
import { CreateUserUsecase } from "./CreateUserUseCase"


class CreateUserController {

  async handle(request: Request, response: Response){
    const { username, name, password } = request.body

    const createUserUsecase = new CreateUserUsecase()

    const user = await createUserUsecase.execute({
      username,
      name, 
      password,
    })
    return response.json(user)

  }



}

export { CreateUserController }