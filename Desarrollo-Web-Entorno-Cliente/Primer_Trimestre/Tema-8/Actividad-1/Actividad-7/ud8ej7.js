/*
autor: Pau Llorens Martínez

ejercicio: ud8ej7.js
*/
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    document.getElementById('nombre').addEventListener('blur', comprobar);
    
    function comprobar(){
        if(getCookie('nombre') != null){
            if(getCookie('nombre') == this.value){
                document.getElementById('info').innerHTML = getCookie('nombre');
            }else{
                document.getElementById('info').innerHTML = 'la variable nombre no está en la cookie';
            }
        }else{
            setCookie('nombre', this.value, 365);
        }
    }
}