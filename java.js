let inputBox= document.getElementById("input1");
let Liclass= document.getElementById('li1')

function clickA(){
    if(inputBox.value === ""){
    alert("Write some text");
}
else{
    Liclass.innerHTML+="<li>"+inputBox.value+"</li>"
   
}
}