/*
autor: Pau Llorens Martinez                    

ejercicio: ud5ej3-2.js
*/

//Cargamos toda la pagina primero y llamamos a la funcion
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    document.getElementById('areaTexto').addEventListener('blur' , cargarTexto);
    
    function cargarTexto(){
        var agregar = document.createElement('div');
        agregar.setAttribute('class', 'nuevo');
        var texto = document.createTextNode(document.getElementById('areaTexto').value);
        
        agregar.appendChild(texto);
        document.getElementById('seccion').appendChild(agregar);
        document.getElementById('areaTexto').value = "";
        
    }
    
    
}