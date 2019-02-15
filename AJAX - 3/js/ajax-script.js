$("#btnRead").click(function () {

    // (1)
    var httpRequest = new XMLHttpRequest();

    // (2)
    httpRequest.onreadystatechange = function () {

        if (httpRequest.readyState === 4 && httpRequest.status === 200) {

            var xmlOM = $(httpRequest.responseXML);

            var customers = xmlOM.find("Customers>Customer");

            for(var i=0; i< customers.length; i++){
                var html = "<tr>" +
                    "<td>" + $(customers[i]).attr("CustomerID") + "</td>" +
                    "<td>" + $(customers[i]).find("CompanyName").text() + "</td>" +
                    "<td>" + $(customers[i]).find("ContactName").text() + "</td>" +
                    "<td>" + $(customers[i]).find("Phone").text() + "</td>" +
                    "<td>" + $(customers[i]).find("FullAddress Address").text() + "</td>" +
                    "</tr>";
                $("#tblCustomers tbody").append(html);
            }



        }

    };

    // (3)
    httpRequest.open('GET', 'customer_database.xml', true);

    // (4)

    // (5)
    httpRequest.send();

});