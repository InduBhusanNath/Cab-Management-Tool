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
     var sql="CREATE TABLE blogTable(id INT AUTO_INCREMENT PRIMARY KEY,image_location VARCHAR(255),heading VARCHAR(255),credentials VARCHAR(255),body VARCHAR(255))";
     con.query(sql,function(err,result){
         if(err) throw err;
         console.log("blogsTable Created.....");

     });
        

     
     
      

});


         
         
         
         
         
         
         