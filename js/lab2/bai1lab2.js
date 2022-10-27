//dùng prompt()nhập từ bàn phím 2 giá trị a,b
let a=prompt("Nhập vào giá trị a:");
let b=prompt("Nhập vào giá trị b:");
//áp dụng định lý pytago tính cạnh huyền của tam giác
let c=(a*a)+(b*b);
let canhHuyen=Math.sqrt(c);
document.write("Cạnh huyền của tam giác bằng:"+canhHuyen);