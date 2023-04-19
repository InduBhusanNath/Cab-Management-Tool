const bannerModel=require('../Models/bannerModel');

function getBannerData(req,res){
     var bannerPath='/Images/'+(req.body.bannerName); 
     
     res.send(bannerPath);   

}
module.exports={
    recievedData:getBannerData
};