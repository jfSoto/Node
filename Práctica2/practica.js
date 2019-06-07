var express = require("express")
var app = express()
var mongo = require('mongodb')
var MongoClient = mongo.MongoClient
var url = "mongodb://localhost:27017/"
var plantilla1 = "<table border='1'><tr><th>Nombre</th><th>Raza</th></tr>"
var plantilla2 = "<table border='1'><tr><th>Nombre</th><th>Raza</th></tr>"
var plantilla3 = "<table border='1'><tr><th>Nombre</th><th>Raza</th></tr>"
var plantilla4 = "<table border='1'><tr><th>Nombre</th><th>Raza</th></tr>"


app.listen(8080)
console.log("Servidor funcionando en localhost:8080")

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) 
{
    var dbo = db.db("practica5")

    app.use("/1",function(request, response)
    {
        response.write("<h1>Consulta 1</h1><p>db.harryPotter.find({species:'human'}).pretty()</p>")
    
        if (err) throw err
        dbo.collection("harryPotter").find({"species":"human"}).toArray(function (err, result) 
        {
            if (err) throw err
            if(plantilla1 == "<table border='1'><tr><th>Nombre</th><th>Raza</th></tr>")
            {
                for(var i = 0; i < result.length; i++)
                {
                    var resultado1 = JSON.stringify(result[i].name)
                    var resultado2 = JSON.stringify(result[i].species)
                    plantilla1 += "<tr><td>" + resultado1 + "</td><td>" + resultado2 + "</td></tr>"
                }
                plantilla1 += "</table>"
            } 
            response.write(plantilla1)
        })
    })

    app.use("/2",function(request, response)
    {
        response.write("<h1>Consulta 2</h1><p>db.harryPotter.find({yearOfBirth:{$lt:1979}}).pretty()</p>")
    
        if (err) throw err
        dbo.collection("harryPotter").find({"yearOfBirth":{$lt:1979}}).toArray(function (err, result) 
        {
            if (err) throw err
            if(plantilla2 == "<table border='1'><tr><th>Nombre</th><th>Raza</th></tr>")
            {
                for(var i = 0; i < result.length; i++)
                {
                    var resultado1 = JSON.stringify(result[i].name)
                    var resultado2 = JSON.stringify(result[i].species)
                    plantilla2 += "<tr><td>" + resultado1 + "</td><td>" + resultado2 + "</td></tr>"
                }
                plantilla2 += "</table>"
            } 
            response.write(plantilla2)
        })
    })

    app.use("/3",function(request, response)
    {
        response.write("<h1>Consulta 3</h1><p>db.harryPotter.find({'wand.wood':'holly'}).pretty()</p>")
    
        if (err) throw err
        dbo.collection("harryPotter").find({"wand.wood":"holly"}).toArray(function (err, result) 
        {
            if (err) throw err
            if(plantilla3 == "<table border='1'><tr><th>Nombre</th><th>Raza</th></tr>")
            {
                for(var i = 0; i < result.length; i++)
                {
                    var resultado1 = JSON.stringify(result[i].name)
                    var resultado2 = JSON.stringify(result[i].species)
                    plantilla3 += "<tr><td>" + resultado1 + "</td><td>" + resultado2 + "</td></tr>"
                }
                plantilla3 += "</table>"
            } 
            response.write(plantilla3)
        })
    })

    app.use("/4",function(request, response)
    {
        response.write("<h1>Consulta 4</h1><p>db.harryPotter.find({'alive':true, 'hogwardsStudent':true}).pretty()</p>")
    
        if (err) throw err
        dbo.collection("harryPotter").find({"alive":true, "hogwartsStudent":true}).toArray(function (err, result) 
        {
            if (err) throw err
            if(plantilla4 == "<table border='1'><tr><th>Nombre</th><th>Raza</th></tr>")
            {
                for(var i = 0; i < result.length; i++)
                {
                    var resultado1 = JSON.stringify(result[i].name)
                    var resultado2 = JSON.stringify(result[i].species)
                    plantilla4 += "<tr><td>" + resultado1 + "</td><td>" + resultado2 + "</td></tr>"
                }
                plantilla4 += "</table>"
            } 
            response.write(plantilla4)
        })
    })

    app.use("/",function(request, response)
    {
        response.send("Escriba / seguido de un número")
    })
})

