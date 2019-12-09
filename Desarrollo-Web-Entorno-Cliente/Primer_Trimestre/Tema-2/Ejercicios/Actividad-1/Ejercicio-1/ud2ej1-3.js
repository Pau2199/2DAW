/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej1-3.js
*/
var num1 = prompt("Introduce un número");
var num2 = prompt("Introduce otro número");

num1 = parseInt(num1);
num2 = parseInt(num2);

if((num1 == 0) || (num2 == 0)){
    var division = "No se puede divir por cero"
}else{
    division = num1 / num2;
}


var suma = num1 + num2;
var resta = num1 - num2;
var multi = num1 * num2;

document.write("La suma es: " + suma + "<br>");
document.write("La resta es: " + resta + "<br>");
document.write("La multi es: " + multi+ "<br>");
document.write("La division es: " + division + "<br>");
alert("La division es " + division);