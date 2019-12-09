/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej3-5.js
*/
//Se utilizan dos columnas para recorrer la tabla por filas y columnas.
document.write("<table>");
for (i=0 ; i<11 ; i++){
    // Esta variable sirve para asignar los diferentes colores a la tabla.
    var fila = "fila"+i.toString();
    for (j=0; j<11 ; j++){
        //Esta comparación se hace para dejar el hueco en blanco arriba a la izquierda
        if ((i==0) && (j==0)){
            document.write("<td></td>");
            //La siguiente compración se hace para escribir la fila horizontal de arriba del todo.
        }else if ((i==0) && (j!=0)){
            document.write("<td class='rojo'>"+j+"</td>");
            //Esta comparación se realiza para escribir la primera fila vertical de los números
        }else if ((j==0 ) && (i!=0)){
            document.write("<td class='rojo'>"+i+"</td>");
            // y por último el else se útiliza para hacer mas multiplicaciones y colocarlas en su fila correspondiente
        }else{
            document.write("<td class="+fila+">"+i*j+"</td>");
        }
    }

    document.write("</tr>");
}
document.write("</table>");


