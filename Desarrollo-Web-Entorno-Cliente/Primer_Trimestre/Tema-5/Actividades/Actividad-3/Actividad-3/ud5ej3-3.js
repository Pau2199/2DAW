/*
autor: Pau Llorens Martinez                    

ejercicio: ud5ej3-3.js
*/

//Cargamos toda la pagina primero y llamamos a la funcion
document.addEventListener("DOMContentLoaded", cargar);


function cargar(){
    document.getElementById('foto').addEventListener('dblclick', clonarImagen);
    
    function clonarImagen(){
        //Obtiene todo el elemento de la imagen
        var imagen = document.getElementById('foto');
        //Clona la imagen
        var clon = imagen.cloneNode(false);
        
        //Crea la imagen en la pagina
        document.body.appendChild(clon);
    }
}