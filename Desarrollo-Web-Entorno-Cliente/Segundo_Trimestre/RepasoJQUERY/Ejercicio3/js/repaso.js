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
        if($('#divClonado').length == 0){
            var divClonado = $(this).clone();
            var id = $(this).attr('id');
            divClonado.attr({id: 'divClonado',
                             class: 'extra'});
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