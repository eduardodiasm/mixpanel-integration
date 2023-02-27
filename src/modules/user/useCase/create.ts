import User, { IUser } from '../domain'
import mixpanel from '../../../tools/mixpanel'

function integrateOnMixpanelEngage (user: IUser) {
  return mixpanel.track('event name', user)
}

export default function (name: string, email: string): IUser {
  const newCreatedUser = new User({ name, email })
  integrateOnMixpanelEngage(newCreatedUser)
  return newCreatedUser
}
