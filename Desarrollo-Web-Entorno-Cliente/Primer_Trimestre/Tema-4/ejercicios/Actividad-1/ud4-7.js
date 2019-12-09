/*
autor: Pau Llorens Martinez                    

ejercicio: ud4-7.js
*/

var miVentana = window.open("", "miVentana", "width=100, height=50");
document.addEventListener("dblclick", ventanaMejorada);
function ventanaMejorada(){
        var x = Math.floor(Math.random() * 1000);
        var y = Math.floor(Math.random() * 1000);
        miVentana.resizeTo(x,y);
    }

