/*
autor: Pau Llorens Martinez                    

ejercicio: ud7ej1-gestion.js
*/
document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    var instituto = new Instituto('IES José Rodrigo Botet', 7 , 100);
    console.log(instituto.toString());
    var alumno1 = new Alumnos('54748856A', 'Pau', 8);
    var alumno2 = new Alumnos('78412013B', 'Alex', 6);
    instituto.modifcarTotalAlumnos(102);
    alumno2.modificarNotaMedia(7);
    console.log(alumno1.toString());
    console.log(alumno2.toString());
    console.log(instituto.toString());

}

