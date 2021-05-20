const Employee = require("../model/employee.schema");
const Login=require("../model/login.Schema")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');
const Contact = require("../model/contact.schema");




//secret key for jwt token
const secretKey="sdvsjdnvjsdvbjbvssafdsa"

//api for inserting employee data
memberdata=(req,res)=>{
    const Employeedata= new Employee(
        {
            image: req.file.filename,
            name: req.body.name,
            profile: req.body.profile,
            location: req.body.location,
            discription: req.body.discription,
            Date: req.body.Date,
            like: req.body.like,
            comment: req.body.comment,
          }
    );
    Employeedata.save()
    .then(()=>{
        res.status(200).send(Employeedata)
    })
    .catch((e)=>{
        res.status(400).send(e)
    })
}
//api for fetching employee data
getmember=(req,res)=>{
    Employee.find({},(err,result)=>{
        if(err)
        throw err;
        else{
            res.send(result)
        }
    })
}

//api for registering user
register=async(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    if(!email || typeof email !=='string'){
        console.log(email,password)
        return res.json({status:'error',error:'Invalid email'})
    }

    if(!password || typeof password !=='string'){
        return res.json({status:'error',error:'Invalid password'})
    }

    if(password.length<7){
        return res.json({status:'error',error:'Password should be atleast 7 character'})
    }

const salt=await bcrypt.genSalt(10);

const hashpassword=await bcrypt.hash(req.body.password,salt)
try{
const newemp= await Login.create({
email:email,
password:hashpassword
})


console.log("User Created Successfully",newemp)
}
catch(error){
    console.log(JSON.stringify(error) )
    if(error.code===11000){
        return res.json({status:'error',error:'Email already in use'});
    }  
}
res.json({status:'ok',message:'Registered Successfully'});
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
//api for contactus 
contactus=async(req,res)=>{
    try{
        const contact= await Contact.create({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        description:req.body.description,
        file:req.body.file,
    })
    console.log(contact)
}
catch(error){
    console.log(JSON.stringify(error) )
    if(error.code===11000){
        return res.json({status:'error',error:'Email already in use'});
    }  
}
res.json({status:'ok',message:'Registered Successfully'});
}


//api for fetching contactus data
getContactUs=(req,res)=>{
    Contact.find({},(err,result)=>{
        if(err)
        throw err;
        else{
            res.send(result)
        }
    })
}



module.exports={ memberdata,getmember,register,login,contactus,getContactUs}