var fs = require('fs');
var mongo = require('mongodb')
var MongoClient = mongo.MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) 
{
    let archivo = fs.readFileSync('alumnos.json')
    let json = JSON.parse(archivo);
    if (err) throw err
    var dbo = db.db("ejercicioAlumnos")
    dbo.collection("alumnos").insertMany(json, function (err, res) 
    {
        if (err) throw err
        console.log("1 documento insertado")
        db.close()
    })
});
                               