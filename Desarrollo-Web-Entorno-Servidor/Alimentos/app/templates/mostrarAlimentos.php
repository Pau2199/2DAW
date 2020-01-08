<?php ob_start() ?>
<table>
	<tr>
		<th>alimento (por 100g)</th>
		<th>energia (Kcal)</th>
		<th>grasa (g)</th>
	</tr>
	<?php foreach ($params['alimentos'] as $alimento) : ?>
		<tr>
			<td><a href="index.php?ctl=ver&id=<?= $alimento['id']?>"><?= $alimento['nombre'] ?></a></td>
			<td><?= $alimento['energia']?></td>
			<td><?= $alimento['grasatotal']?></td>
		</tr>
	<?php endforeach ?>
</table>

<?php $contenido = ob_get_clean() ?>
<?php include 'layout.php' ?>
