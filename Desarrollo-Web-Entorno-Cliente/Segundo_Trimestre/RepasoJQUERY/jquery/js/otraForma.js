$(function(){
    $('li').click(function(){
        location.href = 'alumno.php?id='+$(this).attr('id').split('alumno')[1];
    });

    $('span').click(function(){
        var form = $('<form>').attr('id', 'cambiarDato');
        var input = $('<input>').attr({
            type: 'text',
            name: 'valorACambiar'
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
            name: 'campoCambiar',
            value: $(this).attr('id')
        });
        form.css('float', 'right');
        form.append(input);
        $(this).html('');
        $(this).append(form);
    });
});