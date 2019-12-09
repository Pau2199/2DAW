/*
autor: Pau Llorens Martinez                    

ejercicio: ud4-5.js
*/

document.write('<p id="cuadrante"></p>');


var alturaPantalla = window.innerHeight;
var anchuraPantalla = window.innerWidth;

var Y = alturaPantalla/2;
var X = anchuraPantalla/2;

document.addEventListener('click', saberCuadrante);

function saberCuadrante(evento){
    if(evento.clientX < X){
        if(evento.clientY < Y){
            document.getElementById('cuadrante').innerHTML = "Estas en el cuadrante Nº1"

        }else{
            document.getElementById('cuadrante').innerHTML = "Estas en el cuadrante Nº3" 
        }
    }else{
        if(evento.clientY < Y){
            document.getElementById('cuadrante').innerHTML = "Estas en el cuadrante Nº2"

        }else{
            document.getElementById('cuadrante').innerHTML = "Estas en el cuadrante Nº4" 
        }
    }
}

