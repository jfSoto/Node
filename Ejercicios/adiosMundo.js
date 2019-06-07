var http = require('http');
var server = http.createServer();
server.on('request', function(peticion, respuesta) 
{
    respuesta.writeHead(200,
    {'Content-Type':'text/html;charset=utf-8'});
    respuesta.end('<h1>Adiós mundo</h1>');
});
server.listen(80,"127.0.0.1");