import createNewUser from '../useCase/create'
import { IUser } from '../domain/index'
import { Response, Request } from 'express'

export default class UserController {
  public createUser (req: Request, res: Response): Response {
    const name: string = req.body.name
    const email: string = req.body.email
    const newCreatedUser: IUser = createNewUser(name, email)
    return res.send(newCreatedUser).status(200)
  }
}
