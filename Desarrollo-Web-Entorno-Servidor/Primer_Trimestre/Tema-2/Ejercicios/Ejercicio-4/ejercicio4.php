<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="estilo.css" title="style" />
        <title>º</title>
    </head>
    <body>
        <?php
        echo "<table>";
        for($i= 0 ; $i<10 ; $i++){
            echo "<tr>";
            $fila = 'fila'.strval($i);
            for($j=0 ; $j<10 ; $j++){
                if(($i==0) && ($j==0)){
                    echo "<td></td>";
                }else if (($i==0) && ($j != 0)){
                    echo "<td class='rojo'>".$j."</td>";
                }else if (($j == 0) && ($i != 0)){
                    echo "<td class='rojo'>".$i."</td>";
                }else{
                    echo "<td class=".$fila.">".$i*$j."</td>"; 
                }

            }
            echo "</tr>";
        }
        ?>
    </body>
</html>
