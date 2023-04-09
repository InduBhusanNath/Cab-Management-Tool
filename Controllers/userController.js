var path=require('path');

function showUserPage(req,res){
    res.render(path.join(__dirname,'../Views/Admin/users.ejs'));
}
module.exports={
    _showUserPage:showUserPage
    
}