var http = require('http');
http.createServer(function(peticion, respuesta) 
{
    respuesta.writeHead(200,
    {'Content-Type':'text/plain;charset=utf-8'});
    respuesta.end('Hola mundo!');
}).listen(80, '127.0.0.1');
console.log('Servidor ejecutándose en http://127.0.0.1:80/');