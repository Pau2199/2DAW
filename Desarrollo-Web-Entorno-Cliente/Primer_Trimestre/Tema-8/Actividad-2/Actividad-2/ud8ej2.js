/*
autor: Pau Llorens Martínez

ejercicio: ud8ej2.js
*/
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    document.getElementById('nombre').addEventListener('blur', crearCookieNombre)
    document.getElementById('boton').addEventListener('click', borrarCookies);
    if(localStorage.getItem('visitas') != null){
        var numeroVisitas = parseInt(localStorage.getItem('visitas'));
        numeroVisitas += 1
        localStorage.setItem('visitas', numeroVisitas);
        if(localStorage.getItem('nombre') != null){
            document.getElementById('info').innerHTML = localStorage.getItem('nombre') + ', Has visitado la paginas ' + numeroVisitas + '<br>';   
        }else{
            document.getElementById('info').innerHTML = 'Has visitado la paginas ' + numeroVisitas + '<br>';   
        }

    }else{
        localStorage.setItem('visitas', 1);
        document.getElementById('info').innerHTML = 'Has visitado la paginas 1 ';
    }

    var fecha = new Date();
    var mes = fecha.getMonth()+1;
    var visita = fecha.getDay() + '/' + mes + '/' + fecha.getFullYear() + ' - ' + fecha.getHours() + ':' + fecha.getMinutes();
    localStorage.setItem('ultimaVisita' , visita);
    document.getElementById('info').innerHTML += 'Ultima Visita : ' + localStorage.getItem('ultimaVisita');


    function crearCookieNombre(){
        localStorage.setItem('nombre', this.value);
    }

    function borrarCookies(){
        localStorage.clear();
    }

}