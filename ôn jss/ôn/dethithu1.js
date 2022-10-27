function send() {
    var arr = document.getElementsByTagName('input');
    var hoten = arr[0].value;
    var Email =  arr[1].value;
    var SDT =  arr[2].value;
    var User =  arr[3].value;
    var Pass =  arr[4].value;
    var rePass =  arr[5].value;
    var cbc1 = arr[7].checked;
    var cbc2 = arr[8].checked;
    var r1 = arr[8].checked;
    var r2 = arr[10].checked;
    var r3 = arr[9].checked;
    if(hoten =="" ){
        document.getElementById("hoten").innerHTML="*bắt buộc"
        
    }else{
        document.getElementById("hoten").innerHTML=""
        return;
    }
    if(Email =="" ){
        document.getElementById("email").innerHTML="*bắt buộc"
       
    }else{
        document.getElementById("email").innerHTML=""
        return;
    }


    if(isNaN(SDT)){
        document.getElementById("sdt").innerHTML="*bắt buộc"
        
    }else{
        document.getElementById("sdt").innerHTML=""
        return;
    }
    if(r1||r2||r3){
        document.getElementById("checkbox").innerHTML="";
    }else{
        alert("vui lòng chọn môn ưa thích");
        return;
    }
    
    if(Pass == rePass){
        document.getElementById("repass").innerHTML="";
    }else{
        document.getElementById("repass").innerHTML="*mật khẩu không trùng khớp";
        return;
    }
    if(User.length < 8){
        document.getElementById("username").innerHTML="*phải lớn hơn 8";
       
    }else{
        document.getElementById("username").innerHTML="";
        return;
    }
    alert("Đăng kí thành công");

   
   
}
function diadiem(){
   var nghia = document.getElementsByName("cbc");
   var pvc = document.getElementById("pvc");
   if(nghia[0].checked){
    pvc.value = "bạn giới thiệu";
   }
   if(nghia[1].checked){
    pvc.value = "facebook";
   }
}
function tienhoc(p){
    document.querySelector('#tienhoc').value = p.value
}
