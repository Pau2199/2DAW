/*
autor: Pau Llorens Martinez                    

ejercicio: ud6ej1-2.js
*/

document.addEventListener("DOMContentLoaded", cargar);
function cargar(){
    var elementos = document.getElementsByTagName('input');
    for (var i = 0 ; i<elementos.length ; i++){
        if (elementos[i].type == 'button'){

            elementos[i].addEventListener('click', agregarElemento);
            break;
        }
    }

    function agregarElemento(){
        date = new Date();
        var nuevoDiv = document.createElement('div');
        nuevoDiv.setAttribute('class', 'comentario');

        var datos = document.createElement('div');
        datos.setAttribute('class', 'datos');
        nuevoDiv.appendChild(datos);

        var span = document.createElement('span');
        span.setAttribute('class', 'autor');
        span.innerHTML = '<a href ="mailto:'+ document.getElementById('mail').value+'">' + document.getElementById('nombre').value + '</a>';
        datos.appendChild(span);

        var span2 = document.createElement('span');
        span2.setAttribute('class', 'fecha');
        span2.innerHTML = date.getHours() + ":" + date.getMinutes() + " - " + date.getDate()+ " " +  obtenerMes(date.getMonth()) + " " + date.getFullYear();
        datos.appendChild(span2);

        var texto = document.createElement('div');
        texto.setAttribute('class', 'texto');
        texto.innerHTML = document.getElementById('comentario').value;
        nuevoDiv.appendChild(texto);

        var sectio = document.getElementsByTagName('section');
        sectio[0].appendChild(nuevoDiv);

    }


}


function obtenerDia(dia){
    var nombreDelDia;

    switch(dia){
        case 0: nombreDelDia = "Domingo";
            break;
        case 1: nombreDelDia = "Lunes";
            break;
        case 2: nombreDelDia = "Martes";
            break;
        case 3: nombreDelDia = "Miercoles";
            break;
        case 4: nombreDelDia = "Jueves";
            break;
        case 5: nombreDelDia = "Viernes";
            break;
        case 6: nombreDelDia = "Sabado";
            break;

    }

    return nombreDelDia;
}

function obtenerMes(mes){
    var nombreMes;

    switch(mes){
        case 0: nombreMes = "Enero";
            break;
        case 1: nombreMes = "Febrero";
            break;
        case 2: nombreMes = "Marzo";
            break;
        case 3: nombreMes = "Abril";
            break;
        case 4: nombreMes = "Mayor";
            break;
        case 5: nombreMes = "Junio";
            break;
        case 6: nombreMes = "Julio";
            break;
        case 7: nombreMes = "Agosto";
            break;
        case 8: nombreMes = "Septiembre";
            break;
        case 9: nombreMes = "Octubre";
            break;
        case 10: nombreMes = "Noviembre";
            break;
        case 11: nombreMes = "Diciembre";
            break;

    }

    return nombreMes;
}