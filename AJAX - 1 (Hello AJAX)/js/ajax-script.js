$("#btnRead").click(function(){

    // (1)
    var httpRequest;

    httpRequest = new XMLHttpRequest();

    // (2)

    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === 4 && httpRequest.status === 200){
            $("#output").text(httpRequest.responseText);
        }
    };

    // (3)
    httpRequest.open('GET',"Some-dummy-text.txt",true);

    // (4)

    // (5)
    httpRequest.send();

});