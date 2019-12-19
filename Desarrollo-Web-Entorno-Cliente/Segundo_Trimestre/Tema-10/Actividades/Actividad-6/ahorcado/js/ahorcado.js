$(function(){
    $('#opciones').css('display', 'block');
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

        $.post('palabraAleatoria.php',
               $('#opciones').serialize(),
               function(data){
            empezarPartida(data);
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
        if(palabra.length >= 7){
            $('img').attr('src', 'img/3.png');
            intento = 3;
        }else if(palabra.length <= 5){
            var random = Math.floor(Math.random() * palabra.length)
            $('#filaLetras td:nth-child('+(random+1)+')').append(palabra[random]);
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
                if(intento == 9){
                    $('#filaLetras').css('background-color', 'rgb(255,0,0)');
                    $('img').css('border', '5px solid rgb(255,0,0)');
                    rellenarPalabra(palabra);
                }
            }else{
                if(aciertos == palabra.length){
                    $('img').attr('src', 'img/win.png');
                    $('.grid-letra').off();
                    $('#filaLetras').css('background-color', 'rgb(54,255,0)');
                    $('img').css('border', '5px solid rgb(54,255,0)');
                }
            }


        })

        $('#acertar').click(function(evento){
            evento.preventDefault();
            rellenarPalabra(palabra);
            if($('#solucion').val() == palabra){
                $('#filaLetras').css('background-color', 'rgb(54,255,0)');
                $('img').attr('src', 'img/win.png');
            }else{
                $('#filaLetras').css('background-color', 'rgb(255,0,0)');
                $('img').attr('src', 'img/9.png');

            }
        })
        $('#resetear').click(function(evento){
            location.reload();
        })

    }

    function rellenarPalabra(palabra){
        $('.grid-letra').off();
        var letra = -1;
        $('#filaLetras td').each(function(){
            letra++;
            $(this).html(palabra[letra]);
        })
    }


});