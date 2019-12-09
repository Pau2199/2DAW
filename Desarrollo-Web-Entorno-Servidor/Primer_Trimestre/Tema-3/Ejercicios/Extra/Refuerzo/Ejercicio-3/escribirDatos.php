<?php
if ($_FILES['archivo']['error'][$i] != UPLOAD_ERR_OK) {
    echo 'Error: ';
    switch ($_FILES['archivo']['error']) {
        case UPLOAD_ERR_INI_SIZE:
        case UPLOAD_ERR_FORM_SIZE: echo 'El fichero es demasiado grande<br>';
            break;
        case UPLOAD_ERR_PARTIAL: echo 'El fichero no se ha podido subir entero';
            break;
        case UPLOAD_ERR_NO_FILE: echo 'No se ha podido subir el fichero';
            break;
        default:echo 'Error indeterminado.';
            $errorFichero = true;
    }
    
    if(is_uploaded_file($_FILES['archivo']['tmp_name']) == true){
        $nombre 
    }
?>