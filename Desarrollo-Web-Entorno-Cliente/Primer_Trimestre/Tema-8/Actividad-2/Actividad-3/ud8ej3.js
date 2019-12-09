/*
autor: Pau Llorens Martínez

ejercicio: ud8ej3.js
*/
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    document.getElementById('dark').addEventListener('click', modoOscuro);
    document.getElementById('light').addEventListener('click', modoClaro);

    var link = document.createElement("link");
    link.setAttribute("rel","stylesheet");
    link.setAttribute("type","text/css");
    link.setAttribute("id","estiloCss");
    document.head.appendChild(link);
    
    if(localStorage.getItem("estilo") != null){
        link.setAttribute("href",localStorage.getItem('estilo'));
    }
    
    function modoOscuro(){
        document.getElementById("estiloCss").setAttribute("href","dark.css");
        localStorage.setItem("estilo","dark.css");
    }
    function modoClaro(){
        document.getElementById("estiloCss").setAttribute("href","light.css");
        localStorage.setItem("estilo","light.css");

    }

}