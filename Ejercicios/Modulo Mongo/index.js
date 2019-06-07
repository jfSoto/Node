var mongo = require('mongodb')
var MongoClient = mongo.MongoClient
var url = "mongodb://localhost:27017/"
 
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err
    var dbo = db.db("miBdMongo")
    dbo.collection("clientes").find({}).project({ nombre: 1 }).toArray(function (err, result) {
        if (err) throw err
        console.log(result)
        db.close()
    })
})