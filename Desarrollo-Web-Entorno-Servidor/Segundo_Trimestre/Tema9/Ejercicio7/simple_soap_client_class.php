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

        $options = array(
            'location' => $serverLocation,
            'uri' => $serverLocation
        );

        $this->client = new SoapClient(NULL, $options);
    }

    /**
     * Multiplica dos numeros.
     *
     * @param $num1 , $num2 son los numeros que haran la operacion.
     * @return devuelve la operacion realizada.
     */
    public function multiplicar($num1 , $num2) {
        $response = $this->client->multiplicar($num1 , $num2);
        return $response;
    }

    /**
     * Resta dos numeros.
     *
     * @param $num1 , $num2 son los numeros que haran la operacion.
     * @return devuelve la operacion realizada.
     */
    public function resta($num1 , $num2) {
        $response = $this->client->resta($num1 , $num2);
        return $response;
    }

    /**
     * Suma dos numeros.
     *
     * @param $num1 , $num2 son los numeros que haran la operacion.
     * @return devuelve la operacion realizada.
     */
    public function suma($num1 , $num2) {
        //die($num1.' '.$num2);
        $response = $this->client->suma($num1 , $num2);
        return $response;
    }

    /**
     * Divide dos numeros.
     *
     * @param $num1 , $num2 son los numeros que haran la operacion.
     * @return devuelve la operacion realizada.
     */
    public function dividir($num1 , $num2) {
        $response = $this->client->dividir($num1 , $num2);
        return $response;
    }
    public function raiz_cuadrada($num1) {
        $response = $this->client->raiz_cuadrada($num1);
        return $response;
    }

    public function seno($num1) {
        $response = $this->client->seno($num1);
        return $response;
    }
    public function coseno($num1) {
        $response = $this->client->coseno($num1);
        return $response;
    }
    public function tangente($num1) {
        $response = $this->client->tangente($num1);
        return $response;
    }
}
