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
    $('#contenedor').on('mouseenter','div.imagenes',function(){
        var elemento = $(this);
        if($('#texto').length == 0){
            $.post({url: 'obtenerInformacionCoche.php',
                    data: {'id' : $(this).attr('id').split('f')[1]},
                    success: function(data){
                        data = JSON.parse(data);
                        var div = $('<div>').append('Marca : ' + data.nombre +
                                                    ' Modelo: ' + data.modelo +
                                                    ' Precio: ' + data.precio)
                        div.attr('id', 'texto');
                        elemento.append(div);
                        $('#texto').hide();
                        $('#texto').fadeIn('slow');

                    },
                    dateType: 'json'
                   })
        }
    })
    $('#contenedor').on('mouseleave','div.imagenes',function(){
        $('#texto').fadeOut('slow');
        $('#texto').remove();
    })
});