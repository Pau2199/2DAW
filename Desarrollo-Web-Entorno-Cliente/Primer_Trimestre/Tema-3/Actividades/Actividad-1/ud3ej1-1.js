/*
autor: Pau Llorens Martinez                    

ejercicio: ud3ej1-1.js
*/

do{
    var operacion = prompt("Introduce la operación que quieres hacer");
    document.write(operacion + "=" + eval(operacion) + "<br>");
    
}while(operacion != "break");
