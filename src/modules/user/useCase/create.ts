import User from '../domain'

export default function (name: string, email: string) {
  const user = new User({ name, email })
  return user
}
