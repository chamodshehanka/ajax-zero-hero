<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 11/28/17
 * Time: 10:23 AM
 */

require "DBConnection.php";

$id = $_POST['id'];
$name = $_POST['name'];
$address = $_POST['address'];
$salary = $_POST['salary'];

$connection = (DBConnection::getDBConnection())->getConnection();

if (!$connection){
    echo "Something went wrong with mysql";
}else{
    $resultset = mysqli_query($connection,"INSERT INTO Customer VALUES ('$id','$name','$address','$salary')");
    if (mysqli_affected_rows($connection) > 0){
        echo "Customer has been saved successfully";
    }else{
        echo "Failed to save the customer";
    }
}