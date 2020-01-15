<?php
class ModelComercio{
    protected $conexion;

    public function __construct($dbname, $dbuser, $dbpass, $dbhost){

        $opc = [PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'];
        try {
            $mvc_bd_conexion = new PDO('mysql:host='. $dbhost .';dbname='.dbname, $dbuser, $dbpass, $opc);

            $this->conexion = $mvc_bd_conexion;
        } catch (PDOException $e) {
            $error = 'Falló la conexión: ' . $e->getMessage();
            die('No ha sido posible realizar la conexión con la base de datos: '. $mvc_bd_conexion->connect_error);
        }
    }

    private function dameCuponesDB($sql){
        $result = $this->conexion->query($sql);

        $alimentos = [];

        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $alimentos[] = $row;
        }

        return $alimentos;
    }
    public function dameCupones(){
        $sql = 'SELECT * FROM cupones;';
        return $this->dameCuponesDB($sql);
    }
}

?>