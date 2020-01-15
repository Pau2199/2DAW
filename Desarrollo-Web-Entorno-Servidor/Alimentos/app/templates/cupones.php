<?php ob_start() ?>
<?php if (count($params['cupones'])>0): ?>
<table>
    <tr>
        <th>id</th>
        <th>codigo</th>
        <th>valor</th>
        <th>comercion</th>
    </tr>

    <?php foreach ($params['cupones'] as $alimento) : ?>
    <tr>
        <td><?= $alimento['id'] ?></td>
        <td><?= $alimento['codigo'] ?></td>
        <td><?= $alimento['valor'] ?></td>
        <td><?= $alimento['comercio'] ?></td>
    </tr>
    <?php endforeach ?>
</table>
<?php endif ?>

<?php $contenido = ob_get_clean() ?>
<?php include 'layout.php' ?>
