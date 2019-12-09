document.addEventListener('DOMContentLoaded', cargar);screen

function cargar(){
    document.getElementById('user').addEventListener('change', comprobar);
    document.getElementById('email').addEventListener('change',comprobar);

    function comprobar(){
        
        if(this.value.length > 0){
            var id = this.id;
            var ajax = obtainXMLHttpRequest();
            ajax.open('POST', 'http://localhost/2DAW/Desarrollo-Web-Entorno-Cliente/Segundo_Trimestre/Tema-9/Ejercicio-4/Ejercicio4-2/comprobarDatos.php', true);
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            ajax.onreadystatechange = function(){
                if(ajax.readyState==2){
                    //                document.getElementById('personajes').innerHTML = '<img src="cargando.gif" alt="Cargando> CARGANDO...';
                }
                if(ajax.readyState==4){
                    if(ajax.status==200){

                        if(id == 'user'){
                            id = 'errorUser';
                        }else{
                            id = 'errorMail'
                        }
                        var imagenes = document.getElementById(id).getElementsByTagName('img');

                        var json = ajax.responseText
                        json = JSON.parse(json);
                        if(json.existe == 0){
                            imagenes[0].style.display = 'inline';

                        }else{
                            imagenes[1].style.display = 'inline';
                            var mensaje = document.getElementById(id).getElementsByClassName('mensaje');
                            mensaje[0].style.display = 'inline';
                        }
                    }
                }
            }
            ajax.send("id="+this.id+"&valor="+this.value);
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
}