const express = require ("express")
const Router = express.Router()
const Tour = require("../model/Tour.js")


Router.get('/',async(req,res)=>{
  const data = await Tour.find({});
  res.send(data).status(200)
})

//post requst for create Tour        tour/create
Router.post('/create',(req,res)=> {
  const {form,to,max,date,cost} = req.body
  if(form && to && max && date){
    try {
        var tour = new Tour({
            form,
            to,
            max,
            date,
            cost,
            
        })
         tour.save();
        res.send('Tour has been Created Successfully').status(200)
       } catch (error) {
        console.log(error)
       }
  }
  else{
    res.sendStatus(400)
  }

   
})

Router.post('/:tourid/join',async(req,res) => {
  
  const tourid = req.params.tourid;
  console.log(tourid)
  const {name,phone} = req.body
  try {
     const checkvalidation = await Tour.find({_id : tourid})
     if(checkvalidation[0].people.length >= checkvalidation[0].max ){
       res.send(400)
     }
    else{
      await Tour.updateOne({_id:tourid},{$push :{people:{name:name,phone:phone}}})
      const RES = await Tour.find({})
      res.send(RES)
    }
  
   
  } catch (error) {
    res.sendStatus(403)
  }
})

Router.get('/search/:search', async(req,res) => {
  let Search = req.params.search.slice(0,1).toUpperCase() + req.params.search.replace(/^\s+|\s+$/gm,'').slice(1).toLowerCase()
  
  console.log(Search.replaceAll(" ", ""))
 try {
      const result = await Tour.find({to:Search.replaceAll(" ", "")})
      console.log(result[0])
      if(result.length > 0){
        res.send(result).status(200)
      }
 else res.send(result)
 } catch (error) {
  res.send("Search Failed").status(400)
}

}
)

module.exports  = Router