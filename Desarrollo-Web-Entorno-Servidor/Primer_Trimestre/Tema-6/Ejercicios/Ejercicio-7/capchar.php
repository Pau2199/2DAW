<?php
session_start();
$imagen = imagecreatetruecolor(200, 90);
$colorFondo = imagecolorallocate($imagen, mt_rand(0,255),mt_rand(0,255),mt_rand(0,255));
imagefill($imagen, 0, 0 , $colorFondo); 
$colortexto = imagecolorallocate($imagen, mt_rand(0,255),mt_rand(0,255),mt_rand(0,255));
$fontFamily = __DIR__ . '/arial.ttf';
imagettftext($imagen, 30, mt_rand(-40, 0),mt_rand(20,40),mt_rand(20,50), $colortexto, $fontFamily, generarCodigoCaptchar());
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