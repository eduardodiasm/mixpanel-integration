import createUser from '../create'
import User from '../../domain'

describe('User - create', () => {
  it('Should create an user', () => {
    const user = createUser('cadu', 'carloseduardodiasm@gmail.com')
    expect(user).toBeInstanceOf(User)
  })
})
