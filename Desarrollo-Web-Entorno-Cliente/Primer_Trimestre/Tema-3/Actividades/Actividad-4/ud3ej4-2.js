/*
autor: Pau Llorens Martinez                    

ejercicio: ud3ej4-2.js
*/

//Pide una cadena
var cadena = prompt("Introduce una cadena con el siguiente formato: 'nombre$apellido1$apellido2$telefono$mail'");

//con el split lo separa cada vez que encuentre el $
cadena = cadena.split("$");

//Lo escribe cada dato en una linea
document.write("Nombre: " + cadena[0] + "<br>");
document.write("Apellidos: " + cadena[1] + " " + cadena[2] + "<br>");
document.write("Telefono: " + cadena[3] + "<br>");
document.write("E-mail: " + cadena[4] + "<br>");
