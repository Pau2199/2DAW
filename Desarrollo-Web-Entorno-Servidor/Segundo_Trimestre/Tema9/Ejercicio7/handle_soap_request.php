<?php

require_once('simple_soap_client_class.php');

// Server location definition.
define('LOCATION', 'http://localhost.servidor/Ejercicio6/php_soapclient_example/no_wsdl/server_endpoint.php');

// Function definitions.

/**
 * Checks if the given parameters are set. If one of the specified parameters is not set,
 * die() is called.
 *
 * @param $parameters The parameters to check.
 */
function checkGETParametersOrDie($parameters) {
    foreach ($parameters as $parameter) {
        isset($_GET[$parameter]) || die("Please, provide '$parameter' parameter.");
    }
}

/**
 * Instantiates the SOAP client, setting the server location, depending on the mode.
 * If any error occurs, the page will die.
 *
 * @param $mode The SOAP mode, 'wsdl' or 'no_wsdl'.
 * @return SoapClient class instance.
 */
function instantiateSoapClient() {
    try {
        $soapClient = new SimpleSoapClient(LOCATION);
    } catch (Exception $exception) {
        die('Error initializing SOAP client: ' . $exception->getMessage());
    }

    return $soapClient;
}

// Flow starts here.

checkGETParametersOrDie(['action']);

$action = $_GET['action'];

checkGETParametersOrDie(['num1', 'num2']);
$value1 = $_GET['num1'];
$value2 = $_GET['num2'];  
$soapClient = instantiateSoapClient();

if(method_exists($soapClient , $action)){
    try {
        echo 'Autor: Pau LLorens Martinez: <br>';
        echo 'El resultado de la operacion  (' . $action . ') es: ' . call_user_func([$soapClient , $action], $value1, $value2);
    } catch (Exception $exception) {
        die('Error en el Soap' . $exception->getMessage());
    }
}