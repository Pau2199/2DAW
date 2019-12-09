/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej3-7.js
*/

//Pide la cantidad de números que hay que pedi y lo parsea, ademas comprueba que no este vacio o haya metido letras.
do{
    var cantidad = prompt("Introduce cuantos números quieres añadir");
    cantidad = parseInt(cantidad);
}while (isNaN(cantidad) == true);

//Se crea un array para meter todos los números y las variables de mayor y menor
var lista = new Array();
var mayor;
var menor;
//for que sirve para introducir todos los números al array y comprobar si es mayor o menor.
for (var i= 0 ; i<cantidad ; i++){
    var num = prompt("Introduce un número");
    num = parseInt(num);
    lista.push(num);
    
    //Cuando es el primer recorrido del bucle , el mismo número es el mayor y el menor, despues hace la comprobación y los cambia si es necesario.
    if (i==0){
        mayor = num;
        menor = num;
    }else{
        if (num > mayor){
            mayor = num;
        }
        if(num < menor){
            menor = num;
        }
    }
}

//recorre el array para escribirlos en el html y indica cual era el mayor y el menor
for (var i = 0; i<lista.length ; i++){

    if (lista[i] == mayor){
        document.write(lista[i] + "->Mayor <br>");
    }else if (lista[i] == menor){
        document.write(lista[i] + "<-Menor <br>");
    }else{
        document.write(lista[i] + "<br>");
    }
}
