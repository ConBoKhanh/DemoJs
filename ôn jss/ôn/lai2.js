function send(){
    let arr = document.getElementsByTagName('input');
    let hoten = arr[0].value;
    let email = arr[1].value;
    let sdt = arr[2].value;
    let username = arr[3].value;
    let pass = arr[4].value;
    let rePass = arr[5].value;
    let nam = arr[6].checked;
    let nu = arr[7].checked; 
    let cbc1 = arr[9].checked;
    let cbc2 = arr[10].checked;
    let cbc3 = arr[11].checked;

    if(hoten==""){
        document.getElementById('checkten').innerHTML ="* bat buoc"
    }else{
        document.getElementById('checkten').innerHTML =""
    }
    if(hoten==""){
        document.getElementById('checkten').innerHTML ="* bat buoc"
    }else{
        document.getElementById('checkten').innerHTML =""
    }
    if(email==""){
        document.getElementById('chackEmail').innerHTML ="* bat buoc"
    }else{
        document.getElementById('chackEmail').innerHTML =""
    }
    if(sdt==""){
        document.getElementById('rongsdt').innerHTML ="* bat buoc"
    }else{
        document.getElementById('rongsdt').innerHTML =""
    }
    if(username==""){
        document.getElementById('rongUs').innerHTML ="* bat buoc"
    }else{
        document.getElementById('rongUs').innerHTML =""
    }
    if(username.length < 8){
        document.getElementById('longUs').innerHTML ="* bat buoc"
    }else{
        document.getElementById('longUs').innerHTML =""
    }
    if(pass==""){
        document.getElementById('rongPass').innerHTML ="* bat buoc"
    }else{
        document.getElementById('rongPass').innerHTML =""
    }
    if(rePass==""){
        document.getElementById('rongRepass').innerHTML ="* bat buoc"
    }else{
        document.getElementById('rongRepass').innerHTML =""
    }
    if(pass == rePass){
        document.getElementById('giong').innerHTML =""
    }else{
        document.getElementById('giong').innerHTML ="* mat khau sai"
    }
    if(cbc1||cbc2||cbc3){
        document.getElementById('checkbox').innerHTML =""
    }else{
        document.getElementById('checkbox').innerHTML ="* bat buoc"
    }



    if(isNaN(sdt)){
        document.getElementById("checkSDT").innerHTML = "* bat buoc"
    }else{
        document.getElementById("checkSDT").innerHTML = ""
    }
    if(checkEmail(email)){
        document.getElementById("loi").innerHTML = ""
    }else{
        document.getElementById("loi").innerHTML = "* email loi"
    }

}
function tiennong(){
    var an = document.getElementsByName('cbc');
    var tien = document.getElementById('cc');
    if(an[0].checked){
        tien.value = " dan ong + 10000 d"
    }
    if(an[1].checked){
        tien.value = " nu + free"
    }
}
function checkEmail(p){
    return /^\S+@\S+\.\S+$/.test(p);    
}
function duydz(){
    var duy = document.getElementById('khoahoc');
    var phihoc = document.getElementById('tienhoc');
    phihoc.value = duy.value
}
