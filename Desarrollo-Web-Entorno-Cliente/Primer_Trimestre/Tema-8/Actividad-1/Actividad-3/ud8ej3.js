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
    
    if(getCookie("estilo") != null){
        link.setAttribute("href",getCookie("estilo"));
    }
    
    function modoOscuro(){
        document.getElementById("estiloCss").setAttribute("href","dark.css");
        setCookie("estilo","dark.css",1);
    }
    function modoClaro(){
        document.getElementById("estiloCss").setAttribute("href","light.css");
        setCookie("estilo","light.css",1);

    }

}