function send(){
    var arr = document.getElementsByTagName('input');
    let ten = arr[0].value;
    let email = arr[1].value;
    let sdt = arr[2].value;

    if(ten == ""){
        document.getElementById('checkten').innerHTML = "* bắt buộc";
    }else{
        document.getElementById('checkten').innerHTML = "";
    }
    
    if(email ==""){
        document.getElementById('checkemailrong').innerHTML = "* bắt buộc";
    }else{
        document.getElementById('checkemailrong').innerHTML = "";
        if(checkemail(email)){
            document.getElementById('checkemailrong').innerHTML = "";
        }else{
            document.getElementById('checkemailrong').innerHTML = "* Emai sai cú pháp";
        }
    }
    

    if(sdt == ""){
        document.getElementById('checkSdtrong').innerHTML  = "* bắt buộc";
    }else{
        document.getElementById('checkSdtrong').innerHTML = "";
        if(isNaN(sdt)){
            document.getElementById('checkSdtrong').innerHTML ="* phải là số";
        }else{
            document.getElementById('checkSdtrong').innerHTML ="";
        }
    }
   

}
function checkemail(p){
    return /^\S+@\S+\.\S+$/.test(p);
}
function tienhoc(){
    var khoahoc = document.getElementById('khohoc');
    var tienhoc = document.getElementById('phihoc');
    tienhoc.value = khoahoc.value;
}