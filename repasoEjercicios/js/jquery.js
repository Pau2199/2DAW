$(function(){
    $.getJSON('obtenerImagenes.php', function(data){
        $.each(data, function(index){
            var div = $('<div>').attr('id','img'+data[index][1]);
            var img = $('<img>').attr({
                src: 'img/coches/'+data[index][0]+'.png',
                alt: 'imagen'+ data[index][0],
                class: 'imagenes'
            });
            div.append(img);
            $('#contenedor').append(div); 
        })
    })

    /*
    $('#contenedor').on('mouseenter', 'div.imagenes', function(){
        if($('#informacion').length == 0){
            var id = $(this).attr('id');
            $.post({url: 'obtenerInformacionCoche.php',
                    data: {id: $(this).attr('id').split('img')[1]},
                    success: function(data){
                        console.log(data);
                        data = JSON.parse(data);
                        var div = $('<div>').attr('id', 'informacion');
                        div.html('Nombre: ' + data.nombre +
                                 'Marca: ' + data.modelo +
                                 'Estado: ' + data.estado +
                                 'Precio: ' + data.precio
                                )
                        $('#'+id).append(div);
                    },
                    dateType: 'json'
                   });
        }
    });
    $('#contenedor').on('mouseleave', 'div.imagenes', function(){
        $('#informacion').remove();
    })*/

    $('#contenedor').on('click', 'img.imagenes', function(){
        var div = $('<div>').attr('id', 'imagenGrande');
        div.css({
            width: innerWidth,
            height: innerHeight,
            position: 'absolute',
            top: 0,
            left: 0,
            textAlign: 'center',
            backgroundColor: 'rgb(0,0,0,.4)'
        })
        var img = $(this).clone();
        div.append(img);
        $('#contenedor').append(div);
    })

});