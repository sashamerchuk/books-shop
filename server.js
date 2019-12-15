const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;
const url = "mongodb://localhost:27017";

app.use('/',express.static('.'));
app.use(bodyParser.json());

app.get('/books', function (req, res) {
    mongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }

        let dbo = db.db("books-shop");
        let result = dbo.collection("books").find().toArray().then(function (data) {
            res.send(data);
        });
        db.close();
    });
});


app.post('/books', function (req, res) {
    mongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }

        if (req.body) {
            let dbo = db.db("books-shop");
            dbo.collection("books").insertOne(req.body, function(err, res) {
                if (err) throw err;
                db.close();
            });
        }
    });
    res.send();
});

app.post('/order-books', function (req, res) {
    mongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }

        if (req.body) {
            let dbo = db.db("books-shop");
            dbo.collection("order-books").insertOne(req.body, function(err, res) {
                if (err) throw err;
                db.close();
            });
        }
    });
    res.send();
});

app.get('/order-books', function (req, res) {
    mongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }

        let dbo = db.db("books-shop");
        let result = dbo.collection("order-books").find().toArray().then(function (data) {
            res.send(data);
        });
        db.close();
    });
});

app.listen(port, function () {
    console.log("Listening at port", port);
});