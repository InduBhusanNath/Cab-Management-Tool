var mysql=require('mysql');
var con=mysql.createConnection({
     host:"localhost",
     user:"root",
     password:"",
     database:"headdb"
});
con.connect(function(err){
     if(err) throw err;
     console.log("Connected.....");
     var sql="CREATE TABLE enquiryTable(trip_type VARCHAR(255),pickup_date VARCHAR(255),return_date VARCHAR(255),pickup_time VARCHAR(255),prospect_name VARCHAR(255),prospect_phone VARCHAR(255),pickup_address VARCHAR(255),drop_address VARCHAR(255))";
     con.query(sql,function(err,result){
         if(err) throw err;
         console.log("enquiryTable Created.....");

     });
        

     
     
      

});


         
         
         
         
         
         
         