/*
autor: Pau Llorens Martinez                    

ejercicio: ud3ej2-1.js
*/

var frase = prompt('Introduce una frase');
var letra = prompt('Introduce una letra');

document.write('La longitud de la frase es: ' + frase.length + '<br>');
document.write('La primera letra es: ' + frase.charAt(0) + '<br>');
document.write('La ultima letra es : ' + frase.charAt(frase.length-1) + '<br>');
document.write('Letra que esta en mitad de la frase: ' + frase.charAt(frase.length/2) + '<br>');

var palabras = frase.split(" ");
var letraPalabra;

//El for sirve para sacar la primera letra de cada palabra
for(let i = 0 ; i<palabras.length ; i++){
    letraPalabra = palabras[i].charAt(0);
    document.write("La primera letra de la palabra " + palabras[i] +  " es " + letraPalabra + " ; ");
}

//Cuenta el total letras que hay en la cadena
var contador = 0;
for (let i = 0; i<frase.length ; i++){
    if(frase[i] == letra){
        contador++;
    }
}

document.write('La letra: ' + letra + ' aparecere un total de : ' + contador);

