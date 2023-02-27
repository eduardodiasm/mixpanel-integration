import User, { IUser } from '../domain'
import mixpanel from '../../../tools/mixpanel'

function integrateOnMixpanelEngage (user: IUser) {
  const userCopy = { ...user }
  const eventName = 'Criação de usuário'
  mixpanel.track(eventName, userCopy)
  return { ...userCopy, eventName }
}

export default function (name: string, email: string): IUser {
  const newCreatedUser = new User({ name, email })
  console.log(integrateOnMixpanelEngage(newCreatedUser))
  return newCreatedUser
}
