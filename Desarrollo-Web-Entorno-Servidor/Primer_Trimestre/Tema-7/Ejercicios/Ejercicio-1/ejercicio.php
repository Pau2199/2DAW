<?php
session_start();

if(isset($_POST['guardarIdioma'])){
    $_SESSION['idioma'] = $_POST['idiomas'];
    header('Location: ejercicio.php');
}else{
    if(!isset($_SESSION['idioma'])){
        $_SESSION['idioma'] = substr($_SERVER["HTTP_ACCEPT_LANGUAGE"],0,2);

    }
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <form action="ejercicio.php" method="post">
            <select name="idiomas">
                <option <?= $_SESSION['idioma'] == 'es' ? 'selected' : ''?> value="es">Catellano</option>
                <option <?= $_SESSION['idioma'] == 'en' ? 'selected' : ''?> value="en">Ingles</option>
                <option <?= $_SESSION['idioma'] == 'val' ? 'selected' : ''?> value="val">Valenciano</option>
            </select>
            <input type="submit" value="Guardar Idioma" name="guardarIdioma">
        </form>
        <p>Marc Márquez Alentà (Cervera, Lérida, 17 de febrero de 1993) es un piloto de motociclismo español que, actualmente, corre en MotoGP.1 Ha ganado ocho títulos del Campeonato del Mundo de Motociclismo en tres categorías diferentes: 125cc (2010), Moto2 (2012) y seis veces en MotoGP (2013, 2014, 2016, 2017, 2018 y 2019).2 Actualmente es piloto del equipo Repsol Honda,3 donde ha acumulado 50 victorias y 78 podios en 105 carreras disputadas.</p>

            <p>En su primera temporada en la máxima categoría, en 2013, se hizo con el Campeonato del Mundo de Motociclismo, convirtiéndose en el piloto más joven en ganar un campeonato de la máxima categoría de este deporte (MotoGP), superando así el récord de Freddie Spencer. Es, además, el piloto más joven de la historia en ser bi, tri, tetra, penta y hexacampeón de la categoría reina del motociclismo.</p>

            <p>Tiene un hermano tres años menor, Álex Márquez (n. 1996), que, actualmente, corre en la categoría de Moto2 y ha obtenido dos títulos del Campeonato del Mundo de Motociclismo. Marc y Álex son los únicos hermanos que han conseguido un Campeonato del Mundo de Motociclismo y además en la misma temporada (en 2014 y en 2019), junto con haber sido los primeros hermanos en vencer en un Gran Premio en el mismo día (el 15 de junio de 2014 en el Gran Premio de Cataluña de Motociclismo, en el circuito de Montmeló, España y los que más veces han coincidido en el podio de un Gran Premio.)</p>

    </body>
</html>