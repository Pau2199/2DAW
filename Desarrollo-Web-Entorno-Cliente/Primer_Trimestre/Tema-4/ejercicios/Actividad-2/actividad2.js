/*
autor: Pau Llorens Martinez                    

ejercicio: actividad2.js
*/

document.addEventListener("DOMContentLoaded", cargarPagina);

function cargarPagina(){
    document.getElementById('boton').addEventListener("click", cambiarTextoAlPulsar);
    for(var i = 1 ; i<6 ; i++){
        document.getElementById('p'+i).addEventListener("click", cambiarTextoParrafo);
    }

    function cambiarTextoAlPulsar(){
        document.getElementById('info').innerHTML = "Nombre: Pau <br> Apellidos: Llorens Martínez"; 
    }
    function cambiarTextoParrafo(){
        this.innerHTML = 'Leido';
    }
}