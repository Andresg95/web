var http = require('http');
var {URL} = require('url');

var server = http.createServer(function(req,res){

    let body=[];

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', ()=> {

        body = Buffer.concat(body).toString();
        //en este punto body tiene todo el cuerpo de la peticion como string
        res.writeHead(200, {'Content-Type' :'text/html'});
        res.write('Mensaje Recibido!!<br>');
        res.write('Body'+body+"<br>");
        res.end();
        
    }).on('error', (err) => {
        console.error(err.stack);
    });

});

server.listen(8080);
console.log("Escuchamdo en el puerto 8080");