<?php
session_start();
    $colorFondo = [mt_rand(0,255),mt_rand(0,255),mt_rand(0,255)];
do {
    $colorTexto = [mt_rand(0,255),mt_rand(0,255),mt_rand(0,255)];
} while (empty(array_diff($colorFondo, $colorTexto)));
$imagen = imagecreatetruecolor(200, 90);
$colorFondo = imagecolorallocate($imagen, $colorFondo[0],$colorFondo[1],$colorFondo[2]);
imagefill($imagen, 0, 0 , $colorFondo); 
$fontFamily = __DIR__ . '/arial.ttf';
$colorTexto = imagecolorallocate($imagen, $colorTexto[0],$colorTexto[1],$colorTexto[2]);
imagettftext($imagen, 30, mt_rand(-10, 10),mt_rand(10,35),45, $colorTexto,$fontFamily, generarCodigoCaptchar());
header('Content-Type: imagen/png');
imagepng($imagen);
imagedestroy($imagen);  

function generarCodigoCaptchar(){

    $random="";
    $caracteres=array_merge(range('A', 'Z'),range('a', 'z'), range(0,9));

    for($i=0; $i<5; $i++){
        $random.=$caracteres[array_rand($caracteres)];
    }
    $_SESSION['captchar'] = $random;
    return $random;
}

?>