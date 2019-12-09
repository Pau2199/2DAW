/*
autor: Pau Llorens Martinez                    

ejercicio: ud3ej6-1.js
*/

setInterval(reloj, 1000);
               
function reloj(){
    var date = new Date();
    date = date.toLocaleTimeString();
    document.write(date + "<br>");
}
