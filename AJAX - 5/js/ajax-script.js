$("#btnRead").click(function () {

    // (1)
    var httpRequest = new XMLHttpRequest();

    // (2)
    httpRequest.onreadystatechange = function () {

        if (httpRequest.readyState === 4 && httpRequest.status === 200) {

            var customers = JSON.parse(httpRequest.responseText);

            for(var i=0; i< customers.length; i++){
                var html = "<tr>" +
                    "<td>" + customers[i].name + "</td>" +
                    "<td>" + customers[i].gender + "</td>" +
                    "<td>" + customers[i].company + "</td>" +
                    "<td>" + customers[i].phone + "</td>" +
                    "<td>" + customers[i].email + "</td>" +

                    "</tr>";
                $("#tblCustomers tbody").append(html);
            }



        }

    };

    // (3)
    httpRequest.open('GET', 'customer_database.json', true);

    // (4)

    // (5)
    httpRequest.send();

});