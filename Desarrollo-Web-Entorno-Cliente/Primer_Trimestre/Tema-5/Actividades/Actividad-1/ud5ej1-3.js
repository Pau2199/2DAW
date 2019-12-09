/*
autor: Pau Llorens Martinez                    

ejercicio: ud5ej1-1.js
*/

//Cargamos toda la pagina primero y llamamos a la funcion
document.addEventListener("DOMContentLoaded", cargar);


function cargar(){
    //Obtenemos todos los elementos css que tengan una clase resaltado y que dentro tengan un p
    var elementosCss = document.querySelectorAll(".resaltado p");
    
    //recorremos todos los elementos y cambiamos el contenido
    for(var i = 0 ; i < elementosCss.length ; i++){
        elementosCss[i].innerHTML = "Contenido Censurado";
    }
}