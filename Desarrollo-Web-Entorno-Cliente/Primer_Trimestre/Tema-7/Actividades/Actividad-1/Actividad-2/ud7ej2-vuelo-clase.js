/*
autor: Pau Llorens Martinez                    

ejercicio: ud7ej2-vuelo-clase.js
*/
class Vuelo{
    constructor(codigo, horaLlegada, horaSalida, finalizado){
        this.codigo = codigo;
        this.horaLllegada = horaLlegada;
        this.horaSalida =  horaSalida;
        this.finalizado = finalizado;
    }
    
    toString(){
        var texto = 'Codigo: ' + this.codigo  
        + ' Hora de Llegada: ' + this.horaLllegada  
        + ' Hora de Salida: ' + this.horaSalida;
        if(this.finalizado == false){
            texto += ' Finalizado: No' 
        }else{
            texto += ' Finalizado: Si'
        }
        return texto;
    }
    
    modificarHoraDeSalida(nuevaHora){
        this.horaSalida = nuevaHora;
    }
    modificarHoraDeLlegada(nuevaHora){
        this.horaLllegada = nuevaHora;
    }
    modificarFinalizado(boleanoFinalizado){
        this.finalizado = boleanoFinalizado;
    }
    
}