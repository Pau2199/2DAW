/*
autor: Pau Llorens Martinez                    

ejercicio: ud4-6.js
*/

document.write('<button id="cerrar" type="button">Cerrar</button>');
document.write('<button  id="abrir" type="button">Abrir</button>')

document.getElementById("abrir").addEventListener("click", abrirVentana);
document.getElementById("cerrar").addEventListener("click", cerrarVentana);
var miVentana;
function cerrarVentana(){
    miVentana.close();
}

function abrirVentana(){
    miVentana = window.open("", "miVentana", "width=400, height=200");
}