/*
autor: Pau Llorens Martinez                    

ejercicio: ud4-8.js
*/

document.write('<div id="info"></div>');
document.write('<form action="#" method="POST">');
document.write('<input type="text" id="cuadroTexto">');
document.write('</form');

document.getElementById("cuadroTexto").addEventListener("focus", ponerTextoInicio);
document.getElementById("cuadroTexto").addEventListener("blur", ponerTextoFinal);


function ponerTextoInicio(){
    document.getElementById("info").innerHTML = "Preparando para escribir" ;
}

function ponerTextoFinal(){
    document.getElementById("info").innerHTML = document.getElementById("cuadroTexto").value;

}

