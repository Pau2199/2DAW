/*
autor: Pau Llorens Martinez                    

ejercicio: prueba.js
*/

//Cargamos toda la pagina primero y llamamos a la funcion
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){

    var p = document.getElementsByTagName('p');
    for (var i= 0 ; i<p.length ; i++){
        p[i].addEventListener("mouseover", cargarColor);
        p[i].addEventListener("mouseout", cargarColor);
        p[i].addEventListener("click", cargarColor);
    }

    function cargarColor(evento){
        if(evento.type == 'mouseover'){
            this.setAttribute('class', 'foco'); 
        }else if (evento.type == 'mouseout'){
            this.removeAttribute('class');
        }else if (evento.type == 'click'){
            if(this.className == 'marcado'){
                this.removeAttribute('class');
            }else{
                this.setAttribute('class', 'marcado');
            }
        }
    }
}