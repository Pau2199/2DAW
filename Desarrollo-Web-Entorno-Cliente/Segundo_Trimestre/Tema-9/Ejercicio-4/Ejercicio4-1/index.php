<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Documento sin título</title>
<script src="js/ejercicio4-1.js"></script>
<style>
	body{
		width: 80%;
		margin: 0 auto 3em;
	} 
	#formulario .colIzq {
		display: inline-block;
		width: 10em;
		height: 1.4em;
	}
	#formulario textarea {
		height: 10em;
		width: 100%;
	}
	#botones {
		text-align: center;
	}
	.boton {
		margin-right: .5em;
		padding: 1em 0;
		width: 8em;
		background-color: gainsboro;
		border-radius: 1em;
		font-size: 1em;
	}
	.boton:hover {
		box-shadow: .3em .3em darkgray;
		font-weight: bolder;
		cursor: pointer;
	}
	section {
		margin: 0;
	}
	.comentario {
		border-radius: 1em;
		border: solid .2em rgba(255,143,0,.65);
		margin-top: .5em;
	}
	.comentario .datos {
		background-color: rgba(255,143,0,.65);
		margin-bottom: .8em;
		padding: .5em 0;
		border-radius: .7em .7em 0 0;
	}
	.datos .autor, .datos .fecha {
		display: inline-block;
		margin: 0;
		padding: 0;
	}
	.datos .autor {
		width: 47%;
		padding-left: 1%;
	}
	.datos .fecha {
		text-align: right;
		width: 47%;
		padding-right: 1%;
	}
	.comentario .texto {
		padding: 0 1em 1em;;
	}
	.comentario a {
		text-decoration: none;
		color: rgba(80,80,80,1.00);
	}
	.comentario a:hover {
		font-weight: bolder;
	}
	#error {
		margin: 1em 0;
		padding: 2em;
		border-radius: 1em;
		background-color: rgba(226,118,119,1.00);
		font-weight: bold;
		font-size: 1.3em;
		text-align: center;
		display: none;
	}
	#noticia {
		margin-bottom: 1.5em;
		padding: 1em;
		background-color: rgba(255,143,0,.65);
		border-radius: 0 0 1em 1em;
	}
	#noticia h1, #comentarios h1 {
		margin-top: 0;
		font-size: 2em;
	}
</style>
</head>

<body>

<section>
	<article id="noticia">
		<h1>Lorem ipsum</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ea voluptate iusto beatae minima repellendus laborum officiis nam maiores, fuga sequi consequuntur tenetur, at, reiciendis repudiandae nesciunt voluptatem distinctio veritatis.</p>
		<p>Eaque, itaque omnis id assumenda, ut eius soluta quaerat iure in aliquam neque recusandae placeat impedit ullam dolor repellendus optio odio, mollitia corporis aspernatur delectus odit deleniti facilis nostrum alias.</p>
		<p>Pariatur accusantium recusandae, eos obcaecati animi quidem saepe eligendi atque maiores, dignissimos aliquid iusto officiis assumenda eveniet id minima dolor aut ipsam modi, consequatur doloremque deleniti molestias? Doloremque, voluptas, quia.</p>
		<p>Cum dolores, illum enim quam magni nesciunt! Harum, consequatur dolore architecto, ea asperiores fugit, exercitationem numquam facere cupiditate placeat dolores minima doloremque quibusdam. Delectus porro numquam dolorum sunt dolore doloremque!</p>
	</article>

	<article id="comentarios">
		<h1>Comentarios</h1>
	<?php
		$dsn = 'mysql:dbname=comentarios;host=127.0.0.1;charset=UTF8';
		$usuario = 'comentarios';
		$contraseña = 'comentarios';

		try {
			$conexion = new PDO($dsn, $usuario, $contraseña);
		} catch (PDOException $e) {
			echo 'Falló la conexión: ' . $e->getMessage();
		}

		$sql = 'SELECT * FROM comentarios;';
		$comentarios = $conexion->query($sql);
	
		foreach ($comentarios as $row) {
			$meses = array('', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre');
			$fecha = explode(' ', $row['fecha']);
			$hora = $fecha[1];
			$fecha = $fecha[0];
			$fecha = explode('-', $fecha);
			$fecha = $fecha[2] .' de '. $meses[$fecha[1]] .' de '. $fecha[0];
			echo '<div class="comentario">';
				echo '<div class="datos">';
					echo '<span class="autor"><a href="'. $row['email'] .'">'. $row['nombre'] .'</a></span>';
					echo '<span class="fecha">'. $fecha .' - '. $hora .'</span>';
				echo '</div>';
				echo '<div class="texto">';
					echo $row['comentario'];
				echo '</div>';
			echo '</div>';
			
			
		}
	?>
	</article>
</section>


<h2>Comenta la noticia</h2>
<form id="formulario" method="post">
	<label for="nombre" class="colIzq">Nombre</label>
	<input type="text" name="nombre" id="nombre" value="pau">
	<br>
	<label for="mail" class="colIzq">E-mail</label>
	<input type="text" name="mail" id="mail" value="pau@gmail.com">
	<br>
	<label for="comentario">Comentario</label>
	<br>
	<textarea name="comentario" id="comentario">asasas</textarea>
	
	<div id="botones">
		<input type="submit" value="Comentar" class="boton" id="comentar">
		<input type="reset" value="Resetear" class="boton">
	</div>
</form>
<div id="error">Ha ocurrido un error guardando el comentario en la base de datos.</div>

</body>
</html>
