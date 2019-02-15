$("#btnRead").click(function(){

   // (1)
   var httpRequest = new XMLHttpRequest();

   // (2)
    httpRequest.onreadystatechange = function(){

        if (httpRequest.readyState === 4 && httpRequest.status === 200){

            var xmlOM = $(httpRequest.responseXML);

            var html = "<strong>" + xmlOM.find("name").text()  +"</strong><br>" +
                "<dl>";

            var branches = (xmlOM.find("branches branch"));

            for(var index=0; index<branches.length; index++){
                var branch = branches[index];
                html += "<dt>" + $(branch).text() + "</dt>"
                html += "<dd>" + $(branch).attr("tel") + "</dd>";
            }

            html += "</dl>";

            $("#output").html(html);

        }

    };

    // (3)
    httpRequest.open('GET','database.xml',true);

    // (4)

    // (5)
    httpRequest.send();

});