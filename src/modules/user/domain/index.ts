export interface IUser {
  name: string
  email: string
}

class User {
  public name: string
  public email: string

  constructor (args: IUser) {
    this.name = args.name
    this.email = args.email
  }
}

export default User
