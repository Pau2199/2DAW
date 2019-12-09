/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej3-3.js
*/
//Pide el número y comprueba que no sea una letra o vacio
do{
    var numero = prompt("Introduce un número");
    numero = parseInt(numero);
}while(isNaN(numero)==true);

//se crea la tabla y pone una columna en la cual es pondra el titulo
document.write("<table>");
document.write("<tr>")
document.write("<th>Multiplicacion</th>");
document.write("<th>Resultado</th>");
document.write("</tr>");

//El for sirve para recorrer los números e ir multiplicando y escribiendo en la tabla 
for (i=0 ; i<11 ; i++){
    var multi = numero*i;
    document.write("<tr>");
    document.write("<td>"+i+"X"+numero+"</td>");
    document.write("<td>"+multi+"</td>");
    document.write("</tr>");
}
document.write("</table>");
