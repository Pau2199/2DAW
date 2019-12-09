/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej3-4.js
*/


for (i=0 ; i<11 ; i++){
    //En este for se crea la tabla para  cada tabla de multiplicar indicando la columna de multiplicación , de resultado y la tabla a la que pertenece
    document.write("<table>");
    document.write("<tr>");
    document.write("<th colspan='2'>Tabla del multiplicar del " + i + "</th>");
    document.write("</tr>");
    document.write("<tr>")
    document.write("<th>Multiplicacion</th>");
    document.write("<th>Resultado</th>");
    document.write("</tr>");
    for (j=0; j<11 ; j++){
        //En este for se realiza la múltiplicación correspondiente y se meten dentro de la columna que corresponde
        document.write("<tr>");
        document.write("<td>"+i+"X"+j+"</td>");
        document.write("<td>"+i*j+"</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}


