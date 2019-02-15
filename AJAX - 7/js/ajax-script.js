$("#cmbCustomerId").change(function(){

    var customerID = $(this).val();

    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){

        if (http.readyState === 4 && http.status === 200){

            $("#output").text("Name : " + http.responseText);

        }

    };

    http.open('GET','search-customer.php?customerId=' + customerID,true);

    http.send();

});

$("#cmbCustomerId").change();