/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej3-2.js
*/

//Se pide lo que desea hacer el usuario
var opcion = prompt("Introduce un número o salir para terminar");
//En caso de que no haya puesto salir , entra en el bucle y comprueba que no sea 0 , si lo es pide otro número;
while (opcion != "salir"){
    opcion = parseInt(opcion);
    if(isNaN(opcion) == true){
        opcion = prompt("No puedes estar vacio , introduce otro número o salir para terminar");
        //Mientras no pongo salir o 0 va comprando el número si es par o impar;    
    }else if(opcion == 0){
        opcion = prompt("No puedes poner un 0, introduce otro número o salir para terminar");
    }else{
        var div = opcion%2;
        if (div == 0){
            document.write("El numero " + opcion + " es par <br>");
        }else{
            document.write("El numero " + opcion + " es impar<br>"); 
        }
        opcion = prompt("Introduce un número o salir para terminar");
    }
}