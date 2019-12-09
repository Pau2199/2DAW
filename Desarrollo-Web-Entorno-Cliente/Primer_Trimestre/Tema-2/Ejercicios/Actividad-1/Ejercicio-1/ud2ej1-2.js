/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej1-2.js
*/

var num1 = prompt("Introduce un número");
var num2 = prompt("Introduce otro número");
var num3 = prompt("Introduce otro número");
var numeros = new Array();
var ascendente = new Array();

numeros.push(parseInt(num1));
numeros.push(parseInt(num2));
numeros.push(parseInt(num3));

ascendente.push(parseInt(num1));
ascendente.push(parseInt(num2));
ascendente.push(parseInt(num3));

for (i=0 ; i<4 ; i++){
    for (j=0 ; j<5 ; j++){
        if(numeros[i] > numeros[j]){
            var aux = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = aux;
        }
    }
}

for (i=0 ; i<4 ; i++){
    for (j=0 ; j<5 ; j++){
        if(ascendente[i] < ascendente[j]){
            var aux = ascendente[i];
            ascendente[i] = ascendente[j];
            ascendente[j] = aux;
        }
    }
}

for (i=0 ; i < numeros.length ; i++){
   document.write(numeros[i] + "-");
}

for (i= 0; i< ascendente.length ; i++){
    document.write(ascendente[i] + "-");
}