/*
autor: Pau Llorens Martinez                    

ejercicio: ud3ej5-1.js
*/
//Crea el numero aleatorio con la funcion random
var aleatorio = Math.floor(Math.random() * 50)+1;
var contador = 0;
var acertado = false;
console.log(aleatorio);

//Entra al Do, while y le pide al usuario que introduzca un numero
//Cuando falle , comprueba si el numero que ha introducido es mas grande o mas pequeña y suma los intentos
do{
    var num = prompt("Introduce un número");
    num = parseInt(num);
    
    if(num == aleatorio){
        acertado = true;
        document.write("Has acertado el número");
    }else{
        contador++;
        if(num> aleatorio){
            document.write("El número es mas pequeño <br>");
        }else{
            document.write("El número es mas grande <br>");
        }
    }
    
}while ((acertado == false) && (contador<5));