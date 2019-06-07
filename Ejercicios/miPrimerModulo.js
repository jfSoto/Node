var http = require('http');
var uc = require('./miPrimerModulo2.js');
var server = http.createServer();
server.on('request', function(peticion, respuesta) 
{
    respuesta.writeHead(200,
    {'Content-Type':'text/plain;charset=utf-8'});
    respuesta.write("La fecha y la hora actual son: " + uc.miFechaHora())
    respuesta.end();
});
server.listen(8080,"127.0.0.1");