<?php
/**
 * Created by IntelliJ IDEA.
 * User: ranjith-suranga
 * Date: 11/28/17
 * Time: 12:11 PM
 */

$payload = file_get_contents("php://input");
$myArray =  json_decode($payload, true);

var_dump($myArray);