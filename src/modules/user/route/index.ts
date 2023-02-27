import { Router } from 'express'
import UserController from '../controller'

const routes = Router()

routes.post('/create', new UserController().createUser)

export default routes
