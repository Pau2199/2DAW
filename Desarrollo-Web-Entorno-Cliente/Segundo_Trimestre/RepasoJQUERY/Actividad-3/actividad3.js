$(function(){
    var todosPersonajes = JSON.parse(personajes);
    var cantidad = 5;
    var vez = 0;
    traerPersonajes(todosPersonajes, cantidad, vez++);
    var waypoint = new Waypoint({
        element: $('footer'),
        handler: function(direction){
            if(direction == 'down'){
                console.log('cargando mas imagenes');
                console.log(screen.height)
                console.log($('footer').height())
                traerPersonajes(todosPersonajes, cantidad, vez++);
            }
        },
        offset: screen.height
    });
    function cargarImagenes(){
    }



    function traerPersonajes(todosPersonajes, cantidad, vez){
        console.log(screen.height);
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