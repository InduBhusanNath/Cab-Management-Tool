const routes=require("./Routes/routes.js");
const express=require("express");
const port=8080;
var app=express();
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const router=express.Router();
app.use(router);

app.use('/',routes);

app.listen(port,function(){
    console.log("Application is listening at http://localhost:"+port);
});