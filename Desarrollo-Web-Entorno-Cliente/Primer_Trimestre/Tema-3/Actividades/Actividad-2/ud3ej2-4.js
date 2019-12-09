/*
autor: Pau Llorens Martinez                    

ejercicio: ud3ej2-1.js
*/

var frase = prompt('Introduce una frase');

var misPalabras = frase.split(" ");
//Compara si la palabra es par o impar  para ponerla en mayusculas o minusculas
for (var i=0 ; i<misPalabras.length ; i++){
    if(i%2 == 0){
        misPalabras[i] = misPalabras[i].toUpperCase();
    }else{
        misPalabras[i] = misPalabras[i].toLowerCase();
    }
}

for(var i=0 ; i<misPalabras.length; i++){
    document.write(misPalabras[i] + " ");
}