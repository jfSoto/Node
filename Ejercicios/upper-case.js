var http = require('http');
var uc = require('upper-case');
http.createServer(function(peticion, respuesta) 
{
    respuesta.writeHead(200,
    {'Content-Type':'text/plain;charset=utf-8'});
    respuesta.write(uc('Hola mundo!'));
    respuesta.end();
}).listen(8080, '127.0.0.1');
console.log('Servidor ejecutándose en http://127.0.0.1:8080/'); 