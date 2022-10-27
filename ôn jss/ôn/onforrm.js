function send() {
   var arr = document.getElementsByTagName('input');
   let ten = arr[0].value;
   let email = arr[1].value;
   let sdt = arr[2].value;
   let user = arr[3].value;
   let pass = arr[4].value;
   let repass = arr[5].value;
   let cbc1 = arr[9].checked;
   let cbc2 = arr[10].checked;
   let cbc3 = arr[11].checked;
   if (ten == "") {
      document.getElementById('checkTen').innerHTML = "*bắt buộc";
   } else {
      if(ten.length < 8){
         document.getElementById('checkTen').innerHTML = "* vui lòng nhập > 8";
      }else{
         document.getElementById('checkTen').innerHTML = "";
      }
     
   }

   if (email == "") {
      document.getElementById('checkEmail').innerHTML = "*bắt buộc";
   } else {
      if(!checkEmail(email)){
         document.getElementById('checkEmail').innerHTML = "*email sai cú pháp";
          
      }else{
         document.getElementById('checkEmail').innerHTML = "";
        
      }
   }

   if (sdt == "") {
      document.getElementById('checksdt').innerHTML = "*bắt buộc";
   } else {
      if(isNaN(sdt)){
         document.getElementById('checksdt').innerHTML = "* chỉ nhập số";
      }else{
         if(sdt.length <=10){
            document.getElementById('checksdt').innerHTML = "* sđt phải >10<11";
         }else{
            document.getElementById('checksdt').innerHTML = "";
         }
      }
      
   }
   if(user ==""){
      document.getElementById('checkUser').innerHTML = "*bắt buộc";
   }else{
      if(user.length < 8){
         document.getElementById('checkUser').innerHTML = "* vui lòng nhập > 8";
      }else{
         document.getElementById('checkUser').innerHTML = "";
      }
    
   }
   if(pass ==""){
      document.getElementById('checkpassword').innerHTML = "*bắt buộc";
   }else{
      if(!pass == repass){
        
      
      }else{
         if(pass.length < 8){
            document.getElementById('checkpassword').innerHTML = "* vui lòng nhập > 8";
         }else{
            document.getElementById('checkpassword').innerHTML = "";
         }
       
      }   
   
   }
   if(repass ==""){
      document.getElementById('checkrepass').innerHTML = "*bắt buộc";
   }else{
      if(pass == repass){
         document.getElementById('checkrepass').innerHTML = "";
     }else{
      document.getElementById('checkrepass').innerHTML = "*mật khẩu sai";
   
   }
}
   if(cbc1||cbc2||cbc3){
      document.getElementById('check').innerHTML = "";
      
   }else{
      document.getElementById('check').innerHTML = "*bắt buộc";
   }
   
  
}

function checkEmail(p){
   return /^\S+@\S+\.\S+$/.test(p);

}
function gioitinh(){
   var duy = document.getElementsByName('cbc');
   var tien = document.getElem          entById('tiengioitinh');
   if(duy[0].checked){
      tien.value = "nam +10k"
   }
   if(duy[1].checked){
      tien.value = "nu +10k"
   }
}
function tienkhoahoc(){
   var mon = document.getElementById('khoahoc');
   var tien = document.getElementById('tienhoc');
  tien.value = mon.value
}