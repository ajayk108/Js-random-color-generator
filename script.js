
const getNewColor = () =>{
    let colorCode = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color = color + colorCode[Math.floor(Math.random()*16)];
    }
    document.body.style.background = color;
    document.getElementById("hex").innerHTML = color;
  
}