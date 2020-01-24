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
                value: $(this).html()
            });
            $(this).html('')
            $(this).append(input);   
        }
    })

    $('div').on('blur', 'span', function(){
        $.post({url: 'modificarDato.php',
                data: {idAlumno: localStorage.getItem('idAlumno'), valorNuevo: ('#inputGenerado').html()},
                success: function(data){

                },
                dataType: 'json'

               })
    })
})