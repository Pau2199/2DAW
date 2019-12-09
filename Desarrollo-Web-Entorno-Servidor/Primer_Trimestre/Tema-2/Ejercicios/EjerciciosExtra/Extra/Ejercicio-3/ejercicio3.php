<?php
$num = 13;
echo binario($num);
function binario($num){
    if($num >=2){
        $div = (int)($num/2);
        $resto = $num%2;
        return binario($div)*10+$resto;
    }else{
        return $num;
    }
}

?>