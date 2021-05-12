const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mongoose=require("mongoose");
const Employee = require('./model/employee.schema');

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

app.post('/user',(req,res)=>{
    const Employeedata= new Employee(req.body);
    Employeedata.save()
    .then(()=>{
        res.status(200).send(Employeedata)
    })
    .catch((e)=>{
        res.status(400).send(e)
    })
})

app.get('/getuser',(req,res)=>{
    Employee.find({},(err,result)=>{
        if(err)
        throw err;
        else{
            res.send(result)
        }
    })
})