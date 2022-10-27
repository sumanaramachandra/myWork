const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv/config')

const postsRoute = require('./routes/posts')
app.use(bodyParser.json())
app.use('/posts', postsRoute)

app.get('/', (req,res)=>{
    res.send("MiniPost homepage")
})


mongoose.connect(process.env.MURL, ()=>{
    console.log("connected to mongodb")
})

app.listen(3000, ()=>{
    console.log("server is up and running")
})