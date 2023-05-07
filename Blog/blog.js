const express = require('express')
const Blogpost = require('../model/blog.js')

const Router = express.Router()

Router.get('/',async(req,res) => {
    try {
       const blog = await Blogpost.find({})
       console.log(blog)
       res.send(blog).status(200)
    } catch (error) {
      res.status(400)
    }
})

Router.post('/',async(req,res)=>{
    const {title , author , blog } = req.body
    console.log(author,blog,title)
     if(title && author && blog ){
        try {
       
          var newblog = new Blogpost({
                                    title,
                                    author,
                                    blog,
                                   })
        newblog.save()
        
        res.send('blog succesfully added to the database').status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}
})

module.exports = Router ;