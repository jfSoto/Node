var http = require('http');
var fs = require('fs');
http.createServer(function (peticion, respuesta) {
    fs.readFile('Demo.html', function (err, dato) {
        respuesta.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8 ' });
        respuesta.write(dato);
        respuesta.end();
    });
}).listen(8080, "127.0.0.1");
console.log('Servidor ejecutándose en http://127.0.0.1:8080/');