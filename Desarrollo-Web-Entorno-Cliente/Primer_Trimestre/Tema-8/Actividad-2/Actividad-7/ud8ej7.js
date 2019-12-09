/*
autor: Pau Llorens Martínez

ejercicio: ud8ej7.js
*/
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    document.getElementById('nombre').addEventListener('blur', comprobar);
    
    function comprobar(){
        if(localStorage.getItem('nombre') != null){
            if(localStorage.getItem('nombre') == this.value){
                document.getElementById('info').innerHTML = localStorage.getItem('nombre');
            }else{
                document.getElementById('info').innerHTML = 'la variable nombre no está en la cookie';
            }
        }else{
            localStorage.setItem('nombre', this.value);
        }
    }
}