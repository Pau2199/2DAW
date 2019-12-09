/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej5-1.js
*/


//Se crea la variable tablero y se agrega y muestra por la consola el tablero
var tablero = cargaTablero();
mostrarTablero(tablero);

//For que sirve para pedir al usuario 20 veces un número y una letra
for(i=0 ; i<20 ; i++){
    
    //El do while , comprueba que la letra sea correcta Y no este en blanco , ni sea mas de una
    do{
    var letra = prompt("Introduce la columna vertial(Letra de la A-J)");
    letra = letra.toLowerCase();
    }while ((letra != "a") && (letra != "b") && (letra != "c") && (letra != "d") && (letra != "e") && (letra != "f") && (letra != "g") && (letra != "h") && (letra != "i") && (letra != "j") || (letra.lenght<0)|| (letra.lenght>1));
    
    //Comprueba que el numero sea correcto
    do{
    var numero = prompt("Introduce la columna horizontal(Numero del 1 al 10)");
    numero = parseInt(numero);
    }while((numero<1) || (numero>10) || (isNaN(numero)== true));
    
    comprobarDisparo(tablero,letra, numero);

}


//Esta función sirve para saber si el disparo ha sido Agua , tocado o ya habia disparado.
function comprobarDisparo(tablero, letra, numero){
    var tablero = tablero;
    var casillas = 0;
    var num = convertirLetraEnNumero(letra);
    var barco;
    numero = parseInt(numero)-1;
    if (tablero[num][numero] == 0){
        numero=numero+1;
        document.write(letra.toUpperCase()+numero.toString() + " Agua <br>");
        
    //En caso de que haya tocado un barco llama a otra función para saber si el barco que ha tocado esta en horizontal o vertical.
    }else if (tablero[num][numero] == 1){
        tablero[num][numero] = -1;
        numero=numero+1;
        document.write(letra.toUpperCase()+numero.toString() + " Tocado <br>");
        numero = numero-1;
        
        //Una vez comprueba las casillas hundidas , si es mayor a 2 se lanza otra funcion para saber que barco a hundido.
        casillas = comprobarPosicionBarco(tablero,num, numero)
        if (casillas >= 2){
            barco = saberQueBarcoHaHundido(casillas);
            document.write("Has hundido: " + barco + "<br>");
        }

    }else{
        numero=numero+1;
        document.write(letra+numero.toString() + " Ya lo habias Tocado <br>");
    }
}


//Este funcion sirve para saber de que tamaño era el barco que se ha undido.
function saberQueBarcoHaHundido(casillas){
    var nCasillas = casillas;
    var barco

    switch(casillas){
        case 2: barco = " Una Fragata";
            break;
        case 3: barco = " Un Submariano";
            break;
        case 4: barco = "Un Destructor";
            break;
        case 5: barco = "Un Portaaviones";
            break;

    }

    return barco;

}

// Esta funcion convierte la letra en un numero
function convertirLetraEnNumero(letra){
    var num = -1;
    switch(letra){
        case 'a': num = 0;
            break;
        case 'b': num = 1;
            break;
        case 'c': num = 2;
            break;
        case 'd': num = 3;
            break;
        case 'e': num = 4;
            break;
        case 'f': num = 5;
            break;
        case 'g': num = 6;
            break;
        case 'h': num = 7;
            break;
        case 'i': num = 8;
            break;
        case 'j': num = 9;
            break;
        default: "Letra incorrecta";
    }

    return num;
}

//En esta funcion comprobamos si el barco esta en horizontal o vertical y llamamos a su respectiva funcion
function comprobarPosicionBarco(tablero, num , numero){
    var tablero = tablero;
    var fila = num;
    var columna = numero;
    console.log(columna);
    var casillas = 0;
    var vertical = false;
    if (num == 0){
        if (tablero[fila+1][columna] != 0){
            vertical = true;
        }
    }else if (num == 9){
        if (tablero[fila-1][columna] != 0){
            vertical = true;
        }
    }else{
        if((tablero[fila+1][columna] != 0) || (tablero[fila-1][columna] != 0)){
            vertical = true;
        }
    }

    if (vertical == true){
        casillas = comprobarVertical(tablero, fila , columna);
    }else{
        casillas = comprobarHorizontal(tablero, fila, columna);
    }

    return casillas;
}

//Comprueba de manera vertical, mientras no encuentre un "1" hace comprobación hacia abajo primeor y luego hacia arriba, para cuando encuentre agua o se vaya a salir de las dimensiones.Devuelve el numero de casillas contadas en caso de que no haya encontrado ninguna parte del barco sin hundir("1");
function comprobarVertical(tablero, num , numero){
    var tablero = tablero;
    var fila = num;
    var columna = numero;
    var casillas = 0;
    var barco = false;
    var agua = false;
    while ((agua == false) && (barco == false) && (fila  < 10)){
        if (tablero[fila][columna] == -1){
            casillas++
            fila++
        }else{
            if(tablero[fila][columna] == 0){
                agua = true;
            }else{
                barco = true;
            }
        }
    }

    if(barco == false){
        casillas = 0;
        agua = false;
        fila = num;
        while ((agua == false) && (barco == false) && (fila >= 0)){
            if (tablero[fila][columna] == -1){
                casillas++
                fila--
            }else{
                if(tablero[fila][columna] == 0){
                    agua = true;
                }else{
                    barco = true;
                }
            }
        }
    }

    if (barco == false){
        console.log(casillas);
        return casillas;
    }else{
        return casillas = 0;
    }
}

//Comprueba de manera horizontal, mientras no encuentre un "1" hace comprobación hacia abajo primeor y luego hacia arriba, para cuando encuentre agua o se vaya a salir de las dimensiones.Devuelve el numero de casillas contadas en caso de que no haya encontrado ninguna parte del barco sin hundir("1");
function comprobarHorizontal(tablero, num , numero){
    var tablero = tablero;
    var fila = num;
    var columna = numero;
    var casillas = 0;
    var barco = false;
    var agua = false;

    while ((agua == false) && (barco == false) && (columna < 10)){
        if (tablero[fila][columna] == -1){
            casillas++
            columna++
        }else{
            if(tablero[fila][columna] == 0){
                agua = true;
            }else{
                barco = true;
            }
        }
    }

    if(barco == false){
        casillas = 0;
        agua = false;
        columna = numero;
        while ((agua == false) && (barco == false) && (columna >= 0)){
            if (tablero[fila][columna] == -1){
                casillas++
                columna--
            }else{
                if(tablero[fila][columna] == 0){
                    agua = true;
                }else{
                    barco = true;
                }
            }
        }
    }

    if (barco == false){
        console.log(casillas);
        return casillas;
    }else{
        return casillas = 0;
    }



}