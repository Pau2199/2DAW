/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej3-7.js
*/

var dinero = prompt("Introduce una cantidad de dinero");
dinero = parseInt(dinero);
var B5 = 0;
var B2 = 0;
var B1 = 0;
var b5 = 0;
var b2 = 0;
var b1= 0;
var bi5 = 0;
var m2 = 0;
var m1 = 0;

//While que sirve para comprobar los billetes y restar el dinero.
while (dinero>=500){
    B5++;
    dinero = dinero-500;
}
while (dinero>=200){
    B2++;
    dinero = dinero-200;
}
while (dinero>=100){
    B1++;
    dinero = dinero-100;
}
while (dinero>=100){
    B1++;
    dinero = dinero-100;
}
while (dinero>=50){
    b5++;
    dinero = dinero-50;
}
while (dinero>=20){
    b2++;
    dinero = dinero-20;
}
while (dinero>=10){
    b1++;
    dinero = dinero-50;
}
while (dinero>=5){
    bi5++;
    dinero = dinero-5
}
while (dinero>=2){
    m2++;
    dinero = dinero-2
}
while (dinero>=1){
    m1++;
    dinero = dinero-1
}

//El resto de IF sirve para escribir en el documento
if (B5>0){
    document.write("Billetes de 500: " + B5 + "<br>")
}
if (B2>0){
    document.write("Billetes de 200: " + B2 + "<br>")
}
if (B1>0){
    document.write("Billetes de 100: " + B1 + "<br>")
}
if (b5>0){
    document.write("Billetes de 50: " + b5 + "<br>")
}
if (b2>0){
    document.write("Billetes de 20: " + b2 + "<br>")
}
if (b1>0){
    document.write("Billetes de 10: " + b1 + "<br>")
}
if (bi5>0){
    document.write("Billetes de 5: " + bi5 + "<br>")
}
if (m2>0){
    document.write("Monedas de 2: " + m2 + "<br>")
}
if (m1>0){
    document.write("Monedas de 1: " + m1 + "<br>")
}
