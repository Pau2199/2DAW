/*
autor: Pau Llorens Martinez                    

ejercicio: ud7ej1-instituto.js
*/

function Instituto(nombre , nAulas, nAlumnos){
    this.nombre = nombre;
    this.nAulas = nAulas;
    this.nAlumnos = nAlumnos;
    
    this.toString = function toString(){
        return 'Nombre del Instituto' + this.nombre + '\n'
        + 'Numero de Aulas: ' + this.nAulas + '\n'
        + 'Numero de Alumnos: ' + this.nAlumnos;
    };
    
    this.modifcarTotalAlumnos = function modifcarTotalAlumnos(numero){
        this.nAlumnos = numero;
    };
    
}