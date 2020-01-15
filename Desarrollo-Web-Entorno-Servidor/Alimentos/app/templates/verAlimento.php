<?php ob_start() ?>
<h1><?= strtoupper($params['nombre']) ?></h1>

<table>
	<tr>
		<td>Energia</td>
		<td><?= $params['energia'] ?></td>
	</tr>

	<tr>
		<td>Proteina</td>
		<td><?= $params['proteina']?></td>
	</tr>

	<tr>
		<td>Hidratos de Carbono</td>
		<td><?= $params['hidratocarbono']?></td>
	</tr>

	<tr>
		<td>Fibra</td>
		<td><?= $params['fibra']?></td>
	</tr>

	<tr>
		<td>Grasa total</td>
		<td><?= $params['grasatotal']?></td>
	</tr>
</table>

<?php $contenido = ob_get_clean() ?>
<?php include 'layout.php' ?>
