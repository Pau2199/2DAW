/*
autor: Pau Llorens Martinez                    

ejercicio: ud3ej3-1.js
*/

var dia = prompt("Introduce el dia en que naciste");
var mes = prompt("Introduce el numero del mes en el que naciste");
var anyo = prompt("Introduce el año en el que naciste");

var fecha = new Date(anyo, mes-1, dia);
 
document.write(obtenerDia(fecha.getDay())+" , "+fecha.getMonth() +1 + " de 19" + fecha.getYear());




function obtenerDia(dia){
    var nombreDelDia;

    switch(dia){
        case 0: nombreDelDia = "Domingo";
            break;
        case 1: nombreDelDia = "Lunes";
            break;
        case 2: nombreDelDia = "Martes";
            break;
        case 3: nombreDelDia = "Miercoles";
            break;
        case 4: nombreDelDia = "Jueves";
            break;
        case 5: nombreDelDia = "Viernes";
            break;
        case 6: nombreDelDia = "Sabado";
            break;

    }
    
    return nombreDelDia;
}