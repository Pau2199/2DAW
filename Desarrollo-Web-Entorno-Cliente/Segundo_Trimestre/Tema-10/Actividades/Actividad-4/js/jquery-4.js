$(function(){
    $('body').on('click', 'div' , function(){
        $(this).css('background-color', 'skyblue');
        $(this).css('border-color', 'skyblue');
        $(this).find('.texto').css('background-color', 'orange');
        $(this).find('.fecha').css('color', 'white')
    })
    $('article').mouseover(function(){
        $(this).attr('class', 'comentariosDentro');    
    });
    $('article').mouseout(function(){
        $(this).removeClass('comentariosDentro');
    });

    document.getElementById('comentar').addEventListener('click', peticionAJAX);

    function peticionAJAX(evento){
        evento.preventDefault();

        var comentario = document.getElementById('comentario').value
        var email = document.getElementById('mail').value
        var nombre = document.getElementById('nombre').value

        if(comentario.length == 0 || email.length == 0 || nombre.length == 0){
            alert('No pueden estar campos vacios');

        }else{
            var ajax = obtainXMLHttpRequest();
            ajax.open('POST', 'http://localhost/2DAW/Desarrollo-Web-Entorno-Cliente/Segundo_Trimestre/Tema-9/Ejercicio-4/Ejercicio4-1/enviarComentario.php', true);
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            ajax.onreadystatechange = function(){
                if(ajax.readyState==2){
                    //                    document.getElementById('comentarios').innerHTML = '<img src="cargando.gif" alt="Cargando> CARGANDO...';
                }
                if(ajax.readyState==4){
                    console.log('Prueba2');
                    if(ajax.status==200){
                        console.log(ajax.responseText);
                        var resultado = JSON.parse(ajax.responseText);
                        if(resultado.estado == true){
                            var div = document.createElement('div');
                            div.setAttribute('class', 'comentario');

                            var datos = document.createElement('div');
                            datos.setAttribute('class', 'datos');
                            var span1 = document.createElement('span')
                            span1.setAttribute('class', 'autor');
                            var a = document.createElement('a');
                            a.setAttribute('href', 'mailto:' + email);
                            a.innerHTML = nombre
                            span1.appendChild(a);
                            datos.appendChild(span1);

                            var span2 = document.createElement('span');
                            span2.setAttribute('class', ' fecha');
                            var fecha = new Date();
                            span2.innerHTML = fecha.getHours() + ':' + fecha.getMinutes() + ' - ' + fecha.getDate() + " " + fecha.getMonth() + " " + fecha.getFullYear();
                            datos.appendChild(span2);


                            div.appendChild(datos);
                            var coment = document.createElement('div')
                            coment.setAttribute('class', 'texto');
                            coment.innerHTML = comentario;
                            div.appendChild(coment);
                            document.getElementById('comentarios').appendChild(div);

                            document.getElementById('formulario').reset();   
                        }else{
                            document.getElementById('error').style.display = 'inline';

                        }
                    } 
                }
            }
            ajax.send("nombre="+nombre+"&mail="+email+"&comentario="+comentario);
        }
    }


    function obtainXMLHttpRequest(){
        var httpRequest;
        if(window.XMLHttpRequest){
            httpRequest = new XMLHttpRequest();
        }else if (window.ActiveXObject){
            try{
                httpRequest = new ActiveXObject("MSXML2.XMLHTTP");
            }catch(e){
                try{
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }catch(e){}
            }
        }

        if(!httpRequest){
            return false;
        }else{
            return httpRequest;
        }   
    }
})