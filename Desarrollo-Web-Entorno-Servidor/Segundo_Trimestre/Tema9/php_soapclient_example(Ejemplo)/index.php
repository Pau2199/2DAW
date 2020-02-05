<?php $client= new SoapClient('http://localhost.soap/wsdl/simple_service_definition.wsdl'); 
echo 'Funciones: <br>';
var_dump($client->__getFunctions());
echo '<br><br>Tipos: <br>';
var_dump($client->__getTypes());
?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <form action="handle_soap_request.php">
            <label for="insertar">Insertar Datos</label>
            <input onClick="insertarDatos()" type="radio" name="action" id="insertar" value="insert">
            <input type="hidden" name="value" id="dato">
            <label for="leer">Leer Datos</label>
            <input type="radio" name="action" id="leer" value="read">
            <input type="hidden" name="mode" id="mode" value="no_wsdl">
            <input type="submit" value="enviar" name="enviar">   
        </form>
        <script>
            function insertarDatos(){
                document.getElementById('dato').setAttribute('type', 'text');   
            }
        </script>
    </body>
</html>