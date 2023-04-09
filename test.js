const express=require("express");
var app=express();
var path=require('path');
app.use(express.static(path.join(__dirname,'CSS')));
app.use(express.static(path.join(__dirname,'JS')));
app.use(express.json());
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'Views'));

app.get('/home',function(req,res){
    res.render('hp.ejs');     
});

app.post('/insert_enquiry',function(req,res){
      
    var trip_type=req.body.trip_type;
    const n_pickupdate=req.body.n_pickupdate;
    const n_returndate=req.body.n_returndate;
    const n_pickuptime=req.body.n_pickuptime;
    const n_prospectName=req.body.n_prospectName;
    const n_prospectPhone=req.body.n_prospectPhone;
    const n_prospectfrom=req.body.n_prospectfrom;
    const n_prospectto=req.body.n_prospectto;
    
    console.log(trip_type); // logs the value of trip_type to the console
    res.send("Data Received");
});


app.listen(8080,function(){
    console.log("Application is listening at 8080");
});