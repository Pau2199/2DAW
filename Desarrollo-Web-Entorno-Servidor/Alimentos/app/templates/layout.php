  <!doctype html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<title>Desarrollo web en entorno servidor - tema 10 - MVC</title>
	
	<link rel="stylesheet" href="<?= '/css/'.Config::$mvc_vis_css ?>"/>
</head>
<body>
	<header>
		<h1>Información de alimentos</h1>
	</header>

	<nav>
		<ul>
			<li><a href="/">inicio</a></li>
			<li><a href="/listar">ver alimentos</a></li>
			<li><a href="/insertar">insertar alimento</a></li>
			<li><a href="/buscar">buscar por nombre</a></li>
			<li><a href="/buscarAlimentosPorEnergia">buscar por energía</a></li>
			<li><a href="/buscarAlimentosCombinada">búsqueda combinada</a></li>
			<li><a href="/cupones">Cupones</a></li>
		</ul>
	 </nav>

	<main>
		<?= $contenido ?>
	</main>

	<footer id="pie"> - Desarrollo Web en Entorno Servidor -</footer>
</body>
</html>
