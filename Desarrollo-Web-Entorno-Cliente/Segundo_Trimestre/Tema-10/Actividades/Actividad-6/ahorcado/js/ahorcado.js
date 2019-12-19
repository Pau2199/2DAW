//https://hdeleon.net/como-obtener-un-hijo-por-su-posicion-con-jquery-nth-child/
$(function(){
    $.getJSON('obtenerLetras.php', function (data){
        console.log(data);
        for(var i = 0 ; i < data.length ; i++){
            var div = $('<div>').attr('class', 'grid-letra').append(data[i]);
            $('#panelLetras').append(div);
        }
    });
    $('#manual').click(function(){
        $('#partidaPersonalizada').css('display', 'inline');
    });
    $('#bbdd').click(function(){
        $.getJSON('palabraAleatoria.php', function (data){
            console.log(data);
            empezarPartida(data[0]);
        });
    });
    $('#empezar').click(function(evento){
        evento.preventDefault();
        var palabra = $('#campopalabra').val().trim();
        if(palabra.length != 0){
            empezarPartida(palabra);
        }
    });
    function empezarPartida(palabra){
        console.log(palabra);
        $('#menuInicio').css('display', 'none');
        $('#partidaPersonalizada').css('display', 'none');
        $('#menuPartida').css('display', 'block');
        $('#laPalabra').css('display', 'block');
        $('#filaLetras').empty();
        for (var i = 0 ; i<palabra.length ; i++){
            $('#filaLetras').append($('<td>'));
        }

        var intento = 1;
        var aciertos = 0;
        $('.grid-letra').click(function(){
            var letraAcertada = false;
            $(this).css('background-color', 'red');
            $(this).off();
            for (var i = 0 ; i<palabra.length ; i++){
                if(palabra[i] == $(this).html()){
                    $('#filaLetras td:nth-child('+(i+1)+')').append($(this).html());
                    letraAcertada = true;
                    aciertos++;
                }
            }
            if(letraAcertada == false){
                intento++;
                $('img').attr('src', 'img/'+intento+'.png');
            }else{
                if(aciertos == palabra.length){
                    $('img').attr('src', 'img/win.png');
                }
            }


        })
    }


});