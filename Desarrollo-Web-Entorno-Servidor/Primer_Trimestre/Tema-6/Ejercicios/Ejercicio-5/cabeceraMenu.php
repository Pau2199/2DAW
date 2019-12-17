   <div class="jumbotron hero">
    <div class="col">
        <h1>Tienda de Moviles Paüito</h1>
        <p>La mejor tienda </p>
    </div>
</div> 
<nav class="navbar navbar-light bg-light">
    <div>
        <a class="navbar-brand" href="index.php">Inicio</a>
        <a class="navbar-brand" href="registro.php">Registro</a>
        <?php if(isset($_SESSION['usuario']) && $_SESSION['rol'] == 'admin') : ?>
        <a class="navbar-brand" href="datos.php">Datos de la base de Datos</a>
        <?php endif ?>

    </div>
    <?php if(isset($_SESSION['usuario'])) : ?>
    <a class="navbar-brand" href="cerrarSesion.php">Cerrar Sesion</a>
    <?php else : ?>
    <a class="navbar-brand" href="login.php">Login</a>
    <?php endif ?>

</nav>
