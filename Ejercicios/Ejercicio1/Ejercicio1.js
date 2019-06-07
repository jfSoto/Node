var tabla = function()
{  
    var resultado = ""
    for(var i = 1; i < 11; i++)
    {
        for(var j = 0; j < 11; j++)
        {
            resultado += i + "*" + j + "=" + i * j + "<br>"
        }
        resultado += "<br>"
    }
    return resultado
}

var http = require('http');
var server = http.createServer();
server.on('request', function(peticion, respuesta) 
{
    respuesta.writeHead(200,
    {'Content-Type':'text/html;charset=utf-8'});
    if(peticion.url == "/tabla")
    {
        respuesta.end(tabla());
    }
    else
    {
        respuesta.end("Escriba /tabla en la URL");
    }
});
server.listen(8080,"127.0.0.1");

