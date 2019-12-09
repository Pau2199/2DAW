/*
autor: Pau Llorens Martinez                    

ejercicio: ud4-3.js
*/


var abecedario = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
var letra = abecedario[Math.floor(Math.random()*27)];
console.log(letra);

document.write('<div id="info"></div>');

document.addEventListener('keypress', concidirLetra);
function concidirLetra(evento){    
    var le = evento.keyCode;
    le = String.fromCharCode(le);
    
    if(le == letra){
        document.getElementById('info').innerHTML = "Acertado";
        document.removeEventListener("keypress", concidirLetra);
    }else{
        document.getElementById('info').innerHTML = "No es la "+ le;
    }
    
}
