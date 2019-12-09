function confirmacion(tabla , codigo){
    let url = 'borrar.php?tabla='+tabla+'&codigoCancion='+codigo;
    if (confirm('¿Seguro que quieres borrar?')){
        location.href=url;
    }
}
