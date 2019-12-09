/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej4-2.js
*/

var cadena
do{
    cadena = prompt("Introduce una cadena sin espacios");
}while(esValida(cadena) == false);

document.write(palindromo(cadena));

//El metodo sirve para comprar que no hayan espacios , cuando encuentre un espacio devuelve la posicion del espacio , si nos devuelve -1
function esValida(c){
    var num = -1
    num = c.indexOf(" ");
    if (num != -1){
        return false;
    }else{
        return true;   
    }
}

//El metodo usa dos contadores, uno desde el principio y otro desde el cinal , entonces cuando encuentre una letra diferente , pone palindromo a false
function palindromo (c){
    var palindromo = true;
    var total = c.length-1;
    
    for(i=0 ; i<c.length ; i++){
        if (c[i] != c[total]){
            palindromo = false;
        }else{
            total--;
        }
    }
    
    if (palindromo == true){
        return "La cadena es palindromo";
    }else{
        return "La palabra no es palindromo";
    }
}