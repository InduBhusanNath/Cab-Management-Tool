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
//Controllers
const enquiry=require('../Controllers/enquiryController.js');
const user=require('../Controllers/userController.js');
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
//Enquiry Form Submission
router.post('/insert_enquiry',enquiry.processData);
//User Form Display
router.get('/users',user._showUserPage);
     


module.exports=router;