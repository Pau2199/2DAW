/*
autor: Pau Llorens Martinez                    

ejercicio: ud7ej2-vuelo-gestion.js
*/
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    var vuelo1 = new Vuelo (1, '21:40', '11:00', false);
    var vuelo2 =  new Vuelo (2, '14:40', '13:00', true);
    var vuelo3 = new Vuelo (3, '03:40', '00:00', false);
    var vuelo4 = new Vuelo (4, '10:40', '09:00', true);
    var vuelo5 = new Vuelo (5, '23:40', '05:00', false);

    var vuelos = [vuelo1, vuelo2, vuelo3, vuelo4, vuelo5];

    for (var i = 0 ; i<vuelos.length ; i++){
        var texto = "";
        var div = document.createElement('div')
        if(vuelos[i].finalizado == false){
            var fecha = new Date()
            var horas = vuelos[i].horaLllegada.split(":")[0];
            var minutos = vuelos[i].horaLllegada.split(":")[1];
            console.log(horas + ':' + minutos);
            if(fecha.getHours() == horas){
                if(fecha.getMinutes() < minutos){
                    texto = 'El vuelo llega en Hora';
                }else{
                    texto = 'El vuelo llega retrsado';
                }
            }else{
                console.log('Pasa por aqui')
                if(fecha.getHours() > horas){
                    console.log('Entra en retraso');
                    texto = 'El vuelo con el Codigo ' + vuelos[i].codigo + ' llega con Retrasado'
                }else{
                    texto = 'El vuelo con el Codigo ' + vuelos[i].codigo + ' llega en Hora'
                }
            }

            div.innerHTML = texto + '</br> ' + vuelos[i].toString() + '</br>' + '--------------------------------';
            document.body.appendChild(div);

        }else{
            div.innerHTML = vuelos[i].toString() + '</br>' + '--------------------------------';
            document.body.appendChild(div);
        }

    }
}