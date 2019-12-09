<?php
$cadena = 'reconocer';   
echo palindromo($cadena);
function palindromo ($cadena){
    $palindromo = true;
    $total = strlen((string) $cadena)-1;
    
    for($i=0 ; $i<$total/2 ; $i++){
        if ($cadena[$i] != $cadena[$total]){
            $palindromo = false;
            break;
        }else{
            $total--;
        }
    }
    
    if ($palindromo == true){
        return "La cadena es palindromo";
    }else{
        return "La cadena no es palindromo";
    }
}
?>