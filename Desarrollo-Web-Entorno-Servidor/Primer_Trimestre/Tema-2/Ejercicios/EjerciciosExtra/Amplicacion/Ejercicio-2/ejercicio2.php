<?php
$numero = rand(1, 1000);
if($numero%3 == 0 ){
    echo "El numero $numero es multiplo de 3";
}else{
    echo "El numero $numero no es multiplo de 3";
}
?>