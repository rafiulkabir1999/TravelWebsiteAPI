const express = require('express')
const Tour = require('./Tour/Tour.js') 
const mongoose = require('mongoose')
const ConnectDB = require('./configbd')
const bodyparser = require('body-parser')
const Blog = require('./Blog/blog.js')
const Photos = require('./Photos/photos.js')
const cors = require('cors')

const app = express()
ConnectDB();

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(cors())


app.use('/tour',Tour)
app.use('/blog',Blog)
app.use('/photos',Photos)
app.get('/',(req,res) => {
    res.send('welcome to port 5000')
})



 
    
    

app.listen(5000,async()=> {
  
    console.log("server is running on port 5000")
})

