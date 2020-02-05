<?php

require_once('../simple_soap_server_class.php');

$server = new SoapServer('http://localhost.servidor/wsdl/simple_service_definition.wsdl');
$server->setClass('SimpleSoapServer');
$server->handle();
