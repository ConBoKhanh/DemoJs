let divs = document.getElementsByTagName("div");
var index = 0;

function rainbowify(){
   if(index >=divs.length){
    for(let i = 0; i < divs.length; i++){
        divs[i].style.backgroundColor = "";
    };
    index = 0;
   }
   divs[index].style.backgroundColor = divs[index].id;
   index++;
    
}
let i = -1 ;
function Mau(){
    let divs = document.getElementsByTagName("div");
    i++;
    if(i > divs.length){
        i = 0 ;
        divs[divs.length - 1].style.background = "white"
    }
        divs[i].style.backgroundColor = divs[i].id
        divs[i-1].style.background = "white"
    
}
setInterval("Mau()", 500);