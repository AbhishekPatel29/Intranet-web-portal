const Employee = require("../model/employee.schema");
const Login=require("../model/login.Schema")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const secretKey="sdvsjdnvjsdvbjbvssafdsa"
memberdata=(req,res)=>{
    const Employeedata= new Employee(req.body);
    Employeedata.save()
    .then(()=>{
        res.status(200).send(Employeedata)
    })
    .catch((e)=>{
        res.status(400).send(e)
    })
}
getmember=(req,res)=>{
    Employee.find({},(err,result)=>{
        if(err)
        throw err;
        else{
            res.send(result)
        }
    })
}
register=async(req,res)=>{
const salt=await bcrypt.genSalt(10);

const hashpassword=await bcrypt.hash(req.body.password,salt)
const email=req.body.email
const newemp=Login({
email:email,
password:hashpassword
})
newemp.save()
.then(()=>{
    res.status(200).send(newemp)
})



}
login=async(req,res)=>{
    email=req.body.email
    password=req.body.password
    const user=await Login.findOne({email}).lean()
    
    if(!user){
        return res.json({status:'error',error:'Invalid email and password'})
      }
      if(bcrypt.compare(password,user.password)){
        const token = jwt.sign({id:user._id,email:user.email},secretKey)
    
        return res.json({status:'ok',token: token})
}
}



module.exports={ memberdata,getmember,register,login}