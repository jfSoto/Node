var http = require('http');
var fs = require('fs');
 
http.createServer(function (peticion, respuesta) 
{
    if(peticion.url == "/tabla")
    {
        fs.readFile("todasLasTablas.html", function(err, dato) 
        {
          if (err) 
          {
            respuesta.writeHead(404, {'Content-Type': 'text/html'});
            return respuesta.end("404 Not Found");
          } 
          respuesta.writeHead(200, {'Content-Type': 'text/html;charset=utf-8 '});
          respuesta.write(dato);
          return respuesta.end();
        })
    }
    else
    {
        respuesta.end("Escriba /tabla en la URL")
    }
}).listen(8080);
console.log('Servidor ejecutándose en http://127.0.0.1:8080/'); 