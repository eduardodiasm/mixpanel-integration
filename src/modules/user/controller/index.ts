import createNewUser from '../useCase/create'
import { IUser } from '../domain/index'

export default class UserController {
  public createUser (): IUser {
    return createNewUser('Caduzera', 'carloseduardodiasm@gmail.com')
  }
}
