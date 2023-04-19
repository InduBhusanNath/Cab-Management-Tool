const userModel=require('../Models/userModel.js');
var path=require('path');
const bcrypt=require('bcrypt');
const saltRounds=10;
//Show User Page

function showUserPage(req,res){
    res.render(path.join(__dirname,'../Views/Admin/users.ejs'));
}


//Submit User Form
function getUserData(req,res){
    
     received_data={
         'name':req.body.n_name,
         'phone':req.body.n_phone,
         'username':req.body.n_username,
         'password':req.body.n_password,
         'address':req.body.n_address,
         'adminStatus':req.body.n_adminStatus,
         'designation':'NA'
     };
      
     bcrypt.hash(received_data.password,saltRounds,function(err,hashPwd){
          return hashPwd;              
     });

     var secretPassword=bcrypt.hashSync('received_data.password',10);   

     var insert_data=[
         received_data.name,
         received_data.phone,
         received_data.username,
         secretPassword,
         received_data.address,
         received_data.adminStatus,
         received_data.designation
         
     ];
     
     
    userModel.insert_query(insert_data,function(result){
         res.send(result);
    });

     

}
module.exports={
    _showUserPage:showUserPage,
    _insertUser:getUserData    
}