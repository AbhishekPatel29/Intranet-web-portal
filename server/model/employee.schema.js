const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const employeeSchema= new Schema({
    name:String,
    profile:String,
    location:String,
    Date:String,
});

const Employee=mongoose.model("Employee",employeeSchema);
module.exports=Employee;