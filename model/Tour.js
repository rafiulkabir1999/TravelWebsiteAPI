const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    form:{
        type:String,
        require:true,
    },
    to:{
        type:String,
        require:true,
    },
    max:{
        type:Number,
        require:true,
    },
    join:{
        type:Number,
        require:true,
    },
    date:{
        type:String,
        require:true,
    },
    cost:{
        type:String,
        require:true
    },
    people:[
      {
        name:String,
        phone: String
      }
    ]
 
})

const Tour = mongoose.model('Tour',Schema)
module.exports = Tour;