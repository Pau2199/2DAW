/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej2-2.js
*/

//isnan
do{
    var dia = prompt("Introduce el numero del dia de la semana");
    var mes = prompt("Introduce el numero del mes");
    dia = parseInt(dia);
    mes = parseInt(mes);
}while((isNaN(dia)==true) || (isNaN(mes)==true) || (dia>8) || (dia<0) || (mes>12) || (mes<0))

    var frase;
switch(dia){
    case 1: frase = "Es Lunes de "
        break;
    case 2: frase = "Es Martes de "
        break;
    case 3: frase = "Es Miercoles de " 
        break;
    case 4: frase = "Es Jueves de " 
        break;
    case 5: frase = "Es Viernes de " 
        break;
    case 6: frase = "Es Sabado de " 
        break;
    case 7: frase = "Es Domingo de " 
        break;
    default: document.write("Has introducido un dia incorrecto");
}

switch(mes){
    case 1: frase += "Enero"
        break;
    case 2: frase += "Febrero"
        break;
    case 3: frase += "Marzo" 
        break;
    case 4: frase += "Abril" 
        break;
    case 5: frase += "Mayo" 
        break;
    case 6: frase += "Junio" 
        break;
    case 7: frase += "Julio" 
        break;
    case 8: frase += "Agosto" 
        break;
    case 9: frase += "Septiembre" 
        break;
    case 10: frase += "Octubre" 
        break;
    case 11: frase += "Noviembre" 
        break;
    case 12: frase += "Diciembre" 
        break;

    default: document.write("Has introducido un mes incorrecto");
}
document.write(frase);