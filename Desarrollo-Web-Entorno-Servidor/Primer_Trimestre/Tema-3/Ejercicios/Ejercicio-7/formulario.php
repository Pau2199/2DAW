<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Formulario</title>
        <style>
            .error{
                border-color: red;
            }
        </style>
    </head>
    <body>
        <!--<pre><?php print_r($_FILES)?></pre>-->
        <?php
    $usu = "";
$nom = "";
$ape = "";
$dni = "";
$tel = "";
$email ="";
$fecha =""; 
$errorArchivo = false;
if (isset($_POST['Registrar']) == true){
    if(preg_match('/^([a-zA-Z0-9]){3,10}/',$_REQUEST['usuario']) == 0){
        $usu = " ";
    }else{
        $usu = $_REQUEST['usuario'];
    }
    if(preg_match('/^([a-zA-Z]){3,10}/',$_REQUEST['nombre']) == 0){
        $nom = " ";
    }else{
        $nom = $_REQUEST['nombre'];
    }
    if(preg_match('/^([a-zA-Z]){3}/',$_REQUEST['apellidos']) == 0){
        $ape = " ";
    }else{
        $ape = $_REQUEST['apellidos'];
    }
    if(preg_match('/^(([A-Z]\d{8})|(\d{8}[A-Z]))$/',$_REQUEST['dni']) == 0){
        $dni = " ";
    }else{
        $dni = $_REQUEST['dni'];
    }
    if(preg_match('/^([0-9]){9,9}/',$_REQUEST['telefono']) == 0){
        $tel = " ";
    }else{
        $tel = $_REQUEST['telefono'];
    }
    $email = $_REQUEST['mail'];
    $fecha = $_REQUEST['fechaNacimiento'];

    if (is_dir('documentosPHP') == false){
        mkdir('documentosPHP');
    }

    for($i = 0 ; $i<count($_FILES['archivo']['error']) ; $i++){
        if ($_FILES['archivo']['error'][$i] != UPLOAD_ERR_OK) {
            echo 'Error: ';
            switch ($_FILES['archivo']['error'][$i]) {
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
        }
    }

    if (($_FILES['archivo']['type'][0] != 'application/pdf') && ($_FILES['archivo']['type'][1] != 'imagen/png')) {
        echo 'Error: No se trata de un fichero PDF o de una imagen: ';
        $errorArchivo = true;
    }else{
        //Modificar tamaño de la imagen
        $imagen = imagecreatefrompng($_FILES['archivo']['tmp_name'][1]);
        $imagen = imagescale($imagen, 50, 50);
        imagepng($imagen, './documentosPHP/imagenModificada.png');
        
        for($i = 0 ; $i<count($_FILES['archivo']['tmp_name']) ; $i++){
            $nombre = './documentosPHP/'.$_FILES['archivo']['name'][$i];
            if(is_uploaded_file ($_FILES['archivo']['tmp_name'][$i]) === true){
                if (move_uploaded_file($_FILES['archivo']['tmp_name'][$i], $nombre) == false) {
                    echo 'Error: No se puede mover el fichero a su destino <br>';
                    $errorFichero = true;

                }

            }else{
                echo 'Error: posible ataque. Nombre: '.$_FILES['archivo']['name'][$i];
                $errorFichero = true;
            }
        }
    }
    if($errorArchivo == false){
        echo 'Archivo subido correctamente , y registro completado';
    }
}
        ?>
        <form action="formulario.php" method="POST" enctype="multipart/form-data"><br>
            Usuario <input type="text" name="usuario" class="<?= $usu == " " ? 'error' : '' ?>" value="<?php if ($usu != " ") echo $usu ?>">
            <?php if ($usu == " ") echo "<span>Usuario mal</span>"?><br>
            Nombre <input type="text" name="nombre" class="<?php if($nom == " " ) echo 'error'; else echo '' ?>" value="<?php if($nom != " ") echo $nom ?>">
            <?php if ($nom == " ") echo "<span>Nombre mal</span>"?><br>
            Apellidos <input type="text" name="apellidos" class="<?php if($ape == " " ) echo 'error'; else echo '' ?>" value="<?php if($ape != " ") echo $ape?>">
            <?php if($ape == " ") echo '<span>Apellido mal</span>'?><br>
            DNI<input type="text" name="dni" class="<?php if($dni == " " ) echo 'error'; else echo '' ?>" value="<?php if ($dni != " ") echo $dni ?>">
            <?php if($dni == " ") echo '<span>DNI Incorrecto</span>'?><br>
            mail <input type="email" name="mail" value="<?php echo $email?>"><br>
            Telefono <input type="text" name="telefono" class="<?php if($tel == " " ) echo 'error'; else echo '' ?>" value="<?php if($tel != " ") echo $tel?>">
            <?php if($tel == " ") echo '<span>Telefono mal</span>'?><br>
            Fecha de nacimiento <input required type="date" name="fechaNacimiento" value="<?php echo $fecha?>"><br>
            <input type="hidden" name="MAX_FILE_SIZE" value="1000000">
            Subir Curriculo<input type="file" name="archivo[]" id="archivo"><br>
            <input type="hidden" name="MAX_FILE_SIZE" value="100000000">
            Subir una foto tuya<input type="file" name="archivo[]" id="archivo"><br>
            <input type="submit" name="Registrar" value="Enviar">
        </form>
    </body>
</html>


<?php
    
    if ($usu == ' ')
    {
        echo 'error';
    }
    else
    {
        echo '';
    }
                           
                           
    // (comparacion) ? (true) : (false)
                           
    $var = ($usu == ' ') ? 'error' : ''