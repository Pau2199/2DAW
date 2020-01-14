$(function(){
    //Carga toda la pagina al inicio y le muestras las opciones por si elige la palabra aleatoriamente, ademas genera el panel de letras.
    $('#opciones').css('display', 'block');
    $.getJSON('obtenerLetras.php', function (data){
        console.log(data);
        for(var i = 0 ; i < data.length ; i++){
            var div = $('<div>').attr('class', 'grid-letra').append(data[i]);
            $('#panelLetras').append(div);
        }
    });
    //Si hace click en introducir una palabra, aperece el formulario para que la introduzca
    $('#manual').click(function(){
        $('#partidaPersonalizada').css('display', 'inline');
    });
    
    //Si hace click en aleatoriamente , lo mando al archivo php con la dificultad que ha selecionado y devuelve una palabra correspondiente a la dificultad y empieza la partida.
    $('#bbdd').click(function(){
        $.post('palabraAleatoria.php',
               $('#opciones').serialize(),
               function(data){
            var confPartida = {aleatorio: 'si', dificultad: $('#opciones').serialize().split('=')[1]}
            console.log(confPartida);
            empezarPartida(data,confPartida);
        });
    });
    //Este boton empieza la partida cuando introduce la palabra manualmente.
    $('#empezar').click(function(evento){
        evento.preventDefault();
        var palabra = $('#campopalabra').val().trim();
        if(palabra.length != 0){
            var confPartida = {aleatorio: 'no'}
            empezarPartida(palabra, confPartida);
        }
    });
    
/*    Esta función lo que hace es empezar la partida acorde a la configuración de la partida que ha elegido el usuario y oculta todo lo que ya no se necesita y muestra lo necesario
    para jugar la partida*/
    function empezarPartida(palabra, confPartida){
        console.log(palabra);
        var intento = 1;
        var aciertos = 0;
        $('#menuInicio').css('display', 'none');
        $('#partidaPersonalizada').css('display', 'none');
        $('#menuPartida').css('display', 'block');
        $('#laPalabra').css('display', 'block');
        $('#filaLetras').empty();

        for (var i = 0 ; i<palabra.length ; i++){
            $('#filaLetras').append($('<td>'));
        }
        //Si ha elegido una configuración aleatoria , aqui se ejecuta esa configuración.
        if(confPartida.aleatorio == 'si'){
            if(confPartida.dificultad == 2){
                $('img').attr('src', 'img/3.png');
                intento = 3;
            }else if(confPartida.dificultad == 1){
                var random = Math.floor(Math.random() * palabra.length)
                $('#filaLetras td:nth-child('+(random+1)+')').append(palabra[random]);
                aciertos = 1;
            }   
        }
        //Una vez iniciada la partida , captura del click del panel de las letras y comprueba si ha acetado o fallado con la letra.
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
        //Comprueba que la palabra que ha escrito es correcta con la palabra que se esta jugando.
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
    //Rellena la palabra en caso de que pierda la partida y en caso que la haya acertado
    function rellenarPalabra(palabra){
        $('.grid-letra').off();
        var letra = -1;
        $('#filaLetras td').each(function(){
            letra++;
            $(this).html(palabra[letra]);
        })
    }


});