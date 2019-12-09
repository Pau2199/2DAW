/*
autor: Pau Llorens Martinez                    

ejercicio: ud5ej4-4.js
*/

//Cargamos toda la pagina primero y llamamos a la funcion
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    document.addEventListener("scroll", comprobar);

    function comprobar(){
        var alturaTotal = document.body.offsetHeight;
        var alturaContenidoPagina = window.innerHeight;
        alturaContenidoPagina += window.scrollY;

        if(alturaTotal <=alturaContenidoPagina){
            var contenidosBorrar = document.getElementsByClassName('borrar');
            for (var  i = contenidosBorrar.length-1 ; i>=0; i--){
                contenidosBorrar[i].remove();
            }
        }
    }

}