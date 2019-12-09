/*
autor: Pau Llorens Martinez                    

ejercicio: ud8ej5.js
*/
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    document.getElementById('enviar').addEventListener('click', crearCookie);


    function crearCookie(evento){
        evento.preventDefault();
        var objeto = {};
        var inputs = document.getElementsByTagName('input');
        for(var i = 0 ; i<inputs.length ; i++){
            if((inputs[i].type == 'text') || (inputs[i].type == 'date')){
                if(inputs[i].value != ""){
                    console.log(objeto);
                    var nombre = inputs[i].name;
                    var objetos = {nombre:inputs[i].value};
                    //eval("objetos."+inputs[i].name+"=inputs[i].value");
                   objeto[inputs[i].name]=inputs[i].value;
                    console.log(objetos);
                }
            }else if (inputs[i].type == 'radio'){
                var checks = document.getElementsByName('sexo');
                if(comprobarChecks(checks) != ""){
                    objeto[inputs[i].name]=comprobarChecks(checks);
                }
            }else if (inputs[i].type == 'checkbox'){
                var habilidades = document.getElementsByName('habilidades');
                for (var j = 0 ; j<habilidades.length ; j++){
                    objeto[habilidades[j].value]=agregarCheck(habilidades[j]);
                }
                var idiomas = document.getElementsByName('idioma');
                for (var j = 0 ; j<idiomas.length ; j++){
                    objeto[idiomas[j].value]=agregarCheck(idiomas[j]);
                }
            }
        }
        var elementos = document.getElementById('nacionalidad');
        var elementoSelecionado = elementos.selectedIndex
        if(comprobarSelect(elementos.options[elementoSelecionado].value) == true){
            objeto[document.getElementById('nacionalidad').name]=elementos.options[elementoSelecionado].text
        }
        if(document.getElementById('comentario').innerHTML != ""){
            objeto[document.getElementById('comentario').name]=document.getElementById('comentario').innerHTML;
        }
		console.log(objeto);
        objeto = JSON.stringify(objeto);
		console.log(objeto);
        //setCookie('objetoJSON', objeto, 3);
    }
}

function comprobarChecks(checks){
    var estaSel="";
    for (var i = 0 ; i<checks.length ; i++){
        if(checks[i].checked == true){
            estaSel = checks[i].value;
            break;
        }
    }
    return estaSel;
}

function agregarCheck(elemento){
    if(elemento.checked == true){
        return true
    }else{
        return false;
    }
}

function comprobarSelect(elemento){
    if (elemento != -1){
        return true;
    }else{
        return false;
    }
}