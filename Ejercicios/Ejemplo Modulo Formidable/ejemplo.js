var http = require('http');
var fs = require('fs');
var formidable = require('formidable'); // Módulo formidable
 
http.createServer(function (peticion, respuesta) 
{
    if (peticion.url == '/fileupload') // Si se ha indicado la ruta /fileupload
    {
        var form = new formidable.IncomingForm();
        // Cuando se sube un fichero, se almacena en una carpeta temporal
        form.parse(peticion, function (err, fields, files) 
        {
            var oldpath = files.filetoupload.path; // La carpeta temporal
            var newpath = 'C:/Ficheros/' + files.filetoupload.name; // Nueva ruta
            fs.rename(oldpath, newpath, function (err) 
            {
                if (err)
                {
                    throw err;
                }
                respuesta.write('Fichero subido y movido correctamente!');
                respuesta.end();
            });
        });
    }
    else
    {
        // Página con el formulario para subir un fichero
        respuesta.writeHead(200, {'Content-Type': 'text/html;charset=utf-8 '});
        respuesta.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        respuesta.write('<input type="file" name="filetoupload"><br>');
        respuesta.write('<input type="submit">');
        respuesta.write('</form>');
        respuesta.end();
    }
}).listen(8080);
console.log('Servidor ejecutándose en http://127.0.0.1:8080/');