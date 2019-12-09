<?php
$imagen=$_GET['img'];
if($imagen != null){
    $logo = imagecreatefrompng($imagen);
    $logo = imagescale($logo, 450);
    $color = imagecolorallocate($logo, 255,0,0);
    $fontFamily = __DIR__ . '/arial.ttf';
    imagettftext($logo, 50,-30,40,80, $color, $fontFamily, 'Pau Llorens');
    header('Content-Type: imagen/png');
    imagepng($logo);
    imagedestroy($logo);   
}else{
    echo 'prueba error';
}

?>