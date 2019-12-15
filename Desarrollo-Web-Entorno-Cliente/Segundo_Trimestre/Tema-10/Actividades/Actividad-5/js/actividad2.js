$(function(){
    $('a').click(function(){
        $('#contenido').hide('normal');
        $('a').css('background-color', '');
        $(this).css('background-color', 'green');
    })

    var links = document.getElementsByTagName('a');
    for (var i = 0  ; i <links.length ; i++){
        links[i].addEventListener('click' , cargarInformacion);
    }

    function cargarInformacion(){
        var http = obtainXMLHttpRequest();
        http.open('GET', this.id+'.html', true);
        http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        http.onreadystatechange = function(){
            if(http.readyState==2){
                document.getElementById('contenido').innerHTML = '<img src="cargando.gif" alt="Cargando> CARGANDO...';
            }
            if(http.readyState==4){
                if(http.status==200){
                    document.getElementById('contenido').innerHTML= http.responseText;
                    $('#contenido').show('normal');
                }
            }
        }
        http.send();
    }
})
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

