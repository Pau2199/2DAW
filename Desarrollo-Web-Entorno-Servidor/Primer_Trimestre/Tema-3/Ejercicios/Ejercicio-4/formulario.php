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
        <?php
        
        $usu = "";
        $nom = "";
        $ape = "";
        $dni = "";
        $tel = "";
        

        /*<pre>print_r($_POST) ?</pre>*/
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
            if(preg_match('/^([0-9]){,9}/',$_REQUEST['telefono']) == 0){
                $tel = " ";
            }else{
                $tel = $_REQUEST['telefono'];
            }
        }
        ?>
        <form action="formulario.php" method="POST"><br>
            Usuario <input type="text" name="usuario" class="<?php if($usu == " " ) echo 'error'; else echo '' ?>" value="<?php if ($usu != " ") echo $usu ?>">
            <?php if ($usu == " ") echo "<span>Usuario mal</span>"?><br>
            Nombre <input type="text" name="nombre" class="<?php if(nom == " " ) echo 'error'; else echo '' ?>" value="<?php if($nom != " ") echo $nom ?>">
            <?php if ($nom == " ") echo "<span>Nombre mal</span>"?><br>
            Apellidos <input type="text" name="apellidos" class="<?php if(ape == " " ) echo 'error'; else echo '' ?>" value="<?php if($ape != " ") echo $ape?>">
            <?php if($ape == " ") echo '<span>Apellido mal</span>'?><br>
            DNI<input type="text" name="dni" class="<?php if(dni == " " ) echo 'error'; else echo '' ?>" value="<?php if ($dni != " ") echo $dni ?>">
            <?php if($dni == " ") echo '<span>DNI Incorrecto</span>'?><br>
            mail <input type="email" name="mail"><br>
            Telefono <input type="number" name="telefono" class="<?php if(tel == " " ) echo 'error'; else echo '' ?>" value="<?php if($tel != " ") echo $tel?>">
            <?php if($tel == " ") echo '<span>Telefono mal</span>'?><br>
            Fecha de nacimiento <input required type="date" name="fechaNacimiento"><br>
            <input type="submit" name="Registrar" value="Enviar">
        </form>
    </body>
</html>