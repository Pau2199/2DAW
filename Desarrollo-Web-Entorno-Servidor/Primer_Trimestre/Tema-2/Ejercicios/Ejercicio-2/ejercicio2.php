<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php
        require_once 'cabecera_inc.php';
        echo '<article>
                <img src="mifoto.jpg" alt="Mi Foto" height="75" width="75">	
                <p>Hola me llamo pau tengo 20 años y hace ya dos años decidí hacer la prueba de acceso a 
                    grado superior y meterme en el ciclo de DAW , ya que es un mundo que me llama bastante.
                    En un futuro me gustaria poder trabajar como desarrollador. Ademas al año que viene quizas haga el segundo curso de DAM</p><br>
            </article>
            <article>
                <form action="mailto:pau9990@gmailcom" method="POST">
                    <fieldset>
                        <legend>Datos Personales</legend>
                        Nombre <input type="text" name="nombre"><br>
                        Primer Apellido <input type="text" name="primerAp">
                        Segundo Apellido <input type="text" name="segundoAp"><br>
                        Fecha de Nacimiento <input type="date" name="fecha">
                    </fieldset>
                    <fieldset>
                        <legend>Datos de Contacto</legend>
                        Número de Telefono <input type="text" name="telefono">
                        Correo Electronico <input type="email" name="correo">
                    </fieldset>
                    <input type="submit" value="Enviar">
                    <input type="reset" value="Resetear">
                </form>
            </article>';
        ?>
    </body>
</html>