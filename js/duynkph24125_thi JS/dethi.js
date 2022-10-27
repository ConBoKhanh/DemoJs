function send(){
    var arr = document.getElementsByTagName('input');
    let email = arr[0].value;
    let matkhau = arr[1].value;

    if(email == ""){
        document.getElementById('checkEmail').innerHTML =" * Bắt buộc"
    }else{
        if(checkEmail(email)){
            document.getElementById('checkEmail').innerHTML =""
        }else{
            document.getElementById('checkEmail').innerHTML =" * email sai"
        }
        

    }
    if(matkhau == ""){
        document.getElementById('checkPass').innerHTML =" * Bắt buộc"
    }else{
        if(matkhau.length>=6 && matkhau.length<=20){
            document.getElementById('checkPass').innerHTML =""
        }else{
            document.getElementById('checkPass').innerHTML ="* pass>6<20"
        }
        
    }
}
function checkEmail(p){
    return/^\S+@\S+\.\S+$/.test(p);
}