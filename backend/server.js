import express from 'express'
import * as dotenv from 'dotenv'
import { novoParceiro } from './controllers/post.js'
import { carregarParceiro } from './controllers/carregar.js'
import { buscarParceiro } from './controllers/buscar.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const port = process.env.PORT || 8080
const app = express()

app.use(express.json())

app.post('/', novoParceiro)

app.get('/:id', carregarParceiro)

app.get('/', buscarParceiro)

app.listen(port, () => console.log(`Server started on port ${port}`))