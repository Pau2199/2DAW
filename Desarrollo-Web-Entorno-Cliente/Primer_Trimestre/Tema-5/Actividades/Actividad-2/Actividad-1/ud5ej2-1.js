/*
autor: Pau Llorens Martinez                    

ejercicio: ud5ej2-1.js
*/

//Cargamos toda la pagina primero y llamamos a la funcion
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    var botones = document.getElementsByTagName('button');

    for(var i = 0 ; i<botones.length ; i++){
        botones[i].addEventListener('click', cargarColorBody);
    }


    function cargarColorBody(){
        if(this.innerHTML == 'rojo'){
            document.body.style.backgroundColor = 'red';
        }else if(this.innerHTML == 'verde'){
            document.body.style.backgroundColor = 'green';
        }else if(this.innerHTML == 'azul'){
            document.body.style.backgroundColor = 'blue';
        }else if(this.innerHTML == 'negro'){
            document.body.style.backgroundColor = 'black';
        }else{
            document.body.style.backgroundColor = 'white';
        }
    }
}