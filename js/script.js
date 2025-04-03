var btn = document.getElementById("btn");
var input = document.getElementById("input");
var text = document.getElementById("text");

var btn2 = document.getElementById("btn2");
var input2 = document.getElementById("input2");
var text2 = document.getElementById("text2");


btn.onclick = function(){
    var inputvalue = input.value;
    if(inputvalue != ""){
        text.innerHTML += `<div class="comp">${inputvalue}</div>` ;
        if(text2){
            text2.innerHTML += `<div class="comp2 one">${inputvalue}</div>` ;
        }
        input.value = "";
    }else{
        alert("please enter a message");
    }
}




btn2.onclick = function(){
    var inputvalue2 = input2.value;
    if(inputvalue2 != ""){
        text2.innerHTML += `<div class="comp2">${inputvalue2}</div> ` ;
        if(text){
         text.innerHTML += `<div class="comp one">${inputvalue2}</div>`;
        }
        input2.value = "";
    }else{
        alert("please enter a message");
    }
}