$(function(){
    var todosPersonajes = JSON.parse(personajes);
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
        var ultimo = cantidad*(vez+1);

        if(ultimo > todosPersonajes.length){
            ultimo = todosPersonajes.length-1;
        }

        for(var i=primero ; i<ultimo; i++){
            var article = $('<article>').attr('class', 'personaje'); 
            article.append($('<div>').attr('class','nombre').html(todosPersonajes[i].name));
            var divImagen = $('<div>').attr('class', 'avatar');
            article.append(divImagen.append($('<img>').attr({
                src : todosPersonajes[i].image,
                alt : todosPersonajes[i].name
            })));
            var divDatos = $('<div>').attr('class', 'datos');
            var divInfo = $('<div>').attr('class', 'info');
            divInfo.append('Especie: ' + todosPersonajes[i].species + '<br> Genero: ' + todosPersonajes[i].gender + 
                           '<br> Origin: ' + todosPersonajes[i].origin.name + '  ');
            divInfo.append($('<img>').attr({
                src : todosPersonajes[i].gender + '.png',
                alt : todosPersonajes[i].gender,
                class : 'genero'
            }));
            divInfo.append('<br> Estado: ');
            divInfo.append($('<span>').attr('class', 'alive').html(todosPersonajes[i].status + '<br>'));
            divInfo.append('Episodios: ' + todosPersonajes[i].episode.length + '<br>');
            divDatos.append(divInfo);
            article.append(divDatos);
            $('section').append(article);



        }



    }

})