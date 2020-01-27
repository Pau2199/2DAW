$(function(){
    $('li').click(function(){
        window.location.href = 'alumno.php?id='+$(this).attr('id').split('alumno')[1];
        localStorage.setItem('idAlumno', $(this).attr('id').split('alumno')[1])
    })

    $('span').click(function(){
        if($('#inputGenerado').length == 0){
            localStorage.setItem('valorInput', $(this).html());
            var input = $('<input>').attr({
                type: 'text',
                id: 'inputGenerado',
                class: 'datosAlumno',
                name: 'inputGenerado',
                value: $(this).html()
            });
            $(this).html('')
            $(this).append(input);
            input.focus();
            input.select();
        }
    })

    $('div').on('blur', '.datosAlumno', function(){
        $.post({url: 'modificarDato.php',
                data: {idAlumno: localStorage.getItem('idAlumno'), valorNuevo: $('#inputGenerado').val(), campoParaModificar: $(this).attr('id')},
                success: function(data){
                    console.log(data);
                    if(data.filasAfectadas != 0){
                        $('#inputGenerado').parent().html($('#inputGenerado').val());
                        $('#inputGenerado').remove();
                    }else{
                        $('#inputGenerado').parent().html(localStorage.getItem('valorInput'));
                        $('#inputGenerado').remove();
                    }
                },
                dataType: 'json'
               })
    })

    $('td').click(function(){
        if($(this).attr('class') != null){
            localStorage.setItem('nota', $(this).html());
            var input = $('<input>').attr({
                type: 'number',
                id: 'inputGeneradoNotas',
                class: 'notas'+$(this).parent().attr('id').split('al')[1],
                name: 'inputGeneradoNotas',
                value: $(this).html()
            });
            $(this).html('');
            $(this).append(input);
            input.focus();
            input.select();   
        }
    });

    $('tr').on('blur', '#inputGeneradoNotas', function(){
        $.post({url: 'modificarNotas.php',
                data:{idAlumno:2321, idActividad: $(this).parent().attr('class').split('act')[1], notaNueva: $('#inputGeneradoNotas').val()},
                success: function(data){
                    console.log(data);
                    if(data.filasAfectadas != 0){
                        $('#inputGeneradoNotas').parent().html($('#inputGeneradoNotas').val());
                        $('#inputGeneradoNotas').remove();
                    }else{
                        $('#inputGeneradoNotas').parent().html(localStorage.getItem('nota'));
                        $('#inputGeneradoNotas').remove();
                    }
                }
               })
    })

})