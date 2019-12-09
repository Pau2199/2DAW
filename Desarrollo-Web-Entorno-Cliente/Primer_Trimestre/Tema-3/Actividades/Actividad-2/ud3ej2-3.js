/*
autor: Pau Llorens Martinez                    

ejercicio: ud3ej2-1.js
*/

var frase = prompt("Introduce una frase");


frase = frase.toUpperCase();

for(i=0; i<frase.length; i++){
    if(frase[i] == 'A'){
        frase = frase.replace('A', 'a');
    }if (frase[i] == 'E'){
        frase = frase.replace('E', 'e');
    }if (frase[i] == 'I'){
        frase = frase.replace('I', 'i');
    }if (frase[i] == 'O'){
        frase = frase.replace('O', 'o');
    }if (frase[i] == 'U'){
        frase = frase.replace('U', 'u');
    }
}

document.write(frase);
