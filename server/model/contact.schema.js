const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const contactSchema= new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    description:{type:String,required:true},
    file:String
})

const Contact=mongoose.model("Contact",contactSchema)
module.exports=Contact;