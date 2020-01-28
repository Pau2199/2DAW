$(function(){
    $('li').click(function(){
        location.href = 'alumno.php?id='+$(this).attr('id').split('alumno')[1];
    });

    $('span').click(function(){
        var form = $('<form>').attr('id', 'cambiarDato');
        var input = $('<input>').attr({
            type: 'text',
            id: 'valorACambiar',
            name: 'valorNuevo'
        })
        form.append(input);
        input =  $('<input>').attr({
            type: 'hidden',
            name: 'idAlumno',
            value: $('div').attr('id').split('alumno')[1]
        })
        form.append(input);
        input = $('<input>').attr({
            type: 'hidden',
            name: 'campoParaModificar',
            value: $(this).attr('id')
        });
        form.append(input);
        $(this).html('');
        $(this).append(form);
    });

    $('form').on('blur', '#cambiarDato', function(){
        $.post('modificarDato.php',
               $('#cambiarDato').serialize(),
               function(data){
            if(data.filasAfectadas != 0){
                $('#cambiarDato').parent().html($('#cambiarDato').children()[0].val());
                $('#cambiarDato').remove();
            }else{
/*                $('#inputGenerado').parent().html();
                $('#inputGenerado').remove();*/
            }
        })
    })

});