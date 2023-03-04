/* eslint-disable import/first */
import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from '../../modules/user/route'

const app = express()
const port: number = 3333

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', userRoutes)

app.listen(port, () => console.log(`running on ${port}`))
