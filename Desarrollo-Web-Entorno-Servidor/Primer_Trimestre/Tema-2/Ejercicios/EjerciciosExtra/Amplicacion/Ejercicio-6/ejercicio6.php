<?php
$array = [1,2,60,50,3,4,5,7,43,55];


function quicksort($array){
    if($array == [] ){
        return [];
    }else{
        $pivote = $array[0];
        $mayores = [];
        $menores = [];
        for($i = 1; $i<count($array) ; $i++){

            if($pivote < $array[$i]){
                $mayores[] = $array[$i]; 
            }else if($pivote >= $array[$i]){
                $menores[] = $array[$i];
            }
        }
    }
    return array_merge(quicksort($menores), [$pivote], quicksort($mayores)); 
}

$numeros=quicksort($array);
echo '<pre>'.print_r($numeros, true).'</pre>';





?>