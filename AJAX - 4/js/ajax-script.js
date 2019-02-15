$("#btnRead").click(function(){

    // (1)
    var httpRequest = new XMLHttpRequest();

    // (2)
    httpRequest.onReadyStateChange = function(){
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var myObj = JSON.parse(httpRequest.responseText);
            console.log(myObj);
            var html ='';

            for(var i=0;i<myObj.length;i++){

                html += "<p>Name :" + myObj[i].name + "</p>" +
                    "<p>Branch : " + myObj[i].branch + "</p><br>";

            }

            $("#output").html(html);

        }
    };

    // (3)
    httpRequest.open('GET','database.json',true);

    // (4)

    // (5)
    httpRequest.send();

});