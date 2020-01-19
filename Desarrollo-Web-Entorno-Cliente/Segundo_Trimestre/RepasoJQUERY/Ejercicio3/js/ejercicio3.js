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
        //una vez haga click en una imagen , comprabamos primero que no haya ninguna acción en curso
        if($('#divClonado').length == 0){
            //una vez comprobamos clonamos el div y le añadimos un id y la clase que le añade el position: absolute
            var divClonado = $(this).clone();
            var id = $(this).attr('id');
            divClonado.attr({id: 'divClonado',
                             class: 'extra'});
            //añadimos el div clon al div de la imagen que se le ha hecho click y le aplicamos la animación que querramos
            $('#'+id).append(divClonado);
            $("#divClonado").animate({
                opacity: '0.2',
                left: '2000px',
                bottom: '1150px'},{
                duration: 1500, complete:  function() {
                    $('#divClonado').remove();
                }
            });   
        }
    })
});