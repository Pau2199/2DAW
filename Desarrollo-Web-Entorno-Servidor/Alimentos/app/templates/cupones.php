<?php ob_start() ?>
<?php if (count($params['cupones'])>0): ?>
<table>
    <tr>
        <th>id</th>
        <th>codigo</th>
        <th>valor</th>
        <th>comercion</th>
    </tr>

    <?php foreach ($params['cupones'] as $cupon) : ?>
    <tr>
        <td><?= $cupon['id'] ?></td>
        <td><?= $cupon['codigo'] ?></td>
        <td><?= $cupon['valor'] ?></td>
        <td><?= $cupon['comercion'] ?></td>
    </tr>
    <?php endforeach ?>
</table>
<?php endif ?>

<?php $contenido = ob_get_clean() ?>
<?php include 'layout.php' ?>
