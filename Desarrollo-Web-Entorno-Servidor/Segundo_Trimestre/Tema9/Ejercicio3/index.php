<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php
        $client = new SoapClient('http://localhost.servidor/Ejercicio3/wsdl/simple_service_definition.wsdl');
        echo 'Funciones: <br>'
            ;var_dump($client->__getFunctions());
        echo '<br><br>Tipos: <br>';var_dump($client->__getTypes());
        ?>

        <h1>Formulario</h1>
        <form action="handle_soap_request.php">
            <label for="leer">Leer</label>
            <input type="radio" name="action" value="read">        
            <label for="leer">Insertar Dator</label>
            <input type="radio" onclick="insert()" name="action" value="insert">
            <input type="hidden" name="value" id="oculto" >
            <input type="hidden" name="mode" id="mode" value="no_wsdl">
            <input type="submit" name="enviar" value="enviar">
        </form>
        <script>
            function insert(){
                document.getElementById('oculto').setAttribute('type','text');
            }
        </script>
    </body>
</html>
