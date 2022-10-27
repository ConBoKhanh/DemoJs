function sinhVien(ten,tuoi,diemCsharp,diemJS,diemHTML){
    this.ten = ten;
    this.tuoi = tuoi;
    this.diemCsharp = diemCsharp;
    this.diemJS = diemJS;
    this.diemHTML = diemHTML;
}

function quanLySV(mangSV,mangDiemTB,trangThai){
    this.mangSV = mangSV;
    this.mangDiemTB = mangDiemTB;
    this.trangThai = trangThai;
    this.nhapTTSV = nhapTTSV;
    this.diemTBtungSV = diemTBtungSV;
    this.xetdiemSV = xetdiemSV;
}

let quanLySinhVien = new quanLySV();
quanLySinhVien.mangSV = [];
quanLySinhVien.mangSV.length = 2;
quanLySinhVien.mangDiemTB = [];
quanLySinhVien.trangThai = [];

function nhapTTSV(quanLySinhVien) {
    for(i=0;i<quanLySinhVien.mangSV.length;i++){
        quanLySinhVien.mangSV[i] = new sinhVien();
        quanLySinhVien.mangSV[i].ten = window.prompt(`Nhập tên sinh viên thứ ${i+1}: `);
        quanLySinhVien.mangSV[i].tuoi = parseInt(window.prompt("Nhập tuổi sinh viên: "));
        quanLySinhVien.mangSV[i].diemCsharp = parseFloat(window.prompt("Nhập điểm Csharp sinh viên: "));
        quanLySinhVien.mangSV[i].diemJS = parseFloat(window.prompt("Nhập điểm JS sinh viên: "));
        quanLySinhVien.mangSV[i].diemHTML = parseFloat(window.prompt("Nhập điểm HTML sinh viên: "));  
    };
}

function diemTBtungSV(quanLySinhVien){
    for(i=0;i<quanLySinhVien.mangSV.length;i++){
    quanLySinhVien.mangDiemTB[i] = (quanLySinhVien.mangSV[i].diemCsharp + quanLySinhVien.mangSV[i].diemJS +
    quanLySinhVien.mangSV[i].diemHTML)/3;
    };
}

function xetdiemSV(quanLySinhVien){
    for(i=0;i<quanLySinhVien.mangSV.length;i++){
        if(quanLySinhVien.mangDiemTB[i] >5){
            quanLySinhVien.trangThai[i] = "Đạt";
        }else{
            quanLySinhVien.trangThai[i] = "Trượt";
        }
    };
};

quanLySinhVien.nhapTTSV(quanLySinhVien);
quanLySinhVien.diemTBtungSV(quanLySinhVien);
quanLySinhVien.xetdiemSV(quanLySinhVien);

// console.log(quanLySinhVien.mangSV[0].ten);

for(i=0;i<quanLySinhVien.mangSV.length;i++){
document.write(`
        <tr>
            <td>
                ${quanLySinhVien.mangSV[i].ten}
            </td>
            <td>
                ${quanLySinhVien.mangSV[i].tuoi}
            </td>
            <td>
                ${quanLySinhVien.mangSV[i].diemCsharp}
            </td>
            <td>
                ${quanLySinhVien.mangSV[i].diemJS}
            </td>
            <td>
                ${quanLySinhVien.mangSV[i].diemHTML}
            </td>
            <td>
                ${quanLySinhVien.mangDiemTB[i]}
            </td>
            <td class="trangthai">
                ${quanLySinhVien.trangThai[i]}
            </td>
        </tr>
`);
};

var nodeTrangThai = document.getElementsByClassName('trangthai');

console.log(nodeTrangThai);




    for(i=0;i<nodeTrangThai.length;i++){
        if(nodeTrangThai[i].innerText === "Đạt"){
            nodeTrangThai[i].style.backgroundColor = "green";
        };
        if(nodeTrangThai[i].innerText === "Trượt"){
            nodeTrangThai[i].style.backgroundColor = "red" ;
        };
    };