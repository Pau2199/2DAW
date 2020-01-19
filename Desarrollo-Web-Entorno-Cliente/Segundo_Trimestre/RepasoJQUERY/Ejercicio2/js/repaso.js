$(function(){
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
            div.append(img);
            $('#contenedor').append(div);
        }    
    })
    $('#contenedor').on('click','div.imagenes',function(){
        var div = $('<div>').attr({
            id: 'info',
            class: 'extra'
        });
        div.css('width', screen.width);
        div.css('height', screen.height);
        var img = $(this).children().attr('src');
        img = $('<img>').attr({
            src: img,
            alt: 'imagen',
        });
        img.css('width', screen.width/2);
        img.css('height', screen.height/2);
        div.append(img);
        $('#contenedor').append(div);
    })
    $('#contenedor').on('click', 'div.extra', function(){
        $(this).remove();
    })
});