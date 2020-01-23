<?php 
include_once 'personas.inc.php';
header('Content-type: text/json');
echo json_encode($personas, JSON_PRETTY_PRINT);
?>

    {
        "persona": [
        <?php foreach($personas as $numero => $per) : ?>
           {
            <?php foreach($per as $nombre => $contenido) : ?>
                "<?= $nombre ?>" : "<?=$contenido?>",
            <?php endforeach?>
            <?php if(count($personas) == $numero+1) : ?>
            }
            <?php else : ?>            
            },
            <?php endif ?>
        <?php endforeach?>
        ]
    }
