import express from 'express'
import userRoutes from '../../modules/user/route'

const app = express()
const port: number = 3333

app.use('/user', userRoutes)

app.listen(port, () => console.log(`running on ${port}`))
