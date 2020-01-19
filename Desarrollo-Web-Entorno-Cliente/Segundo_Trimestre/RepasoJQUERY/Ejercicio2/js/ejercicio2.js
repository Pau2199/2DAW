$(function(){
    //Cargamos todas las imagenes de la base de datos con una peticion AJAX
    $.getJSON('obtenerImagenes.php', function(data){
        for ( var i = 0 ; i<data.length ; i++){
            var img = $('<img>').attr({
                src: 'img/coches/'+data[i][0]+'.png',
                alt: 'imagen',
                class: 'imagenes'
            });
            var div = $('<div>').attr({
                id:'f'+data[i][1],
                class: 'imagenes'
            });
            //añadimos la imagen al div que hemos creado y despues añadimos ese div al div principal que es el contenedor
            div.append(img);
            $('#contenedor').append(div);
        }    
    })
    $('#contenedor').on('click','div.imagenes',function(){
        //creamos el div donde guardaremos la imagen y le añadimos el id y la clase
        var div = $('<div>').attr({
            id: 'info',
            class: 'extra'
        });
        //le añadimos la anchura y altura que nos interesa
        div.css('width', screen.width);
        div.css('height', screen.height);
        //obtenemos el src de la imagen que ha hecho click para asi poder añadirla al div que hemos creado.
        var img = $(this).children().attr('src');
        img = $('<img>').attr({
            src: img,
            alt: 'imagen',
        });
        //La imagen tiene la mitad del tamaño de la pantalla
        img.css('width', screen.width/2);
        img.css('height', screen.height/2);
        div.append(img);
        $('#contenedor').append(div);
    })
    //cuando hace click en el div que ha cargado la imagen en grande este se elimina.
    $('#contenedor').on('click', 'div.extra', function(){
        $(this).remove();
    })
});