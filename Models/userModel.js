//Inserting User Form Data

const dbcon=require('../Database/dbcon.js');
const con=dbcon.con;
var msg;
function insert_data(insert_data,flag){
     let sql="INSERT INTO usertable(name,phone,username,password,address,admin_status,designation)VALUES(?,?,?,?,?,?,?)";
     let val=insert_data;
     con.query(sql,val,function(err,result){
        if(err) throw err;
        if(result.affectedRows=='1'){ 
            flag("User Details Submitted.....");      
                                                             
        }        

     });
}

module.exports={
    insert_query:insert_data,   

};
