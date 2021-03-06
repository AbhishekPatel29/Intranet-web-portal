const express=require('express');
const router=express.Router()
const memberController=require('../controller/memberController')
const multer=require('multer')
const path=require('path')
const jwt = require('jsonwebtoken');



//jwt auth middleware
const authenticateToken=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(authHeader){
      const token = authHeader.split(' ')[1];
      console.log("token",token);
      const ver = jwt.verify(token,"sdvsjdnvjsdvbjbvssafdsa");
      console.log(ver);
      next();
  }
  else {
      res.status(401).json({status:'unauthorized'})
  }
  

}

//multer config
var Storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../intranet/public/upload/image')
    },
    filename: (req, file, cb)=> {
      cb(null, + Date.now() + path.extname(file.originalname));
    }
  })

  //multer middleware
var upload = multer({ storage: Storage }).single('image')

//multer config for contact us
var contact_storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'../../intranet/public/upload/contact')
  },filename:(req,file,cb)=>{
    cb(null,+Date.now()+path.extname(file.originalname))
  }
})

var contact_upload=multer({storage:contact_storage,limits: {
  fileSize: 1024 * 1024 * 5, // max 5 MB
}}).single('file')

router.post('/user',upload,memberController.memberdata);
router.get('/getuser',authenticateToken,memberController.getmember);
router.post('/register',memberController.register);
router.post('/login',memberController.login)
router.post('/contactus',contact_upload,memberController.contactus)
router.get('/getContactUs',memberController.getContactUs)
module.exports=router