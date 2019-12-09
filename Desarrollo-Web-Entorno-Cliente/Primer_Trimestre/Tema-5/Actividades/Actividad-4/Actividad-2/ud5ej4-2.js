/*
autor: Pau Llorens Martinez                    

ejercicio: ud5ej4-2.js
*/

//Cargamos toda la pagina primero y llamamos a la funcion
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    var imagenes = document.getElementsByTagName("img");
    
    for (var i = 0 ; i<imagenes.length ; i++){
        imagenes[i].addEventListener("click", borrarImagen);
    }
    function borrarImagen(){
        this.remove();
    }
    
}