<?php
    $num1 = 0;
    $num2 = 1;
    $fibonacci = 18;

    echo $num1 . " " . $num2 . " ";

    for ($i = 0 ; $i<$fibonacci ; $i++){
        $suma = $num1 + $num2;
        $num1 = $num2;
        $num2 = $suma;
        echo $suma . " ";
    }



/*echo fibonaci(6);
function fibonaci ($num){
    if($num > 1){
        $fi = fibonaci($num-1)+fibonaci($num-2);
        return $fi;
    }else{
        return 1;
    }

    //echo $fi . " ";

}*/



?>