/*
autor: Pau Llorens Martinez                    

ejercicio: ud3ej3-2.js
*/

var anyo = prompt("Introduce un año");
anyo=parseInt(anyo);

var fecha = new Date(anyo, 1, 29);
document.write("El " + anyo )
if(fecha.getMonth() == 2){
    document.write(" no");
}
    document.write(" es bisiesto");
