<?php

/**
 * Methods for dealing with SOAP service.
 */
class SimpleSoapClient {

    private $client;

    /**
     * SimpleSoapClient class constructor.
     *
     * @param $soapMode The SOAP mode, WSDL or non-WSDL.
     * @param $serverLocation The location of server.
     */
    public function __construct($serverLocation) {
        $this->client = new SoapClient($serverLocation);
    }

    /**
     * Multiplica dos numeros.
     *
     * @param $num1 , $num2 son los numeros que haran la operacion.
     * @return devuelve la operacion realizada.
     */
    public function multiplicar($num1 , $num2) {
        $response = $this->client->Multiply($num1 , $num2);
        return $response;
    }

    /**
     * Resta dos numeros.
     *
     * @param $num1 , $num2 son los numeros que haran la operacion.
     * @return devuelve la operacion realizada.
     */
    public function resta($num1 , $num2) {
        $response = $this->client->Subtract($num1 , $num2);
        return $response;
    }

    /**
     * Suma dos numeros.
     *
     * @param $num1 , $num2 son los numeros que haran la operacion.
     * @return devuelve la operacion realizada.
     */
    public function suma($num1 , $num2) {
        $response = $this->client->Add($num1 , $num2);
        return $response;
    }

    /**
     * Divide dos numeros.
     *
     * @param $num1 , $num2 son los numeros que haran la operacion.
     * @return devuelve la operacion realizada.
     */

    public function dividir($num1 , $num2) {
        $response = $this->client->Divide($num1 , $num2);
        return $response;
    }
}
