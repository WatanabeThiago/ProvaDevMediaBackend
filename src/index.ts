import express from 'express'
import 'reflect-metadata'
import './database/connect'
import routes from './routes'


const app = express()

app.use(express.json())
app.use(routes)
 

app.listen(3000, ( ) => console.log('[🔥 SERVIDOR] Servidor iniciado na porta 3000'))