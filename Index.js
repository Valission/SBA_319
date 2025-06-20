import express from 'express'
import mongoose from 'mongoose'

import 'dotenv/config'

const app = express()

const PORT = process.env.PORT

app.use(express.json())

await mongoose.connect(process.env.MONGO_URI)

console.log("mongoDB Connected")

app.get('/', (req, res) =>{
    res.send('Hello world')
})