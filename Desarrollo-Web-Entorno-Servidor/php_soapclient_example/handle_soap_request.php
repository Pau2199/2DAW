<?php

require_once('simple_soap_client_class.php');

// GET parameter definition.
define('MULTIPLY', 'multiply');
define('DIVIDIR', 'dividir');
define('SUMAR', 'suma');
define('RESTAR', 'resta');
define('VALOR1', 'num1');
define('VALOR2', 'num2');

// Server location definition.
define('LOCATION', 'http://www.dneonline.com/calculator.asmx?WSDL');

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

    $serverLocation = LOCATION;
    try {
        $soapClient = new SimpleSoapClient($serverLocation);
    } catch (Exception $exception) {
        die('Error initializing SOAP client: ' . $exception->getMessage());
    }

    return $soapClient;
}

// Flow starts here.

checkGETParametersOrDie(['action']);

$action = $_GET['action'];

checkGETParametersOrDie([VALOR1, VALOR2]);
$value1 = $_GET['num1'];
$value2 = $_GET['num2'];  
$soapClient = instantiateSoapClient();
switch($action) { 
    case MULTIPLY:

        try {
            $response = $soapClient->multiplicar($value1, $value2);
            echo "Response from SOAP service: $response->MultiplyResult<br>";
        } catch (Exception $exception) {
            die('Error inserting into SOAP service: ' . $exception->getMessage());
        }

        break;

    case SUMAR:

        try {
            $response = $soapClient->suma($value1, $value2);
            echo "Response from SOAP service: $response->AddResult<br>";
        } catch (Exception $exception) {
            die('Error inserting into SOAP service: ' . $exception->getMessage());
        }

        break;
    case DIVIDIR:

        try {
            $response = $soapClient->dividir(intval($value1), intval($value2));
            echo "Response from SOAP service: $response->DivideResult<br>";
        } catch (Exception $exception) {
            die('Error inserting into SOAP service: ' . $exception->getMessage());
        }

        break;
    case RESTAR:

        try {
            $response = $soapClient->resta($value1, $value2);
            echo "Response from SOAP service: $response->SubtractResult<br>";
        } catch (Exception $exception) {
            die('Error inserting into SOAP service: ' . $exception->getMessage());
        }

        break;
    default:
        die('Invalid "action" specified.');
        break;
}