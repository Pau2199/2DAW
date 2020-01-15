<?php ob_start() ?>
<h1>Inicio</h1>
<time>Fecha: <?= $params['fecha'] ?></time>
<p><?= $params['mensaje'] ?></p>

<?php $contenido = ob_get_clean() ?>
<?php include 'layout.php' ?>
