const express=require('express')
const notes = require('./data/notes')
const dotenv =require('dotenv').config()
const cors=require('cors')
const bodyParser=require('body-parser')
const app=express()
const connectDB= require('./config/db')
const route=require('./routes/route')
const { urlencoded } = require('body-parser')

app.get('/', (req,res)=>{
res.send('api is running')
})

connectDB()
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',route)


app.get('/api/notes',(req,res)=>{
    res.json(notes)
})
app.get('/api/notes/:id',(req,res)=>{
    const note= notes.find((n)=> n._id===req.params.id)
    res.json(note)
})

const PORT= process.env.PORT|| 6000
app.listen(PORT,console.log(`server started on port ${PORT}`)) 

