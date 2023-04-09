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
//validate User Form
    
