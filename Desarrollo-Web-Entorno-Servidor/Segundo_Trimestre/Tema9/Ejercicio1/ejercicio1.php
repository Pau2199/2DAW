<?php
include_once 'personas.inc.php';
header('Content-type: text/xml');
?>
<?xml version="1.0"?>
        <listado>
            <?php foreach($personas as $persona) : ?>
             <persona>
              <?php foreach($persona as $nombre => $contenido) : ?>
                    <<?=$nombre?>><?= $contenido ?></<?=$nombre?>>  
            <?php endforeach ?>
            </persona>        
            <?php endforeach ?>     
        </listado>
        