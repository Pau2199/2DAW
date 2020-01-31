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
            <label for="num1">Primer Numero: </label>
            <input type="number" name="num1" id="num1">
            <label for="num2">Segundo Numero: </label>
            <input type="number" name="num2" id="num2">
            <select name="action" id="opcion">
                <option value="dividir">Dividir</option>
                <option value="resta">Resta</option>
                <option value="suma">Suma</option>
                <option value="multiply">Multiplicar</option>
            </select>
            <input type="submit">
        </form>
        <script>
            function insertarDatos(){
                document.getElementById('dato').setAttribute('type', 'text');   
            }
        </script>
    </body>
</html>