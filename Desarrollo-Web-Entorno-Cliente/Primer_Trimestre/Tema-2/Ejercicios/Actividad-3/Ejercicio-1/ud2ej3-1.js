/*
autor: Pau Llorens Martinez                    

ejercicio: ud2ej3-1.js
*/

//Pide el nombre del producto y lo escribe en el documento
var producto = prompt("Introduce el nombre del producto: ");
document.write("Nombre del Producto: " + producto + "<br>");

//Crea los dos arrays que se van a utilizar
var precio = new Array();
var establecimiento = new Array();

//for que sirve para preguntar el precio y el establecimiento para meterlos dentro del array y a continuación escribirlo en el documento
for (var i=0 ; i<3 ; i++){
    //El do-While sirve para comprar que en el precio meta solo números
    do{
        var pre = prompt("Introduce el precio");
        pre=parseInt(pre);
    }while(isNaN(pre) == true);
    var est = prompt("Introduce el nombre del establecimiento");
    establecimiento.push(est);
    precio.push(pre);
    document.write("Establecimiento " + est + " - Precio del Producto: " + pre + "<br>");

}

//for que sirve para ordenar el precio de mayor a menor
var media=0;
for (var i=0 ; i<3 ; i++){
    media += precio[i];
    for (var j= 0 ; j<3 ; j++){
        //el if sirve para compararlo
        if (precio[i] > precio[j]){
            //Ordena el array de los precios
            var aux = precio[i];
            precio[i] = precio[j];
            precio[j] = aux;

            //Ordena el array de los establecimientos para que no se pierda la relación de precio y establecimiento
            aux = establecimiento[i];
            establecimiento[i] = establecimiento[j];
            establecimiento[j] = aux;
        }
    }
}
media=media/precio.length;

//Escribe el mayor , el menor y la media.
document.write("El precio mas elevado es : " + precio.shift() + " del establecimiento " + establecimiento.shift() + "<br>");
document.write("El precio menos elevado es: " + precio[precio.length -1] + " del establecimiento " + establecimiento[establecimiento.length -1]+ "<br>");
document.write("La media del prescio es: " +media);