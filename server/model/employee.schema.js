const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const employeeSchema= new Schema({
    image:String,
    name:String,
    profile:String,
    location:String,
    discription:String,
    Date:String,
    like:Number,
    comment:Number
});

const Employee=mongoose.model("Employee",employeeSchema);
module.exports=Employee;