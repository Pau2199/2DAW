document.addEventListener('DOMContentLoaded', cargar);

function cargar(){
    var paginas = '<nav aria-label="Page navigation example"><ul class="pagination pagination-lg justify-content-center mt-3 mb-5 mx-auto">'
    for (var i = 1 ; i<7 ; i++){
        paginas += '<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>'
    }
    paginas += '</ul></nav>';
    document.getElementById('paginacion').innerHTML = paginas;
    
    devolverPersonajes(10, 0);
    
    var links = document.getElementsByTagName('a');
    for (var i = 0  ; i<links.length ; i++){
        links[i].addEventListener('click', ponerPersonajes);
    }
    
    function ponerPersonajes(){
        devolverPersonajes(10, parseInt(this.innerHTML)-1);
    }
    
    function devolverPersonajes(limitador , pagina){
        var offset = pagina*limitador;
        
        if(offset == 50){
            limitador = 7;
        }

        var ajax = obtainXMLHttpRequest();

        ajax.open('GET', 'https://breakingbadapi.com/api/characters?limit='+limitador+'&offset='+offset, true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.onreadystatechange = function(){
            if(ajax.readyState==2){
                document.getElementById('personajes').innerHTML = '<img src="cargando.gif" alt="Cargando> CARGANDO...';
            }
            if(ajax.readyState==4){
                if(ajax.status==200){
                    var json = ajax.responseText;
                    json = JSON.parse(json);
                    colocarTextoHtml(json);
                }
            }
        }
        ajax.send();

    }

    function colocarTextoHtml(objeto){
        document.getElementById('personajes').innerHTML="";
        var personajeDiv ="";
        for (var i = 0 ; i<objeto.length ; i++){
            personajeDiv += '<div class="col-3"><div class="card bg-light my-2 mx-1 border-dark"><img src="'+objeto[i].img+'"class="card-img-top" alt="Walter White"><div class="card-body"><h5 class="card-title">'+objeto[i].name+'</h5><p class="card-text">Apodo: ' +objeto[i].nickname+'<br>Fecha nacimiento:'+objeto[i].birthday+'</p><p class="card-text"><small class="text-muted">Interpretado por:'+objeto[i].portrayed+'</small></p></div></div></div>'    
        }
        document.getElementById('personajes').innerHTML = personajeDiv;

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