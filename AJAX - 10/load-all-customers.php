<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 11/28/17
 * Time: 11:49 AM
 */

$connection = mysqli_connect("127.0.0.1","root","mysql","JDBC","3306");

if (!$connection){
    echo "Something went wrong with database connection";
}else {

    $resultset = mysqli_query($connection, "SELECT * FROM Customer");

    if (mysqli_num_rows($resultset) > 0){
        $array = mysqli_fetch_all($resultset,MYSQLI_ASSOC);
        echo json_encode($array);
    }

}