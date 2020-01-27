$(function(){
    $('li').click(function(){
        window.location.href = 'alumno.php?id='+$(this).attr('id').split('alumno')[1];
        localStorage.setItem('idAlumno', $(this).attr('id').split('alumno')[1])
    })

    $('span').click(function(){
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
    })

    $('div').on('blur', '.datosAlumno', function(){
        if(($(this).val().length != 0) && ($(this).val() != localStorage.getItem('valorInput'))){
            $.post({url: 'modificarDato.php',
                    data: {idAlumno: localStorage.getItem('idAlumno'), valorNuevo: $('#inputGenerado').val(), campoParaModificar: $(this).parent().attr('id')},
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
        }else{
            $('#inputGenerado').parent().html(localStorage.getItem('valorInput'));
            $('#inputGenerado').remove();
        }
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
            form.append(input);
            $(this).append(input);
            input.focus();
            input.select();   
        }
    });

    $('tr').on('blur', '#inputGeneradoNotas', function(){
        if(($(this).val() >= 0) && ($(this).val() <= 10) && ($(this).val() != localStorage.getItem('nota'))){
            $.post({url: 'modificarNotas.php',
                    data:{idAlumno: $('#inputGeneradoNotas').attr('class').split('notas')[1], idActividad: $(this).parent().attr('class').split('act')[1], notaNueva: $('#inputGeneradoNotas').val()},
                    success: function(data){
                        if(data.filasAfectadas != 0){
                            $('#inputGeneradoNotas').parent().html($('#inputGeneradoNotas').val());
                            $('#inputGeneradoNotas').remove();
                        }else{
                            $('#inputGeneradoNotas').parent().html(localStorage.getItem('nota'));
                            $('#inputGeneradoNotas').remove();
                        }
                    }
                   })
        }else{
            $('#inputGeneradoNotas').parent().html(localStorage.getItem('nota'));
            $('#inputGeneradoNotas').remove();
        }
    })

})