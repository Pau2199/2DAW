<?php
$imagenes = ['baymax_dribble.png', 'NY.png', 'ferrari.png'];
for ($i = 0 ; $i<count($imagenes) ; $i++){
    echo '<img src="catalogo.php?img=',$imagenes[$i].'" alt="imagenes">';     
}
?>