/*
autor: Pau Llorens Martínez

ejercicio: ud8ej6.js
*/
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    var datos = sessionStorage.getItem('objetoJSON');
    datos = JSON.parse(datos);
    document.getElementById('info').innerHTML = 
        
    'Nombre: ' + datos.nombre + '<br>'
    + 'Apellido: ' + datos.apellido + '<br>'
    + 'Mail: ' + datos.email + '<br>'
    + 'Telefono: ' + datos.telefono + '<br>'
    + 'Movil: ' + datos.movil + '<br>'
    + 'Direccion: ' + datos.direccion + '<br>'
    + 'Provincia: ' + datos.provincia + '<br>'
    + 'Localidad: ' + datos.localidad;
    
    
}