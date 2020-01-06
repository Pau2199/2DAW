<?php
session_start();
$imagen = imagecreatetruecolor(200, 90);
$color = imagecolorallocate($imagen, mt_rand(0,255),mt_rand(0,255),mt_rand(0,255));
$fontFamily = __DIR__ . '/arial.ttf';
imagettftext($imagen, 30, -20,20,30, $color, $fontFamily, generarCodigoCaptchar());
header('Content-Type: imagen/png');
imagepng($imagen);
imagedestroy($imagen);  

function generarCodigoCaptchar(){

    $res="";
    $valores="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
    for($i=0; $i<5; $i++){
        $res.=$valores{mt_rand(0,62)};
    }
    $_SESSION['captchar'] = $res;
    return $res;
}

?>