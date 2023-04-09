//Inserting Enquiry Form Data

const dbcon=require('../Database/dbcon.js');
const con=dbcon.con;
var msg;
function insert_data(insert_data,flag){
     let sql="INSERT INTO enquirytable(trip_type,pickup_date,return_date,pickup_time,prospect_name,prospect_phone,pickup_address,drop_address)VALUES(?,?,?,?,?,?,?,?)";
     let val=insert_data;
     con.query(sql,val,function(err,result){
        if(err) throw err;
        if(result.affectedRows=='1'){ 
            flag("Enquiry Submitted, You Will Be Contacted Soon.....");       
                                                             
        }        

     });
}

module.exports={
    insert_query:insert_data,
    
    
    

}
