
var Number1= document.getElementById("number1");
var Number2= document.getElementById("number2");
var Result= document.getElementById("display");



function add(){
     Result.innerHTML += parseFloat(Number1.value )+ parseFloat(Number2.value) + " <br>"
     clear()
}
function sub(){
    Result.innerHTML += parseFloat(Number1.value )- parseFloat(Number2.value) + " <br>"
    clear()
}
function multi(){
    Result.innerHTML += parseFloat(Number1.value )* parseFloat(Number2.value) + " <br>"
    clear()
}
function divide(){
    Result.innerHTML += parseFloat(Number1.value ) / parseFloat(Number2.value) + " <br>"
    clear()
}

function clear(){
    Number1.value=""
    Number2.value=""
}