import express from 'express'
import mongoose from 'mongoose'

import Fruit from './models/fruits'
import Meat from './models/meats'
import Vegetable from './models/vegetables'

import 'dotenv/config'


const app = express()

const Port = process.env.PORT

app.use(express.json())

await mongoose.connect(process.env.MONGO_URI)

console.log("mongoDB Connected")

app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.get('/fruits', async(req, res) =>{
    const fruits = await Fruit.find({})
    res.json(fruits)
})

app.get('/meats', async(req, res) =>{
    const meats = await Meat.find({})
    res.json(meats)
})

app.get('/vegetables', async(req, res) =>{
    const vegetables = await Vegetable.find({})
    res.json(vegetables)
})

app.get('/fruits/:fruit', async(req, res) =>{
    const fruitInfo = await Fruit.find({name: req.params.fruit})
    res.json(fruitInfo) 
})

app.get('/meats/:meat', async(req, res) =>{
    const meatInfo = await Meat.find({name: req.params.meat})
    res.json(meatInfo) 
})

app.get('/vegetables/:vegetable', async(req, res) =>{
    const vegetableInfo = await Vegetable.find({name: req.params.vegetable})
    res.json(vegetableInfo) 
})

app.listen(Port, () =>{
    console.log("listening on port:", Port)
})