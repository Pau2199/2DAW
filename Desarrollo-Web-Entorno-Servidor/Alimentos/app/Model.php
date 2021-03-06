<?php
class Model {
    protected $conexion;

    public function __construct($dbname, $dbuser, $dbpass, $dbhost){

        $opc = [PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'];
        try {
            $mvc_bd_conexion = new PDO('mysql:host='. $dbhost .';dbname=alimentos', 'root', '', $opc);

            $this->conexion = $mvc_bd_conexion;
        } catch (PDOException $e) {
            $error = 'Fall� la conexi�n: ' . $e->getMessage();
            die('No ha sido posible realizar la conexi�n con la base de datos: '. $mvc_bd_conexion->connect_error);
        }
    }

    private function dameAlimentosDB($sql){
        $result = $this->conexion->query($sql);

        $alimentos = [];

        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $alimentos[] = $row;
        }

        return $alimentos;
    }

    public function dameAlimentos(){
        $sql = 'SELECT * FROM alimentos ORDER BY energia DESC;';
        return $this->dameAlimentosDB($sql);
    }

    public function buscarAlimentosPorNombre($nombre){
        $nombre = htmlspecialchars($nombre);
        $sql = 'SELECT * FROM alimentos WHERE nombre LIKE "'. $nombre .'" ORDER BY energia DESC;';

        return $this->dameAlimentosDB($sql);
    }

    public function dameAlimento($id){
        $id = htmlspecialchars($id);
        $sql = 'SELECT * FROM alimentos WHERE id='. $id .';';

        return $this->dameAlimentosDB($sql)[0];
    }

    public function insertarAlimento($n, $e, $p, $hc, $f, $g){
        $n = htmlspecialchars($n);
        $e = htmlspecialchars($e);
        $p = htmlspecialchars($p);
        $hc = htmlspecialchars($hc);
        $f = htmlspecialchars($f);
        $g = htmlspecialchars($g);

        $sql = 'INSERT INTO alimentos (nombre, energia, proteina, hidratocarbono, fibra, grasatotal) VALUES ("'. $n .'",'. $e .','. $p .','. $hc .','. $f .','. $g .');';

        $result = $this->conexion->query($sql);
        return $result;
    }

    public function validarDatos($n, $e, $p, $hc, $f, $g) {
        return (is_string($n) & is_numeric($e) & is_numeric($p) & is_numeric($hc) & is_numeric($f) & is_numeric($g));
    }

    public function buscarPorEnergia($energia){
        $sql = 'SELECT * FROM alimentos WHERE energia=' . $energia . ';';    
        return $this->dameAlimentosDB($sql);
    }

    public function busquedaCombinada($nombre , $energia){
        $nombre = htmlspecialchars($nombre);
        $energia = htmlspecialchars($energia);
        $nombre = $nombre != '' ? $nombre: '%';
        $energia = $energia != '' ? $energia: '%';
        $sql = 'SELECT * FROM alimentos WHERE energia LIKE"'. $energia . '" AND nombre LIKE "'. $nombre .'";';
        //die($sql);
        return $this->dameAlimentosDB($sql);

    }
}
?>
