/*
autor: Pau Llorens Martinez                    

ejercicio: ud7ej2-2.js
*/
class Comentario{
    constructor(nombre , email , comentario){
        this.nombre = nombre;
        this.email = email ;
        this.comentario = comentario;
    }
}
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    document.getElementById('comentar').addEventListener('click', tomarDatos);
    function tomarDatos(evento){
        evento.preventDefault();

        var comentario = new Comentario (document.getElementById('nombre').value, document.getElementById('mail').value, document.getElementById('comentario').value);
        crearComentario(comentario);

    }
}


function crearComentario(comentario){
    var article = document.createElement('article');
    article.setAttribute('class', 'comentario');

    var datos = document.createElement('div');
    datos.setAttribute('class', 'datos');
    var span1 = document.createElement('span')
    span1.setAttribute('class', 'autor');
    var a = document.createElement('a');
    a.setAttribute('href', 'mailto:' + comentario.email);
    a.innerHTML = comentario.nombre;
    span1.appendChild(a);
    datos.appendChild(span1);



    var span2 = document.createElement('span');
    span2.setAttribute('class', ' fecha');
    var fecha = new Date();
    span2.innerHTML = fecha.getHours() + ':' + fecha.getMinutes() + ' - ' + fecha.getDate() + " " + obtenerMes(fecha.getMonth()) + " " + fecha.getFullYear();
    datos.appendChild(span2);


    article.appendChild(datos);
    var coment = document.createElement('div')
    coment.setAttribute('class', 'texto');
    coment.innerHTML = comentario.comentario;
    article.appendChild(coment);

    var sections = document.getElementsByTagName('section');
    sections[0].appendChild(article);




}


function obtenerMes(mes){
    var arrayMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    return arrayMes[mes];
}
