/*
autor: Pau Llorens Martinez                    

ejercicio: ud5ej4-1.js
*/

//Cargamos toda la pagina primero y llamamos a la funcion
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    document.addEventListener('dblclick', borrarImagenes);
    function borrarImagenes(){
        var imagenes = document.getElementsByTagName("img");
        for(var  i = imagenes.length-1 ; i>=0 ; i--){
            imagenes[i].remove();
        } 
    }
}