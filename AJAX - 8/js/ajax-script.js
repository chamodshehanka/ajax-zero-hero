$("#btnSend").click(function(){

    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){

        if (http.readyState === 4 && http.status === 200){

            alert(http.responseText);

        }

    };

    http.open('POST','save-customer.php',true);

    http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    //var queryString = "customerid=" + $("#txtCustomerID").val() + "&customername=" + $("#txtCustomerName").val();
    var queryString = $("#frmCustomer").serialize();

    http.send(queryString);

});