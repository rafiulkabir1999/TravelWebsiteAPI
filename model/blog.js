const mongoose = require('mongoose')

const model = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    blog:{
        type:String,
        require:true
    },
    created_at: { 
        type: Date,
         required: true, 
         default: Date.now
     }
})

const blog = mongoose.model('blog',model)
module.exports = blog