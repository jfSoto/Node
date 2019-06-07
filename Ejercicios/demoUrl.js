var http = require('http');
http.createServer(function (peticion, respuesta) {
    respuesta.writeHead(200, {'Content-Type': 'text/html;charset=utf-8 '});
    respuesta.write(peticion.url);
    respuesta.end();
}).listen(8080);
console.log('Servidor ejecutándose en http://127.0.0.1:8080/');