import User, { IUser } from '../domain'
import mixpanel from '../../../tools/mixpanel'

function callCreateUserEventMixpanel (user: IUser) {
  /*
    A mrd da função do mixpanel altera por referência o objeto que é passado,
    tenho que fazer a cópia para ele não fuder meu usuário com os dados do mixpanel
    depois de chamar a função.
  */

  const userCopy = { ...user }
  const eventName = 'CreateUser'
  mixpanel.track(eventName, userCopy)
  return { ...userCopy, eventName }
}

export default function (name: string, email: string): IUser {
  const newCreatedUser = new User({ name, email })
  const mixpanelReturn = callCreateUserEventMixpanel(newCreatedUser)
  console.log({ mixpanelReturn })
  return newCreatedUser
}
