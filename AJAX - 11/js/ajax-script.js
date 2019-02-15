$("#btnSend").click(function(){

    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){

        if (http.readyState === 4 && http.status === 200){

            console.log(http.responseText);

        }

    };

    http.open('POST','save-customer.php',true);

    http.setRequestHeader("Content-Type","application/json");

    //var queryString = "customerid=" + $("#txtCustomerID").val() + "&customername=" + $("#txtCustomerName").val();
    var jsonString = $("#frmCustomer").serializeArray();
    console.log(jsonString);
    http.send(JSON.stringify(jsonString));

});