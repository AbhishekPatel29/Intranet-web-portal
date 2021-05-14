const express=require('express');
const router=express.Router()
const memberController=require('../controller/memberController')

router.post('/user',memberController.memberdata);
router.get('/getuser',memberController.getmember);
router.post('/register',memberController.register);


module.exports=router