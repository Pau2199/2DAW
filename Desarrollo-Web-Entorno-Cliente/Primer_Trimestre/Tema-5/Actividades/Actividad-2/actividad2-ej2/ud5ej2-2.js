/*
autor: Pau Llorens Martinez                    

ejercicio: ud5ej2-2.js
*/
//Cargamos toda la pagina primero y llamamos a la funcion
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    var botones = document.getElementsByTagName('button');

    for(var i = 0 ; i<botones.length ; i++){
        botones[i].addEventListener('click', cargarImagenBody);
    }

    function cargarImagenBody(){
        if(this.innerHTML == 'Rick'){
            document.getElementById('foto').setAttribute('src' , 'rick.png');
        }else if(this.innerHTML == 'Morty'){
            document.getElementById('foto').setAttribute('src' , 'morty.png');
        }else if(this.innerHTML == 'Jerry'){
            document.getElementById('foto').setAttribute('src' , 'jerry.png');
        }else if(this.innerHTML == 'Beth'){
            document.getElementById('foto').setAttribute('src' , 'beth.png');
        }else{
           document.getElementById('foto').setAttribute('src' , 'summer.png'); 
        }
    }
}