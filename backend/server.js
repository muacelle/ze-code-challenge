import express from 'express'
import * as dotenv from 'dotenv'
import { novoParceiro } from './controllers/post.js'
import { buscarParceiro } from './controllers/get.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const port = process.env.PORT || 8080
const app = express()

app.use(express.json())

app.post('/', novoParceiro)

app.get('/', buscarParceiro)

app.put('/:id', updateFunction)

app.delete('/:id', deleteFunction)

app.listen(port, () => console.log(`Server started on port ${port}`))