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
     var sql="CREATE TABLE userTable(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255),phone VARCHAR(255),username VARCHAR(255),password VARCHAR(255),address VARCHAR(255),admin_status VARCHAR(255),designation VARCHAR(255))";
     con.query(sql,function(err,result){
         if(err) throw err;
         console.log("userTable Created.....");

     });
        

     
     
      

});


         
         
         
         
         
         
         