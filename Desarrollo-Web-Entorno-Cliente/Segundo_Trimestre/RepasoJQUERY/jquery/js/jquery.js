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
                name: 'inputGenerado',
                value: $(this).html(),
            });
            $(this).html('')
            $(this).append(input);
            input.focus();
            input.select();
        }
    })

    $('div').on('blur', 'span', function(){
        $.post({url: 'modificarDato.php',
                data: {idAlumno: localStorage.getItem('idAlumno'), valorNuevo: $('#inputGenerado').val(), campoParaModificar: $(this).attr('id')},
                success: function(data){
                    console.log(data);
                    if(data.error == true){
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
})