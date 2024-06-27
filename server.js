const express= require('express')
const app= express()
const mongoose=require('mongoose')
const user=require('./model/user.schema')
require('dotenv').config()
const port = process.env.Port || 8000
app.use(express.json())
mongoose.connect(process.env.URI)
.then(()=>console.log('data base is ok'))
.catch((err)=>console.log('error',err))


app.post('/add-some',(req,res)=>{
  const { firstname ,lastname,email, age}=req.body

  console.log('firstname',firstname)
  console.log('lastname',lastname)
  console.log('email',email)
  console.log('age',age)

  const newPerson= new user(req.body)
  newPerson.save()
  .then((()=>res.status(200).json('success')))
.catch((err)=>{
    console.log('error',err) ;
})
}

)

app.get('/get-users',(req,res)=>{
  user.find()
  .then(((users)=>res.status(200).json(users)))
.catch((err)=>{
    console.log('error',err) ;
})
})
app.delete('/delete-user/:name',(req,res)=>{
  user.deleteOne({firstname: req.params.name})
  .then((()=>res.status(200).json('delete successfully')))
.catch((err)=>{
    console.log('error',err) ;
})
})

app.put('/update-user/:id',(req,res)=>{
  const { firstname ,lastname,email, age}=req.body

  console.log('id',req.params.id)
  // console.log('firstname',firstname)
  // console.log('lastname',lastname)
  // console.log('email',email)
  // console.log('age',age)

  const updateUser= new user(req.body)

  
  
  user.updateOne({firstname:req.params.id},{$set:updateUser}
  
    )
    .then((()=>res.status(200).json('update successfully')))
.catch((err)=>{
    console.log('error',err) ;
})

})






app.listen(port,(err)=>{
err? console.log('error',err) : console.log(`server is ok ${port}`)
})