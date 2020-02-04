<?php

/**
 * Methods of our simple SOAP service.
 */
class SimpleSoapServer {

    public function suma($num1 , $num2) {
        return $num1 + $num2;    
    }
    public function resta($num1 , $num2) {
        return $num1 - $num2;    
    }
    public function multiplicar($num1 , $num2) {
        return $num1 * $num2;    
    }
    public function dividr($num1 , $num2) {
        return $num1 / $num2;    
    }
    public function raiz_cuadrada($num1) {
        return sqrt($num1);    
    }
    public function seno($num1) {
        return sin($num1);    
    }
    public function coseno($num1) {
        return cos($num1);    
    }
    public function tangente($num1) {
        return tan($num1);    
    }
}
