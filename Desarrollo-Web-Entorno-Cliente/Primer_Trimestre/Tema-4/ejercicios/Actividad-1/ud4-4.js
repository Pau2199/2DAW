/*
autor: Pau Llorens Martinez                    

ejercicio: ud4-4.js
*/

document.write('<p id="posicion"></p>');

document.addEventListener('mousemove', saberPosicion);

function saberPosicion(evento){
 document.getElementById('posicion').innerHTML = "Posicion X: "  + evento.clientX + "<br>" + "Posicion Y: " + evento.clientY;

}
