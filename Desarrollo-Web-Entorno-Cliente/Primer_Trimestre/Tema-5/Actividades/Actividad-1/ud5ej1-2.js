/*
autor: Pau Llorens Martinez                    

ejercicio: ud5ej1-1.js
*/
//Cargamos toda la pagina primero y llamamos a la funcion
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    //obtenemos todos los enlaces
    var enlaces = document.links;
    
    //recorremos todos los enlaces y los cambiamos por 2ºDAW
    for(var i = 0 ; i<enlaces.length ; i++){
        enlaces[i].innerHTML ="2ºDAW";
    }
}