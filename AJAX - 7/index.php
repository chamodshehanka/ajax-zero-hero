<?php

$connection = mysqli_connect("127.0.0.1","root","mysql","JDBC","3306");

if (!$connection){
    echo "Something went wrong with the connection";
}else{
    $resultset = mysqli_query($connection,"SELECT * FROM Customer");
}

?>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AJAX - 7</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <style>
        main{
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <main class="container">
        <h1>AJAX - 7</h1>
        <div class="form-group">
            <label for="cmbCustomerId">Customer ID</label>
            <select id="cmbCustomerId" class="form-control">
                <?php


                    if (mysqli_num_rows($resultset) > 0){

                        while($rowData = mysqli_fetch_row($resultset)){
                            echo "<option value=\"{$rowData[0]}\">{$rowData[0]}</option>";
                        }

                    }
                ?>
            </select>
        </div>
        <div id="output"></div>
    </main>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/ajax-script.js"></script>
</body>
</html>