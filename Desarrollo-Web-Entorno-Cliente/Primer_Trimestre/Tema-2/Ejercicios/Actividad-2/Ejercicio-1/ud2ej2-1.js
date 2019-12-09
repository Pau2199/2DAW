/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej2-1.js
*/
do{
    var opc = prompt("Elige que quieres hacer 1.-Sumar 2.-Restar 3.-Multiplicar 4.-Division 5.-Potencia");
    var num1 = prompt("Pon un número");
    var num2 = prompt("Pon otro número");
    opc = parseInt(opc);
    num1 = parseInt(num1);
    num2 = parseInt(num2);
}while((isNaN(opc)==true) || (isNaN(num1)==true) || (isNaN(num2)==true) || (opc<1) || (opc>5))
    switch (opc){
        case 1:
            var suma = num1+num2
            document.write("La suma de " + num1 + "+" + num2 + "es: " + suma);
            break;
        case 2:
            var resta = num1-num2
            document.write("La resta de " + num1 + "-" + num2 + "es: " + resta);
            break;
        case 3:
            var multi = num1*num2
            document.write("La multiplicación de " + num1 + "*" + num2 + "es: " + multi);
            break;
        case 4:
            if((num1 == 0) || (num2 == 0)){
                document.write("No se puede dividir entre 0");
            }else{
                var divi = num1/num2
                document.write("La division de " + num1 + "/" + num2 + "es: " + divi);
            }
            break;
        case 5:
            var es = num1**num2;
            document.write("La potencia de " + num1+  "^" + num2 + "es: " +es);
            break;
        default: document.write("Has elegido una opción incorrecta");
    }