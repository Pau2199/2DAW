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
            empezarPartida(data);
        });
    });
    $('#empezar').click(function(evento){
        evento.preventDefault();
        var palabra = this.value.trim();
        if(palabra.length != 0){
            empezarPartida(palabra);
        }
    });
    function empezarPartida(palabra){
        console.log('llega aqui ' + palabra)
    }


});