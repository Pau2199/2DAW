$(function(){
    $.getJSON('obtenerImagenes.php', function(data){
        console.log(data);
        for ( var i = 0 ; i<data.length ; i++){
            var img = $('<img>').attr({
                src: 'img/coches/'+data[i][0]+'.png',
                alt: 'imagen',
                class: 'imagenes'
            });
            var div = $('<div class="prueba">').attr('id', 'f'+data[i][1]).append(img);
            $('#contenedor').append(div);
        }    
    })
    $('#contenedor').on('mouseenter','div',function(){
        var imagen = $(this);
        $.post({url: 'obtenerInformaciónCoche.php',
               data: {'id' : $(this).attr('id').split('f')[1]},
               success: function(data){
                data = JSON.parse(data);
               var div = $('<div>').append('Marca : ' + data.nombre +
                                           ' Modelo: ' + data.modelo +
                                           ' Precio: ' + data.precio)
               div.attr('id', 'texto');
               imagen.append(div);
                                          
            },
         dateType: 'json'
               })
    })
    $('#contenedor').on('mouseover', '#texto', function(){
        $(this).remove();
    })
});