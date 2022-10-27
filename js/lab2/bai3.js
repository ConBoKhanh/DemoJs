let trongLuong=prompt("Nhập vào trọng lượng cơ thể:");
let chieuCao=prompt("Nhập vào chiều cao:");
let BMI=(trongLuong)/(chieuCao*chieuCao);
if(BMI<18.5){
alert("Thiếu cân");
}else if(BMI>=18.5&&BMI<=24.99){
alert("Cân nặng rất chi bình thường");
}else if(BMI>=25 &&BMI<=29.99){
alert("Thừa cân rồi");
}else{
alert("Béo vãi");
}