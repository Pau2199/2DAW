/*
autor: Pau Llorens Martinez                    

ejercicio: ud4-2.js
*/

document.write('<button id="boton1" type="button">Boton 1</button>');
document.write('<button id="boton2" type="button">Boton 2</button>');

document.getElementById("boton1").onclick = mensaje1;
document.getElementById("boton2").onclick = mensaje2;

function mensaje1(){
    alert("Hola Don Pepito");
}
function mensaje2(){
    alert("Hola don José");
}