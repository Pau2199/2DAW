/*
autor: Pau Llorens Martinez                    

ejercicio: ud7ej1-alumno.js
*/
class Alumnos{
    constructor(dni, nombre , notaMedia){
        this.dni = dni;
        this.nombre = nombre;
        this.notaMedia = notaMedia;
    }
    
    toString(){
        return 'DNI: ' + this.dni + '\n'
        + 'Nombre: ' + this.nombre + '\n'
        + 'Nota Media: ' + this.notaMedia;
    }
    
    modificarNotaMedia(nuevaNota){
        this.notaMedia = nuevaNota;
    }
}