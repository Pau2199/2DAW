/*
autor: Pau Llorens Martinez                    

ejercicio: ud4-1.js
*/

document.write('<button id="boton" type="button">Pulsame!</button>')
document.getElementById("boton").onclick = mostrarMensaje;
function mostrarMensaje(){
    alert("Ola k ase");
}