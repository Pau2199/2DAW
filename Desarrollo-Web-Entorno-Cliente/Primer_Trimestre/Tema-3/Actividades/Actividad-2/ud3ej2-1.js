/*
autor: Pau Llorens Martinez                    

ejercicio: ud3ej2-1.js
*/

var frase = prompt("Introduce una frase");
var num = prompt("Introduce un numero");
num = parseInt(num);
document.write(frase + "<br>");
document.write('El caracter de la posicion ' + num + ' es ' + frase.charAt(num));