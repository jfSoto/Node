var mongo = require('mongodb')
var MongoClient = mongo.MongoClient
var url = "mongodb://localhost:27017/"
 
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) 
{
    if (err) throw err
    var dbo = db.db("ejercicioAlumnos")
    dbo.collection("alumnos").find({}).toArray(function (err, result) 
    {
        if (err) throw err
        for(var i = 0; i < result.length; i++)
        {
            console.log(result[i].nombre)
        }
        db.close()
    })
})