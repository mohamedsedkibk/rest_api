const mongoose=require('mongoose') 
const Schema= mongoose.Schema
const userschema= new Schema({
    firstname: String ,
    lastname: String ,
    email: String ,
    age: Number ,

})
const user = mongoose.model('user',userschema) 
module.exports=user