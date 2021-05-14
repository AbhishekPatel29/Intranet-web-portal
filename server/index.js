const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const bcrypt=require("bcrypt")
const mongoose=require("mongoose");

const Router=require('./route/route')
const app = express();
//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


//Routes
app.get("/",(req,res)=>{
    res.json({"message":"Hello World"});
})

//Port
const Port = 3005;

//Server 
app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`);
})

//connecting to Mongodb Database
mongoose.connect("mongodb://localhost:27017/users",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log("Database connected")
})



// app.post("/register",async(req,res)=>{
//     try{
//         const salt= await bcrypt.genSalt(10)
//         const  hashPassword= await bcrypt.hash(req.body.password,salt)
//     }
// catch{

// }
// })
app.use('/api',Router)