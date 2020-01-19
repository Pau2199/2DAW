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
    $('#contenedor').on('mouseenter','div.imagenes',function(){
        //obtenemos el elemento en el que ha hecho el mouseenter y ademas comprobamos que no haya ningun otro div con el id texto
        var id = $(this).attr('id');
        if($('#texto').length == 0){
            //una vez comprobado hacemos una peticion post para que nos traiga los datos del coche.
            $.post({url: 'obtenerInformacionCoche.php',
                    data: {'id' : $(this).attr('id').split('f')[1]},
                    success: function(data){
                        data = JSON.parse(data);
                        var div = $('<div>').append('Marca : ' + data.nombre +
                                                    ' Modelo: ' + data.modelo +
                                                    ' Precio: ' + data.precio)
                        div.attr('id', 'texto');
                        $('#'+id).append(div);
                        $('#texto').hide();
                        $('#texto').fadeIn('slow');

                    },
                    dateType: 'json'
                   })
        }
    })
    //Al salir del div de la foto , este elimina el div que contenia el texto
    $('#contenedor').on('mouseleave','div.imagenes',function(){
        $('#texto').fadeOut('slow');
        $('#texto').remove();
    })
});