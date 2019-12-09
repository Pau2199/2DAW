<?php
  $num = 10;
  $factorial = fact($num);

echo $factorial;

function fact($n){
      if($n > 1){
          return $n * fact($n-1);
      }else{
          return 1;
      }
  }
?>