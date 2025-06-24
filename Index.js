import express from 'express'
import mongoose from 'mongoose'

import Fruit from './models/fruits.js'
import Meat from './models/meats.js'
import Vegetable from './models/vegetables.js'

import 'dotenv/config'
import { error } from 'console'
import { object } from 'webidl-conversions'


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
    try{
        const fruit =  await Fruit.findOne({name: req.params.fruit})
        if(!fruit){
            return res.status(404).json({error: `No fruit named ${req.params.fruit}`})
        }
        res.json(fruit)   
     } catch(err){
        res.status(500).json({error: 'server error'})
     }

    res.json(fruit) 
})

app.get('/meats/:meat', async(req, res) =>{
    try{
        const meat =  await Meat.findOne({name: req.params.meat})
        if(!meat){
            return res.status(404).json({error: `No meat named ${req.params.meat}`})
        }
        res.json(meat)   
     } catch(err){
        res.status(500).json({error: 'server error'})
}})

app.get('/vegetables/:vegetable', async(req, res) =>{
    try{
        const veg =  await Fruit.findOne({name: req.params.vegetable})
        if(!veg){
            return res.status(404).json({error: `No vegetable named ${req.params.vegetable}`})
        }
        res.json(veg)   
     } catch(err){
        res.status(500).json({error: 'server error'})
}})

app.post('/fruits', async (req, res) => {
  try {
    const fruit = await Fruit.create(req.body)
    res.status(201).json(fruit)
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message)
      return res.status(400).json({
        error: 'Validation failed',
        details: messages
      })
    }

    res.status(500).json({ error: 'Server error' })
  }
})



app.post('/meats', async(req, res) =>{
    try{
        const meat = await Meat.create(req.body)
        res.status(201).json(meat)
    }
    catch (err){
        if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message)
      return res.status(400).json({
        error: 'Validation failed',
        details: messages
      })
    }

    res.status(500).json({ error: 'Server error' })
  }
})

app.post('/vegetables', async(req, res) =>{
    try{
        const veg = await Vegetable.create(req.body)
        res.status(201).json(veg)
    }
    catch (err){
        if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message)
      return res.status(400).json({
        error: 'Validation failed',
        details: messages
      })
    }

    res.status(500).json({ error: 'Server error' })
  }
})
app.listen(Port, () =>{
    console.log("listening on port:", Port)
})