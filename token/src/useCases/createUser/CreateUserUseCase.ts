import { client } from "../../prisma/client"

import { hash } from "bcryptjs"

interface IUserRequest {
  name: string
  password: string
  username: string
}

class CreateUserUsecase {

  async execute({username, password, name}: IUserRequest){
    //verificar se usuario ja existe
    const userAlreadyExists = await client.user.findFirst({
      where:{
        username
      }
    })
    if(userAlreadyExists){
      throw new Error("User already exists!")
    }
    //cadastr o usuario

    const passwordHash = await hash(password, 8)

    const user = await client.user.create({
      data:{
        name,
        username,
        password : passwordHash,
      }
    })
    return user

  }

}

export { CreateUserUsecase }