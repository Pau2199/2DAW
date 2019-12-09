/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej1-1.js
*/

var num1;
var num2;
num1 = prompt("Introduce un número");
num2 = prompt("Introduce otro número");

num1 = parseInt(num1);
num2 = parseInt(num2);
if (num1 == num2){
    alert("Los números son iguales");
}else{
    if(num1 > num2){
        alert("El numero " + num1 +" es mayor que " + num2);
    }else{
        alert("El número " + num2 + " es mayor que " + num1);
    }
}
