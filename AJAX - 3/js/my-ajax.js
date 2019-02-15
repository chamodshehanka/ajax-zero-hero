$("#btnRead").click(function () {

    var httpRequest = new XMLHttpRequest();
    // noinspection JSAnnotator
    httpRequest.onreadystatechange() = function () {
        if (httpRequest === 4 && httpRequest.status === 200){
            var xmlOM = $(httpRequest.responseXML);
            var customers = xmlOM.find("Customers>customer");
            for (var i = 0;i<customers.length ; i++){
                var html = "<tr>"+
                    "<td>"+$(customers[i]).attr("CustomerID")+"</td>"+
                    "<td>"+$(customers[i]).find("CompanyName").text()+"</td>"+
                    "<td>"+$(customers[i]).find("ContactName")+"</td>"
            }
        }
    }

});