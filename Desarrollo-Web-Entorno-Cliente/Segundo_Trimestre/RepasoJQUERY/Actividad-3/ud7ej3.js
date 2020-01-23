/*
autor: Pau Llorens Martinez                    

ejercicio: ud7ej3.js
*/
var todosPersonajes = JSON.parse(personajes);
document.addEventListener("DOMContentLoaded", cargar);


function cargar(){
    document.addEventListener('scroll', cargarImagenes);
    var cantidad = 5;
    var vez = 0;
    traerPersonajes(todosPersonajes, cantidad, vez++);

    function cargarImagenes(){
        var alturaPagina = document.body.offsetHeight;
        var alturaContenidoPagina = window.innerHeight;
        alturaContenidoPagina += window.scrollY;
        if(alturaContenidoPagina >= alturaPagina){
            traerPersonajes(todosPersonajes, cantidad, vez++);
        } 
    }

    function traerPersonajes(todosPersonajes, cantidad, vez){
        var primero = cantidad * vez;
        var ultimo = cantidad *(vez+1);
        
        if(ultimo > todosPersonajes.length){
            ultimo = todosPersonajes.length-1;
        }

        for(var i=primero; i<ultimo; i++) {
            var article = document.createElement('article');
            article.setAttribute('class', 'personaje');

            var divNombre = document.createElement('div');
            divNombre.setAttribute('class', 'nombre');
            divNombre.innerHTML = todosPersonajes[i].name;
            article.appendChild(divNombre);

            var divAvatar = document.createElement('div');
            divAvatar.setAttribute('class', 'avatar');
            var img = document.createElement('img');
            img.setAttribute('src', todosPersonajes[i].image);
            img.setAttribute('alt', todosPersonajes[i].name);
            divAvatar.appendChild(img);
            article.appendChild(divAvatar);

            var divDatos = document.createElement('div');
            divDatos.setAttribute('class', 'datos');
            var divInfo = document.createElement('div');
            divInfo.setAttribute('class', 'info');
            divInfo.innerHTML = 'Especie: ' + todosPersonajes[i].species + '<br>'
                + 'Genero: ' + todosPersonajes[i].gender + ' <img src="'+todosPersonajes[i].gender + '.png" class="genero">' +  '<br>'
                + 'Origin: ' + todosPersonajes[i].origin.name + '<br>'
                + 'Estado: <span class="alive">' + todosPersonajes[i].status + '</span>'+ '<br>'
                + 'Episodios: ' + todosPersonajes[i].episode.length;
            divDatos.appendChild(divInfo);

            article.appendChild(divDatos);
            var sections = document.getElementsByTagName('section');
            sections[0].appendChild(article);



        }
    }

}
