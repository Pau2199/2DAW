<?php
$image = imagecreatetruecolor(200, 50) //Creamos la imagen con los pixeles deseados
imageantialias($image, true);

$colors = [];
$red = rand(0, 255);
$green = rand(0, 255);
$blue = rand(0, 255);
$colors[] = imagecolorallocate($image, $red, $green, $blue);

imagefill($image, 0, 0, $colors[0]);
for($i = 0 ; $i<10; $i++){
    imagesetthickness($image, rand(2,10));
    $rect_color = $colors[rand(1,4)];
    imagerectangle($image, rand(-10, 190), rand(-10, 10), rand(-10, 190), rand(40,60), $rect_color);
}

$black = imagecolorallocate($image, 0,0,0);
$white = imagecolorallocate($image, 255,255,255);
$textcolors =[$black, $white];
$texto = generate_string();

https://code.tutsplus.com/es/tutorials/build-your-own-captcha-and-contact-form-in-php--net-5362



function generate_string(){
    $caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $catcharGenerado ='';
    for ($i = 0 ; $i<7 ; $i++){
        $catcharGenerado .= $caracteres[mt_rand(0, 37-1)];
    }
    return $catcharGenerado;
}



?>