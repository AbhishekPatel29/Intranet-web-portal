const express=require('express');
const router=express.Router()
const memberController=require('../controller/memberController')
const multer=require('multer')
const path=require('path')

//multer config
var Storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../intranet/public')
    },
    filename: (req, file, cb)=> {
      cb(null, + Date.now() + path.extname(file.originalname));
    }
  })

var upload = multer({ storage: Storage }).single('image')


router.post('/user',upload,memberController.memberdata);
router.get('/getuser',memberController.getmember);
router.post('/register',memberController.register);
router.post('/login',memberController.login)

module.exports=router