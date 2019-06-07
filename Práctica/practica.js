var http = require('http');
var url = require('url');
var fs = require('fs');
 
http.createServer(function (peticion, respuesta) 
{
    var cadena = url.parse(peticion.url, true);
    respuesta.writeHead(200, {'Content-Type': 'text/html;charset=utf-8 '});
    if(cadena.pathname == "/dni")
    {
        fs.readFile("instrucciones.html", function(err, dato) 
        {
          if (err) 
          {
            return respuesta.end("404 Not Found");
          } 
          
          var txt = "El dni es " + cadena.query.num + " y la letra es " + letraDni(cadena.query.num);
          respuesta.write(dato);
          if(cadena.query.num != undefined)
          {
            respuesta.write(txt);
          }
          return respuesta.end();
        })
    }
    else if(cadena.pathname == "/escribir")
    {
        if (fs.existsSync("./Copia")) 
        {
            respuesta.write("El directorio ya existe")
        }
        else
        {
            fs.mkdir('./Copia', function (err) 
            {
                if (err) 
                {
                    throw err;
                }
                fs.appendFile("./Copia/holaMundo.txt", "José Francisco Soto", function (err) 
                {
                    if (err) 
                    {
                        throw err;
                    }
                });
            })
            respuesta.write("El directorio se ha creado correctamente")
        }
        
    }
    else
    {
        respuesta.write("Escriba /dni en la URL para averiguar su letra de DNI <br/>")
        respuesta.write("Escriba /escribir para la creación de una carpeta con un archivo holaMundo.txt")
        respuesta.end()
    }
}).listen(8083, "127.0.0.3");
console.log('Servidor ejecutándose en http://127.0.0.3:8083/');

function letraDni(numeros) 
{
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    return letras.charAt(numeros % 23);
}
