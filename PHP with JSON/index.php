<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 11/28/17
 * Time: 11:14 AM
 */

$myArray = array("institute" => array(
        "name" => "IJSE",
        "age" => 10), "branch" => "Panadura");

$jsonString =  json_encode($myArray);

$copiedArray = json_decode($jsonString, true);

var_dump($copiedArray);