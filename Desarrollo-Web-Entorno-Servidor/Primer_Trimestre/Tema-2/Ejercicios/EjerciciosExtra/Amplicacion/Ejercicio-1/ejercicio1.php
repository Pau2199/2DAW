<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <link href="estilo.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <?php
        $arrayImagenes = [4, 6, 8, 10, 10, 12, 20];

        for ($i = 0 ; $i<count($arrayImagenes) ; $i++){
            echo '<div class="imagenes">';
            echo '<img src="dados/caras'.$arrayImagenes[$i].'.jpg" alt="imagen '.$i.'caras"> <br>';
            echo obtenerTirada($arrayImagenes[$i]);
            echo "</div> \n";
        }

        function obtenerTirada($longitud){
            return rand(1,$longitud);
        }
        ?>
    </body>
</html>