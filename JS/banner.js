var banner_form=document.getElementById("banner_form");
var show_banner_form=document.getElementById("show_banner_form");
var hide_banner_form=document.getElementById("hide_banner_form");
var add_banner_form=document.getElementById("add_banner_form");
var res1=document.getElementById("res1");

//Refresh Page
function refreshPage(){
     location.reload(true);
}
//Display Banner Form
show_banner_form.onclick=function(){
      banner_form.style.display="block";
}
//Hide Display Form
hide_banner_form.onclick=function(){
      banner_form.style.display="none";
      refreshPage();
}
//Submit Banner form
banner_form.addEventListener('submit',function(e){
      e.preventDefault();
      var banner=document.getElementById("banner").files[0];
          if(banner.length==0){
                document.getElementById("banner").style.border="1px solid red";               
                return false;
          }          
         
       var send_data=new FormData();
       send_data.append("n_banner",banner);
       send_data.append("bannerName",banner.name);

       

      

      const xhr1=new XMLHttpRequest();
          xhr1.open("POST",'insert_banner', true);
          //xhr1.setRequestHeader('Content-type','multipart/form-data');

          xhr1.send(send_data);
          xhr1.onload = function(){
               res1.innerHTML=xhr1.response;
          };
               
      banner_form.reset();

     
});




