//EJERCICIO 1

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (peticion, respuesta) 
{
    var q = url.parse(peticion.url, true);
    var nombreFichero = "./todasLasTablas.html";

    if (q.pathname == "/tablas") 
    {
        fs.readFile(nombreFichero, function (err, dato) 
        {
            if (err) 
            {
                respuesta.writeHead(404, { 'Content-Type': 'text/html' });

                return respuesta.end("404 Not Found");
            }

            respuesta.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8 ' });
            respuesta.write(dato);

            return respuesta.end();
        });
    } 
    else 
    {
        respuesta.end()
    }
}).listen(8080);

console.log('Servidor ejecutándose en http://127.0.0.1:8080/');  

//EJERCICIO 2

var fs = require('fs');

fs.mkdir('./Tablas', function (err) 
{
    if (err) 
    {
        throw err;
    }

    console.log('Carpeta creada!');
});

//EJERCICIO 3

var fs = require('fs');

for (var i = 1; i <= 10; i++) 
{
    var resultado = ""

    for (var j = 1; j <= 10; j++) 
    {
        resultado += i + " x " + j + " = " + i * j + "\n"
    }

    var nombreArchivo = "./Tablas/Tabla del " + i + ".txt"

    fs.appendFile(nombreArchivo, resultado, function (err) 
    {
        if (err) 
        {
            throw err;
        }
    });
}

console.log('Archivos creados!');

//EJERCICIO 4

var http = require('http');
var url = require('url');
var fs = require('fs');
var utilidades = require('./utilidades.js')

http.createServer(function (peticion, respuesta) 
{
    var parametros = url.parse(peticion.url, true).query;
    var nombreFichero = "solucion.txt";
    var resultado = utilidades.calculadora(parametros.num1, parametros.num2, parametros.op)

    fs.appendFile(nombreFichero, resultado, function (err) 
    {
        if (err) 
        {
            throw err
        }
    });

    respuesta.end()
}).listen(8080);

console.log('Servidor ejecutándose en http://127.0.0.1:8080/');
