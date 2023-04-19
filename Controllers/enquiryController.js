const enquiryModel=require('../Models/enquiryModel.js'); 
 
 function getEnquiryData(req,res){
    received_data={
        trip_type:req.body.trip_type,
        n_pickupdate:req.body.n_pickupdate,
        n_returndate:req.body.n_returndate,
        n_pickuptime:req.body.n_pickuptime,
        n_prospectName:req.body.n_prospectName,
        n_prospectPhone:req.body.n_prospectPhone,
        n_prospectfrom:req.body.n_prospectfrom,
        n_prospectto:req.body.n_prospectto
    };
   
      var insert_data=[
           received_data.trip_type,
           received_data.n_pickupdate,
           received_data.n_returndate,
           received_data.n_pickuptime,
           received_data.n_prospectName,
           received_data.n_prospectPhone,
           received_data.n_prospectfrom,
           received_data.n_prospectto
      ];
     enquiryModel.insert_query(insert_data, function(result){
           res.send(result);
     });
    
    
    
    
     
    
    
 }

module.exports={    
     processData:getEnquiryData   
}

