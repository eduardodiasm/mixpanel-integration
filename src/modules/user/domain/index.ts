interface IUser {
  name: string
  email: string
}

class User implements IUser {
  public name
  public email

  constructor (args: any) {
    this.name = args.name
    this.email = args.email
  }
}

export default User
