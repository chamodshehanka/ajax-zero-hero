$("#btnLoad").click(function(){

    var customerID = $(this).val();

    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){

        if (http.readyState === 4 && http.status === 200){

            var customers = JSON.parse(http.responseText);

            for(var index in customers){

                var customer = customers[index];

                var html = "<tr>" +
                    "<td>" + customer.id + "</td>" +
                    "<td>" + customer.name + "</td>" +
                    "<td>" + customer.address + "</td>" +
                    "<td>" + customer.salary + "</td>" +
                    "</tr>"

                $("#tblCustomers tbody").append(html);

            }

        }

    };

    http.open('GET','load-all-customers.php',true);

    http.send();

});