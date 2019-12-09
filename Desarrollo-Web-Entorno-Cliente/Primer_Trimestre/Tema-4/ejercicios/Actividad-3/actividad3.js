document.addEventListener("DOMContentLoaded", cargarPagina);
function cargarPagina(){

    document.write('<table>');
    for (var i = 0 ; i<10 ; i++){
        document.write('<tr>');
        for (var j = 0 ; j<10 ; j++){
            document.write('<td id="c' + i + j +'"> X </td>');
            document.getElementById('c'+i+j).addEventListener("click", mostrarAlerta);   

        }
        document.write('</tr>'); 
    }
    document.write('</table>');

    function mostrarAlerta(){
        var fila = parseInt(this.id[1])+1;
        var columna = parseInt(this.id[2])+1;
        alert("Fila: " + fila + " Columna: " + columna);
    }

}