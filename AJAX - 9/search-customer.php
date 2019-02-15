<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 11/21/17
 * Time: 12:34 PM
 */
$id = $_GET["customerId"];

$connection = mysqli_connect("127.0.0.1","root","mysql","JDBC","3306");

if (!$connection){
    echo "Something went wrong with database connection";
}else{

    $resultset = mysqli_query($connection, "SELECT * FROM Customer WHERE id='{$id}'");

    if (mysqli_num_rows($resultset)> 0){
        $rowData = mysqli_fetch_assoc($resultset);
        $jsonString = json_encode($rowData);
        echo $jsonString;
    }else{
        echo "Invalid Customer ID";
    }

    mysqli_free_result($resultset);

    mysqli_close($connection);

}