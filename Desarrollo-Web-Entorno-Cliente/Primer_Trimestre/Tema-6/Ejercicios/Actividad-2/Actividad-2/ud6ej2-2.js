/*
autor: Pau Llorens Martinez                    

ejercicio: ud6ej2-2.js
*/

document.addEventListener("DOMContentLoaded", cargar);

function cargar(){


    document.getElementById('serie').addEventListener('change', cargarSelect);
    document.getElementById('personaje').addEventListener('change', alerta);

    function cargarSelect(){
        var borrarOptions = document.getElementById('personaje');
        borrarOptions = borrarOptions.getElementsByTagName('option');
        for (var i =  borrarOptions.length-1 ; i>=0 ; i--){
            borrarOptions[i].remove();
        }

        var elementos = document.getElementById('serie');
        var elementoSelecionado = elementos.selectedIndex;
        elementoSelecionado = elementos.options[elementoSelecionado].value;

        if(elementoSelecionado != -1){
            for(var i = 0 ; i<personajes[elementoSelecionado].length ; i++){
                var opcion = document.createElement('option');
                opcion.value = i;
                opcion.innerHTML = personajes[elementoSelecionado][i];
                document.getElementById('personaje').appendChild(opcion);
            }
        }





    }

    function alerta(){
        var elementosSerie = document.getElementById('serie');
        var elementoSelecionadoSerie = elementosSerie.selectedIndex;
        elementoSelecionadoSerie = elementosSerie.options[elementoSelecionadoSerie].text;

        var elementos = document.getElementById('personaje');
        var elementoSelecionado = elementos.selectedIndex;
        elementoSelecionado = elementos.options[elementoSelecionado].text;

        alert('La serie elegida es : ' + elementoSelecionadoSerie + ' Y el personaje elegido es: ' + elementoSelecionado);

    }
}


