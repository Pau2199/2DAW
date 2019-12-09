/*
autor: Pau Llorens Martínez

ejercicio: ud8ej1.js
*/
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    document.getElementById('nombre').addEventListener('blur', crearCookieNombre)
    document.getElementById('boton').addEventListener('click', borrarCookies);
    
    if(getCookie('visitas') != null){
        var numeroVisitas = parseInt(getCookie('visitas'));
        numeroVisitas += 1
        setCookie('visitas', numeroVisitas , 365);
        if(getCookie('nombre') != null){
            document.getElementById('info').innerHTML = getCookie('nombre') + ', Has visitado la paginas ' + numeroVisitas + '<br>';   
        }else{
            document.getElementById('info').innerHTML = 'Has visitado la paginas ' + numeroVisitas + '<br>';   
        }

    }else{
        setCookie('visitas', 1 , 365);
        document.getElementById('info').innerHTML = 'Has visitado la paginas 1 ';
    }

    function crearCookieNombre(){
        setCookie('nombre', this.value, 365);
    }

    function borrarCookies(){
        deleteCookie('visitas');
        deleteCookie('nombre');
    }

}