/*
autor: Pau Llorens Martinez                    

ejercicio: ud6ej2-1.js
*/

document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    var elementosInput = document.getElementsByTagName('input');
    for(var i = 0 ; i<elementosInput.length ; i++){
        elementosInput[i].addEventListener('blur', comprobarDatosInput);
    }
    var elementosTextArea = document.getElementsByTagName('textarea');
    elementosTextArea[0].addEventListener('blur' , comprobarDatosTextArea);

    var elementosSelect = document.getElementsByTagName('select');
    elementosSelect[0].addEventListener('blur', comprobarElementoSelecionado);

    function comprobarDatosInput(){
        if((this.type == 'text') || (this.type == 'date')){
            if(campoVacioTexto(this.value) == false){
                if(document.getElementById('error'+this.id) == null){
                    var divError = document.createElement('div');
                    divError.setAttribute('id', 'error'+this.id);
                    divError.style.backgroundColor = '#F5A9A9';
                    divError.style.border = '2px solid red';
                    divError.innerHTML = 'El campo ' + this.name + ' no puede estar vacio';
                    this.insertAdjacentElement('afterend', divError);
                }
            }else{
                if((this.value.length > 0) && (document.getElementById('error'+this.id) != null)){
                    document.getElementById('error'+this.id).remove();
                }
            }
        }else if(this.type == 'radio'){
            var checks = document.getElementsByName("sexo");
            if(comprobarChecks(checks) == false){
                if(document.getElementById('error'+this.name) == null){
                    var divError = document.createElement('div');
                    divError.setAttribute('id', 'error'+this.name);
                    divError.style.backgroundColor = '#F5A9A9';
                    divError.style.border = '2px solid red';
                    divError.innerHTML = 'El campo ' + this.name + ' no puede estar vacio';
                    document.getElementById('hombre').insertAdjacentElement('afterend', divError);
                }
            }else{
                if((comprobarChecks(checks) == true) && (document.getElementById('error'+this.name) != null)){
                    document.getElementById('error'+this.name).remove();
                }
            }
        }else if(this.type == 'checkbox'){
            if(this.name == 'habilidades'){
                var elementos = document.getElementsByName('habilidades');
                if(comprobarChecks(elementos) == false){
                    if(document.getElementById('error'+this.name) == null){
                        var divError = document.createElement('div');
                        divError.setAttribute('id', 'error'+this.name);
                        divError.style.backgroundColor = '#F5A9A9';
                        divError.style.border = '2px solid red';
                        divError.innerHTML = 'El campo ' + this.name + ' no puede estar vacio';
                        document.getElementById('HTML').insertAdjacentElement('beforebegin', divError);
                    }
                }else{
                    if((comprobarChecks(elementos) == true) && (document.getElementById('error'+this.name) != null)){
                        document.getElementById('error'+this.name).remove();
                    }
                }
            }else{
                var elementos = document.getElementsByName('idioma');
                if(comprobarChecks(elementos) == false){
                    if(document.getElementById('error'+this.name) == null){
                        var divError = document.createElement('div');
                        divError.setAttribute('id', 'error'+this.name);
                        divError.style.backgroundColor = '#F5A9A9';
                        divError.style.border = '2px solid red';
                        divError.innerHTML = 'El campo ' + this.name + ' no puede estar vacio';
                        document.getElementById('espanyol').insertAdjacentElement('beforebegin', divError);
                    }
                }else{
                    if((comprobarChecks(elementos) == true) && (document.getElementById('error'+this.name) != null)){
                        document.getElementById('error'+this.name).remove();
                    }
                }
            }

        }
    }


    function comprobarDatosTextArea(){
        if(campoVacioTexto(this.value) == false){
            if(document.getElementById('error'+this.id) == null){
                var divError = document.createElement('div');
                divError.setAttribute('id', 'error'+this.id);
                divError.style.backgroundColor = '#F5A9A9';
                divError.style.border = '2px solid red';
                divError.innerHTML = 'El campo ' + this.name + ' no puede estar vacio';
                this.insertAdjacentElement('afterend', divError);
            }
        }else{
            if((this.value.length > 0) && (document.getElementById('error'+this.id) != null)){
                document.getElementById('error'+this.id).remove();
            }
        }
    }

    function comprobarElementoSelecionado(){
        var elementos = document.getElementById('nacionalidad');
        var elementoSelecionado = elementos.selectedIndex
        if(comprobarSelect(elementos.options[elementoSelecionado].value) == false){
            if(document.getElementById('error'+this.id) == null){
                var divError = document.createElement('div');
                divError.setAttribute('id', 'error'+this.id);
                divError.style.backgroundColor = '#F5A9A9';
                divError.style.border = '2px solid red';
                divError.innerHTML = 'Debes selecionar una nacionalidad';
                this.insertAdjacentElement('afterend', divError);
            } 
        }else{
            if((comprobarSelect(elementos.options[elementoSelecionado].value) == true) && (document.getElementById('error'+this.id) != null)){
                document.getElementById('error'+this.id).remove();
            }
        }

    }
}

function campoVacioTexto(texto){

    if(texto != ""){
        return true;
    }else{
        return false;
    }
}

function comprobarChecks(checks){
    var estaSel = false;
    for (var i = 0 ; i<checks.length ; i++){
        if(checks[i].checked == true){
            estaSel = true;
            break;
        }
    }
    return estaSel;

}

function comprobarSelect(elemento){
    if (elemento != -1){
        return true;
    }else{
        return false;
    }
}