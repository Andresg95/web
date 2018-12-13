var http = require('http');
var visitas = 0;

var server = http.createServer(function(req,res){

    visitas+=1;
    res.writeHead(200, {'Content-Type' :'text/html'});
    res.write('Mensaje Recibido!!<br>');
    res.write(`Visitante Numero: ${visitas}`);

    res.end();
    console.log(visitas);

});

server.listen(8080);
console.log("Escuchamdo en el puerto 8080");