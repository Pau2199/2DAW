/*
autor: Pau Llorens Martinez                    

ejercicio: ud5ej3-1.js
*/


//Cargamos toda la pagina primero y llamamos a la funcion
document.addEventListener("DOMContentLoaded", cargar);


function cargar(){
    document.getElementById('boton').addEventListener('click' , cargarInput);
    
    function cargarInput(){
        var agregar = document.createElement("li");
        var texto = document.createTextNode(document.getElementById('campo').value);
        
        agregar.appendChild(texto);
        document.getElementById('lista').appendChild(agregar);
        document.getElementById('campo').value = "";
    }
}