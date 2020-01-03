<?php
setcookie('idioma', substr($_SERVER["HTTP_ACCEPT_LANGUAGE"],0,2), time()+3600);
$idioma = substr($_SERVER["HTTP_ACCEPT_LANGUAGE"],0,2); 
if(isset($_POST['guardarIdioma'])){
    setcookie('idioma', $_POST['idiomas'], time()+3600);
    $idioma = $_POST['idiomas'];
}

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
       <?php echo $idioma ?>
        <form action="ejercicio2.php" method="post">
            <select name="idiomas">
                <option selected="<?= $idioma == 'es' ? 'true' : 'false' ?>" value="es">Catellano</option>
                <option selected="<?= $idioma == 'en' ? 'true' : 'false' ?>" value="en">Ingles</option>
                <option selected="<?= $idioma == 'val' ? 'true' : 'false' ?>" value="val">Valenciano</option>
            </select>
            <input type="submit" value="Guardar Idioma" name="guardarIdioma">
        </form>
        <p>Marc Márquez Alentà (Cervera, Lérida, 17 de febrero de 1993) es un piloto de motociclismo español que, actualmente, corre en MotoGP.1 Ha ganado ocho títulos del Campeonato del Mundo de Motociclismo en tres categorías diferentes: 125cc (2010), Moto2 (2012) y seis veces en MotoGP (2013, 2014, 2016, 2017, 2018 y 2019).2 Actualmente es piloto del equipo Repsol Honda,3 donde ha acumulado 50 victorias y 78 podios en 105 carreras disputadas.

            En su primera temporada en la máxima categoría, en 2013, se hizo con el Campeonato del Mundo de Motociclismo, convirtiéndose en el piloto más joven en ganar un campeonato de la máxima categoría de este deporte (MotoGP), superando así el récord de Freddie Spencer. Es, además, el piloto más joven de la historia en ser bi, tri, tetra, penta y hexacampeón de la categoría reina del motociclismo.

            Tiene un hermano tres años menor, Álex Márquez (n. 1996), que, actualmente, corre en la categoría de Moto2 y ha obtenido dos títulos del Campeonato del Mundo de Motociclismo. Marc y Álex son los únicos hermanos que han conseguido un Campeonato del Mundo de Motociclismo y además en la misma temporada (en 2014 y en 2019), junto con haber sido los primeros hermanos en vencer en un Gran Premio en el mismo día (el 15 de junio de 2014 en el Gran Premio de Cataluña de Motociclismo, en el circuito de Montmeló, España y los que más veces han coincidido en el podio de un Gran Premio.)</p>
        
    </body>
</html>