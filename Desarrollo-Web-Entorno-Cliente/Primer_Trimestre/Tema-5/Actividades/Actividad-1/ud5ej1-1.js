/*
autor: Pau Llorens Martinez                    

ejercicio: ud5ej1-1.js
*/

//Cargamos toda la pagina primero y llamamos a la funcion
document.addEventListener("DOMContentLoaded", cargar);


function cargar(){
    //captura todos los elementos de cada uno de los que nos ha pedido
    var elementoA = document.links;
    var elementoIMG = document.images;
    var elementoP = document.getElementsByTagName('p');
    var elementoDiv = document.getElementsByTagName('div');
    var elementoArticle = document.getElementsByTagName('article');
    var elementoSection = document.getElementsByTagName('section');
    var elementoFooter = document.getElementsByTagName('footer');
    var elementoHeader = document.getElementsByTagName('header');

    //escribimos cada uno de ellos y la cantidad
    alert("Elemento a = " + elementoA.length + "\n" +
          "Elemento img = " + elementoIMG.length + "\n" +
          "Elemento p = " + elementoP.length + "\n" +
          "Elemento div = " + elementoDiv.length + "\n" +
          "Elemento Article = " + elementoArticle.length + "\n" +
          "Elemento Section = " + elementoSection.length + "\n" +
          "Elemento Footer = " + elementoFooter.length + "\n" +
          "Elemento Header = " + elementoHeader.length);

}

