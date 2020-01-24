<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Datos alumnos</title>
</head>
<body>

	<?php
		$conexion = new PDO('mysql:host=localhost;dbname=jquery;charset=UTF8', 'jquery', 'jquery');
		//$sql = 'SELECT al.id as alid, al.nombre as alnom, al.apellido1, al.apellido2, ac.id as acid, ac.nombre as acid, nota FROM notas n, alumnos al, actividades ac WHERE n.alumno=al.id AND n.actividad=ac.id ORDER BY alumno, actividad ASC;';
	
		$sql = 'SELECT id, nombre, apellido1, apellido2 FROM alumnos;';
		$alumnos = $conexion->query($sql);
	?>

	<table id='notas'>
	<?php
		echo '<tr>';
			echo '<td>Alumnos</td>';
			$sql = 'SELECT nombre FROM actividades;';
			$actividades = $conexion->query($sql);
			while ($actividad = $actividades->fetchObject()) {
				echo '<td>'. $actividad->nombre .'</td>';
			}
		echo '</tr>';
		
		while ($alumno = $alumnos->fetchObject()) {
			echo '<tr id="al'. $alumno->id .'">';
				echo '<td>'. $alumno->nombre .' '. $alumno->apellido1 .' '. $alumno->apellido2 .'</td>';
				$sql = 'SELECT nota, actividad FROM notas WHERE alumno='. $alumno->id .';';
				$notas = $conexion->query($sql);
				while ($nota = $notas->fetchObject()) {
					echo '<td class="act'. $nota->actividad .'">'. $nota->nota .'</td>';
				}
			echo '</tr>';
		}
	?>
	</table>
	
	<br><br>
	<a href="index.php">volver</a>
</body>
</html>