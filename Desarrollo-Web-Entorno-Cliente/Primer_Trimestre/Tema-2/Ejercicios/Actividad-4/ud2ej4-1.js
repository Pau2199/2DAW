/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej4-1.js
*/


//Se pide el número y  comprueba que no sea menor a 0 , ni mayor a 1000 , ni que este vacio o haya metido una letra
do{
    var num = prompt("Introduce un número");
    num=parseInt(num);
}while(isNaN(num) == true);


document.write(esPrimo(num));

function esPrimo(num){
    var primo = true;
    var cont = 2;
    //Se crea un contador para que en el while para que el contador nunca supere al número introducido.
    while((num > cont) && (primo == true)){
        //Si en alguna interación encuentra un número que al dividirlo entre el contador de 0 quiere decir que no es primo y se sale del bucle.
        if(num % cont == 0){
            primo = false;
        }else{
            cont++;
        }
    }

    //Sirve para decir si el número es primo o no
    if (primo == true){
        return "El número " +num+ " es primo";

    }else{
        return "El número " +num+ " no es primo";
    }
}
