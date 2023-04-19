const express=require("express");
var app=express();
var path=require('path');
app.use(express.static(path.join(__dirname,'CSS')));
app.use(express.static(path.join(__dirname,'JS')));
app.use(express.json());
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'Views'));
const router=express.Router();
app.use(router);
const bcrypt=require('bcrypt');
const saltRounds=10;
const fs=require('fs');
const multer=require('multer');
const storage=multer.diskStorage({
     destination:function(req,file,cb){
                 cb(null,'./Images'); 
    },
     filename:function(req,file,cb){   
                 var imagePath='./Images/file.originalname';
                 if(fs.existsSync(imagePath)){                                      
                     return;
                 }else{                     
                     cb(null,file.originalname);                    
                 }           
                 
    }
});
const upload=multer({storage:storage});




//Controllers
const enquiry=require('../Controllers/enquiryController.js');
const user=require('../Controllers/userController.js');
const banner=require('../Controllers/bannerController.js');

//HomePage
router.get('/home',function(req,res){
     res.render('hp.ejs');     
});
router.get('/',function(req,res){
    res.render(path.join('hp.ejs'));    
});
//AboutUs Page
router.get('/aboutus',function(req,res){
    res.render(path.join('aboutus.ejs'));    
});
//Banner Page
router.get('/banner',function(req,res){
    res.render(path.join('./Admin/banner.ejs'));
});

//Blogs Page
router.get('/blogs',function(req,res){
    res.render(path.join('./Admin/blogs.ejs'));
});
//Banner Post
router.post('/insert_banner',upload.single('n_banner'),banner.recievedData);

     
     


//Enquiry Form Submission
router.post('/insert_enquiry',enquiry.processData);
//User Form Display
router.get('/users',user._showUserPage);
//User Form Submission
router.post('/insert_userData',user._insertUser);

     


module.exports=router;