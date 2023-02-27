import createNewUser from '../useCase/create'
import { IUser } from '../domain/index'
import { Response, Request } from 'express'

export default class UserController {
  public createUser (req: Request, res: Response): Response {
    const newCreatedUser: IUser = createNewUser('Caduzera', 'carloseduardodiasm@gmail.com')
    return res.send(newCreatedUser).status(200)
  }
}
