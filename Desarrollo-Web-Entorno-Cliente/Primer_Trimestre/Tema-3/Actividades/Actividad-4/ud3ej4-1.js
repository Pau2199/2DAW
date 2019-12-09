/*
autor: Pau Llorens Martinez                    

ejercicio: ud3ej4-1.js
*/

//Rellena el array hasta que introduzca un cero
var personas = new Array();
do{
    var nombre =  prompt("Introduce nombres de persona o cero para salir");
        personas.push(nombre);  
}while(nombre != 'cero');
//Elimina la palabra 'cero' que es la condicion  de parada
personas.pop();

//Escribe el array usando diferentes funciones dependiendo de lo que se necesite en cada caso
document.write("Sin Modificar: " + personas.toString() + "<br>");
document.write("Añadiendo guiones: " + personas.join(" - ") + "<br>");

var ordenadoDes = personas.sort();
document.write("Ordenado Descendentemente: " + ordenadoDes.toString() + "<br>");


var ordenadoAs = personas.reverse();
document.write("Ordenado Ascendemente: " + ordenadoAs.toString() + "<br>");




