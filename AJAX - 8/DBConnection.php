<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 11/28/17
 * Time: 10:54 AM
 */

class DBConnection
{

    private static $dbConnection;
    private $connection;

    private function __construct()
    {
        $this->connection = mysqli_connect("127.0.0.1","root","mysql","JDBC","3306");
    }

    public static function getDBConnection(){
        if (!self::$dbConnection){
            self::$dbConnection = new DBConnection();
        }
        return self::$dbConnection;
    }

    public function getConnection(){
        return $this->connection;
    }
}