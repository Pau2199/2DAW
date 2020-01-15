<?php ob_start() ?>
<?php if(isset($params['mensaje'])) : ?>
	<div class="mensaje"><?= $params['mensaje'] ?>/div>
<?php endif ?>

<form name="formInsertar" action="index.php?ctl=insertar" method="post">
	<label for="nombre">Nombre</label>
	<input type="text" name="nombre" id="nombre" value="<?= $params['nombre'] ?>">
	
	<label for="energia">Energia (Kcal)</label>
	<input type="text" name="energia" id="energia" value="<?= $params['energia'] ?>">
	
	<label for="proteina">Proteina (g)</label>
	<input type="text" name="proteina" id="proteina" value="<?= $params['proteina'] ?>">
	
	<label for="hc">H. de carbono (g)</label>
	<input type="text" name="hc" id="hc" value="<?= $params['hc'] ?>">

	<label for="fibra">Fibra (g)</label>
	<input type="text" name="fibra" id="fibra" value="<?= $params['fibra'] ?>">

	<label for="grasa">Grasa total (g)</label>
	<input type="text" name="grasa" id="grasa" value="<?= $params['grasa'] ?>">

	<input type="submit" value="insertar" name="insertar">
	<div>* Los valores deben referirse a 100 g del alimento</div>
</form>

<?php $contenido = ob_get_clean() ?>
<?php include 'layout.php' ?>
