function send(){
    var arr = document.getElementsByTagName('input');
    var hoten = arr[0].value;
    var email = arr[1].value;
    var sdt = arr[2].value;
    var username = arr[3].value;
    var Pass = arr[4].value;
    var rePass = arr[5].value;
    var cbc1 = arr[6].checked;
    var cbc2 = arr[7].checked;
    var cb1 = arr[9].checked;
    var cb2 = arr[10].checked;
    var cb3 = arr[11].checked;

    if(hoten==""){
        document.getElementById("hoten").innerHTML="* bắt buộc"
    }else{
        document.getElementById("hoten").innerHTML=""
        
    }

    if(email==""){
        document.getElementById("email").innerHTML="* bắt buộc"
    }else{
        document.getElementById("email").innerHTML=""
        
    }
    if(checkEmail(email)){
        document.getElementById("checkemail").innerHTML=""
    }else{
        document.getElementById("checkemail").innerHTML="*Email sai cú pháp"
    }
    if(sdt==""){
        document.getElementById("sdt").innerHTML="* bắt buộc"
    }else{
        document.getElementById("sdt").innerHTML=""
        
    }
    if(isNaN(sdt)){
        document.getElementById("number").innerHTML="* phải nhập số"
    }else{
        document.getElementById("number").innerHTML=""
    }
    if(username==""){
        document.getElementById("username").innerHTML="* bắt buộc"
    }else{
        document.getElementById("username").innerHTML=""
        
    }
    if(Pass==""){
        document.getElementById("pass").innerHTML="* bắt buộc"
    }else{
        document.getElementById("pass").innerHTML=""
        
    }
    if(rePass==""){
        document.getElementById("repass").innerHTML="* bắt buộc"
    }else{
        document.getElementById("repass").innerHTML=""
        
    }
    if(cb1||cb2||cb3){
        document.getElementById("checkbox").innerHTML=""
    }else{
        document.getElementById("checkbox").innerHTML="* bắt buộc"
    }

    if(Pass==rePass){
        document.getElementById("checkrepass").innerHTML=""
    }else{
        document.getElementById("checkrepass").innerHTML="* mật khẩu không giống"
    }
    if(username.length < 8){
        document.getElementById("checkus").innerHTML="* bắt buộc >= 8"
    }else{
        document.getElementById("checkus").innerHTML=""
    }

    
    
}
function seVip(){
    var duy = document.getElementsByName('cbc');
    var pvc = cdocument.getElementById('pvc');
    if(duy[0].checked){
        pvc.value = "qua bạn bè + 10%";
    }
    if(duy[1].checked){
        pvc.value = "qua facebook +20%";
    }
}
function checkEmail(email){
    return /^\S+@\S+\.\S+$/.test(email);
}
