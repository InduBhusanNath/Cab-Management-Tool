
    //Collecting Variables
     var prospect_request_form=document.getElementById("prospect_request_form");
     var res=document.getElementById("res");
     var oneway=document.getElementById("oneway");
     var roundtrip=document.getElementById("roundtrip");
     var pickupdate=document.getElementById("pickupdate");
     var returndate=document.getElementById("returndate")
     var pickuptime=document.getElementById("pickuptime");
     var prospectName=document.getElementById("prospectName");
     var prospectPhone=document.getElementById("prospectPhone");
     var prospectfrom=document.getElementById("prospectfrom");
     var prospectto=document.getElementById("prospectto");

     //Check for one way or two way
     oneway.addEventListener('click',function disablereturndate(){ 
        returndate.disabled=true;
        roundtrip.checked=false;
        pickupdate.disabled=false;
        returndate.value="NA";
     });
     roundtrip.addEventListener('click',function enablebothdates(){
        returndate.disabled=false;
        pickupdate.disabled=false;
        oneway.checked=false;
     });




        

     
    
    //Processing prospect_request_form
     prospect_request_form.addEventListener("submit",function submit_prospect_request_form(event){
         
           event.preventDefault();
           var res=document.getElementById("res");
           var oneway=document.getElementById("oneway").value;
           var roundtrip=document.getElementById("roundtrip").value;           
           var trip_type;
           var pickupdate=document.getElementById("pickupdate").value;           
           var returndate=document.getElementById("returndate").value;
           var pickup_date;
           var return_date;
           var pickuptime=document.getElementById("pickuptime").value;
           var prospectName=document.getElementById("prospectName").value;
           var prospectPhone=document.getElementById("prospectPhone").value;
           var prospectfrom=document.getElementById("prospectfrom").value;
           var prospectto=document.getElementById("prospectto").value;


           if(document.getElementById("oneway").checked==false&&document.getElementById("roundtrip").checked==false){
                res.innerHTML="Specify the Trip Type: One Way or Round Trip";
                return false;
           }else if(document.getElementById("oneway").checked==true){
                   
                   if(pickupdate.length==0){
                   res.innerHTML="Please Enter Pick Up Date.....";
                   return false;
                  }else{
                      trip_type=oneway;
                      pickup_date=pickupdate;
                      return_date="NA";
                  }   

           }else if(document.getElementById("roundtrip").checked==true){
                
                if(pickupdate.length==0||returndate.length==0){
                  res.innerHTML="Please Specify Pick Up and Return Dates.....";
                  return false;
                }else{
                   trip_type=roundtrip;
                   pickup_date=pickupdate;
                   return_date=returndate;
               }                
           }

           if(prospectName.length==0){
             res.innerHTML="Please Type Your Name.....";
             return false;
           }
           if(isNaN(prospectPhone)||prospectPhone.length==0){
             res.innerHTML="Please Type Your Phone Number Correctly.....";
             return false;
           }
           if(prospectfrom.length==0){
             res.innerHTML="Please Type Pick Up Address.....";
             return false;
           }
           if(prospectto.length==0){
             res.innerHTML="Please Type Destination Address.....";
             return false;
           }
           
           let send_data1 = JSON.stringify({
                                         trip_type: trip_type,
                                         n_pickupdate:pickup_date,
                                         n_returndate:return_date,
                                         n_pickuptime:pickuptime,
                                         n_prospectName:prospectName,
                                         n_prospectPhone:prospectPhone,
                                         n_prospectfrom:prospectfrom,
                                         n_prospectto:prospectto            
           });

         const xhr1=new XMLHttpRequest();
         xhr1.open('POST','insert_enquiry',true);
         xhr1.setRequestHeader('Content-type','application/json; charset=utf-8');
         xhr1.send(send_data1);
         xhr1.onload=function(){
                                     if (xhr1.readyState == 4 && xhr1.status == 200) {
                                     res.innerHTML = xhr1.response;
                                  } else {
                                             res.innerHTML='Error';
                                  }
        }

       prospect_request_form.reset(); 
          

    

    });
