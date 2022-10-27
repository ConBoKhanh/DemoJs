// Tạo form

function sinhVien(ten,tuoi,lop,diemCsharp , diemJavascript , diemHTML){
    this.ten = ten ;
    this.tuoi = tuoi ;
    this.lop = lop;
    this.diemCsharp = diemCsharp ;
    this.diemJavascript = diemJavascript ;
    this.diemHTML = diemHTML ;
}
// Tạo lop qlsv       
let mangSV = new Array();  
let mangKetQua = "";
let mangDiemTB = new Array();   
// tao doi tuong
let diemTB = parseFloat(0);
let i = 0 ;
let table = document.getElementById("ketqua");
function xuat(){
    i++ ;
      
    let inputs = document.getElementById("form").elements ;
    let name = inputs["ten"].value ;
    let age = inputs["tuoi"].value;
    let lophoc = inputs["lop"].value;
    let diemC = parseFloat(inputs["diemCSharp"].value);
    let diemJavas =  parseFloat(inputs["diemJS"].value);
    let diemHTML =  parseFloat(inputs["diemHTML"].value);
     
    if(name.trim().length === 0 || age.length === 0 || lophoc.trim().length === 0 || diemC.length === 0 || diemJavas.length === 0 || diemHTML.length === 0){
        alert("CHua nhap du thong tin");
        return;
    }
    
    alert("Thêm thành công =))");

    let sv = new sinhVien(name,age,lophoc,diemC,diemJavas,diemHTML);
    mangSV.push(sv);
    
        diemTB = ((sv.diemCsharp) + (sv.diemJavascript) + (sv.diemHTML)) /3 ;
        mangDiemTB.push(diemTB);
        
    

        if(diemTB < 5){
            mangKetQua  = "Truot" ;

        }
        else{
            mangKetQua = "Đo" ;
        }
    
        // in ra table
        let row = (`
        <table>
        <tr>
        <td>  ${sv.ten}</td>
        <td>  ${sv.tuoi}</td>
        <td>  ${sv.lop}</td>
        <td>  ${sv.diemCsharp}</td>
        <td>  ${sv.diemJavascript}</td>
        <td>  ${sv.diemHTML}</td>
        <td>  ${diemTB.toFixed(2)}</td>
        <td class="ketQua">  ${mangKetQua}</td>
        </tr>
        </table>
        `);

        table.innerHTML +=row ;
    doiMau();
    
}
// them

let ketqua = document.getElementsByClassName("ketQua");
function doiMau(){
    for(let i = 0 ; i < mangSV.length ; i++){
    
       if(mangDiemTB[i] >=5 && mangDiemTB[i] <= 10){
        ketqua[i].classList.add("dat");
        
       }
if(mangDiemTB[i] >= 0 && mangDiemTB[i] < 5){
        ketqua[i].classList.add("khongdat");
       }
       
    }
}