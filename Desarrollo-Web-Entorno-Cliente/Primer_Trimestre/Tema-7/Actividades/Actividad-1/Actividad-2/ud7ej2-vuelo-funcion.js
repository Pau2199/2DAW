/*
autor: Pau Llorens Martinez                    

ejercicio: ud7ej2-vuelo-funcion.js
*/
function Vuelo(codigo, horaLlegada, horaSalida, finalizado){
    this.codigo = codigo;
    this.horaLllegada = horaLlegada;
    this.horaSalida = horaSalida;
    this.finalizado = finalizado;
    
    this.toString = function toString(){
        return 'Codigo: ' + this.codigo + '\n'
        + 'Hora de Llegada: ' + this.horaLllegada + '\n'
        + 'Hora de  Salida: ' + this.horaSalida + '\n'
        + 'Finalizado: ' + this.finalizado;
    };
    
    this.modificarHoraDeLlegada = function modificarHoraDeLlegada(nuevaHora){
        this.horaLllegada = nuevaHoraLlegada;
    }
    this.modificarHoraDeSalida = function modificarHoraDeSalida(nuevaHora){
        this.horaSalida = nuevaHoraSalida;
    }
    this.modificarFinalizado = function modificarFinalizado(booleanoFinalizado){
        this.finalizado = booleanoFinalizado;
    }
    
    
}