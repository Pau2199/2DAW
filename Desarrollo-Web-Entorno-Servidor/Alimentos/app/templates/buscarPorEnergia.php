<?php ob_start() ?>
<form name="formBusqueda" action="index.php?ctl=buscarAlimentosPorEnergia" method="post">
	<label for="nombre">NºEnergia:</label>
	<input type="text" name="energia" id="energia" value="<?= $params['energia'] ?>">
	<input type="submit" value="buscar">
</form>

<?php if (count($params['resultado'])>0): ?>
	<table>
		<tr>
			<th>nombre</th>
			<th>energia</th>
			<th>Proteina</th>
			<th>Hidratocarbono</th>
			<th>Fibra</th>
			<th>Grasa Total</th>
		</tr>

		<?php foreach ($params['resultado'] as $alimento) : ?>
		<tr>
            <td><?= $alimento['nombre'] ?></td>
			<td><?= $alimento['energia'] ?></td>
			<td><?= $alimento['proteina'] ?></td>
			<td><?= $alimento['hidratocarbono'] ?></td>
			<td><?= $alimento['fibra'] ?></td>
			<td><?= $alimento['grasatotal'] ?></td>
		</tr>
		<?php endforeach ?>
	</table>
<?php endif ?>

<?php $contenido = ob_get_clean() ?>
<?php include 'layout.php' ?>