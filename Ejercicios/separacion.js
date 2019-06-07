var http = require('http');
var url = require('url');
http.createServer(function (peticion, respuesta) {
    respuesta.writeHead(200, {'Content-Type': 'text/html;charset=utf-8 '});
    var cadena = url.parse(peticion.url, true).query;
    var txt = "El año es " + cadena.año + " y el mes es " + cadena.mes;
    respuesta.write(txt);
    respuesta.end();
}).listen(8080);
console.log('Servidor ejecutándose en http://127.0.0.1:8080/');