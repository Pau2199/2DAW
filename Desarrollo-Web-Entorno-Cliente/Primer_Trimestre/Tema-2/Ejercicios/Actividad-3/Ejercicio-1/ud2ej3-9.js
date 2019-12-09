/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej3-9.js
*/

var impares = 0;
var pares = 0;


//for que sirve para recorrer todos los números hasta el 100
for (i=0 ; i <=100 ; i++){
    //si el resto de i dividido entre 2 da 0 es que es par
    if (i%2==0){
        pares+=i;
    }else{
        impares+=i;
    }
}

    document.write("La suma de los impares es : " + impares + "<br>");
    document.write("La suma de los pares es : " + pares + "<br>");