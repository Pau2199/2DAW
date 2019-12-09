/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej5-1.js
*/


//Se crea la variable tablero y se agrega y muestra por la consola el tablero
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    var tablero = cargaTablero();
    mostrarTablero(tablero);
    var celdas = document.getElementsByClassName('gris');
    for (var i = 0 ; i<celdas.length ; i++){
        celdas[i].addEventListener("click", comprobarCeldas);
    }

    function comprobarCeldas(){
        var fila = parseInt(this.id[1]);
        var columna = parseInt(this.id[3]);

        if (tablero[fila][columna] == 0){
            this.setAttribute('class','agua');

            //En caso de que haya tocado un barco llama a otra función para saber si el barco que ha tocado esta en horizontal o vertical.
        }else if (tablero[fila][columna] == 1){
            tablero[fila][columna] = -1
            this.setAttribute('class', 'tocado');
            var texto = comprobarPosicionBarco(tablero, fila , columna);
            if(texto != null){
                if(texto[0] == 'V'){
                    numero = parseInt(texto[3]);
                    fil = parseInt(texto[2]);
                    for (i = fil ; i<numero+fil ; i++){
                        document.getElementById('c'+i.toString()+'-'+(columna-1).toString()).setAttribute('class', 'agua');
                        document.getElementById('c'+i.toString()+'-'+(columna+1).toString()).setAttribute('class', 'agua');
                    }
                    if(fil-1 != -1){
                        document.getElementById('c'+(fil-1).toString()+'-'+columna.toString()).setAttribute('class', 'agua');
                    }
                    if(fil+numero < 10){
                        document.getElementById('c'+(fil+numero).toString()+'-'+columna.toString()).setAttribute('class', 'agua');
                    }

                }else{
                    numero = parseInt(texto[3]);
                    fil = parseInt(texto[2]);

                    for (i = fil ; i<=numero+fil ; i++){
                        var fMenos = (i-1).toString();
                        var fMas = (i+1).toString();
                        this.getElementById('c-'+columna.toString() + fMenos).setAttribute('class', 'agua');
                        this.getElementById('c-'+columna.toString()+fMas).setAttribute('class', 'agua');
                    }

                }

            }

        }

    }
}


















//En esta funcion comprobamos si el barco esta en horizontal o vertical y llamamos a su respectiva funcion
function comprobarPosicionBarco(tablero, fila,columna){
    var casillas = "";
    var vertical = false;
    if (fila == 0){
        if (tablero[fila+1][columna] != 0){
            vertical = true;
        }
    }else if (fila == 9){
        if (tablero[fila-1][columna] != 0){
            vertical = true;
        }
    }else{
        if((tablero[fila+1][columna] != 0) || (tablero[fila-1][columna] != 0)){
            vertical = true;
        }
    }

    if (vertical == true){
        console.log('Vertical');
        return comprobarVertical(tablero, fila , columna);
    }else{
        console.log('Horizontal');
        return comprobarHorizontal(tablero, fila, columna);
    }
}

//Comprueba de manera vertical, mientras no encuentre un "1" hace comprobación hacia abajo primeor y luego hacia arriba, para cuando encuentre agua o se vaya a salir de las dimensiones.Devuelve el numero de casillas contadas en caso de que no haya encontrado ninguna parte del barco sin hundir("1");
function comprobarVertical(tablero, fila , columna){
    var tablero = tablero;
    var num = fila;
    var casillas = 0;
    var barco = false;
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
        var casillas2 = 0;
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
        fila = num;
        console.log(fila);
        console.log(num);
        casillas = casillas + casillas2-1
        console.log(casillas);
        console.log('Entrar para poner color Horizontal');
        console.log(fila);
        return 'V-'+fila.toString()+casillas.toString();
    }
}

//Comprueba de manera horizontal, mientras no encuentre un "1" hace comprobación hacia abajo primeor y luego hacia arriba, para cuando encuentre agua o se vaya a salir de las dimensiones.Devuelve el numero de casillas contadas en caso de que no haya encontrado ninguna parte del barco sin hundir("1");
function comprobarHorizontal(tablero, fila , columna){
    var tablero = tablero;
    var num = columna
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
        columna = num;
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
        columna = num;
        console.log('Entrar para poner color Horizontal');
        while ((agua == false) && (columna<10)){
            if(tablero[fila][columna] != 0){
                columna++
            }else{
                agua = true;
            }
        }
        return 'H-'+columna.toString()+casillas.toString();
    }


}