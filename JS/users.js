var user_form=document.getElementById("user_form");
var show_user_form=document.getElementById("show_user_form");
var hide_user_form=document.getElementById("hide_user_form");
//Page Refresh
function refreshPage(){
     document.location.reload(true);
}
hide_user_form
//Show User Form
show_user_form.onclick=function(){     
     user_form.style.display="block";
};
//Hide User Form
hide_user_form.onclick=function(){
     user_form.style.display="none";
     refreshPage();
}
//validate and submit User Form
var add_user_form=document.getElementById("add_user_form");
add_user_form.addEventListener("submit",function(e){
      e.preventDefault();
      var name=document.getElementById("name").value;
           if(name.length==0){
                document.getElementById("name").style.border="1px solid red";
                return false;
          }  
     
      var phone=document.getElementById("phone").value;
           if(phone.length==0||isNaN(phone)){
                document.getElementById("phone").style.border="1px solid red";
                 return false;
          }

      var username=document.getElementById("username").value;
           if(username.length==0){
                document.getElementById("username").style.border="1px solid red";
                return false;
           }

      var password=document.getElementById("password").value;
          if(password.length==0){
                document.getElementById("password").style.border="1px solid red";
                return false;               
          }
      var address=document.getElementById("address").value;
      var adminStatus=document.getElementById("adminStatus").value;

      var sendData1=JSON.stringify(
          {
               'n_name':name,
               'n_phone':phone,
               'n_username':username,
               'n_password':password,
               'n_address':address,
               'n_adminStatus':adminStatus
          }
      );
      
      
      
      const xhr1=new XMLHttpRequest();
      xhr1.open('POST','insert_userData',true);
      xhr1.setRequestHeader('Content-type','application/json;charset=utf-8');
      xhr1.send(sendData1);
      xhr1.onload=function(){
           document.getElementById("res1").innerHTML=xhr1.response;
      }
      
      
       
      
      
      
      
      add_user_form.reset();




           
         

      

      
     
});
    