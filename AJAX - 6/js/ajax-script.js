$("#btnSearch").click(function () {

    // (1)
    var httpRequest = new XMLHttpRequest();

    // (2)
    httpRequest.onreadystatechange = function () {

        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            $("#output").text(httpRequest.responseText);
        }

    };

    var queryString = encodeURIComponent($("#txtCustomerID").val());

    // (3)
    httpRequest.open('GET', 'search-customer.php?customerId=' + queryString, true);

    // (4)

    // (5)
    httpRequest.send();

});