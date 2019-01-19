var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

// ROUTES
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/landing.html"));
});

app.get("/map", function (req, res) {
    res.send("map");
});

app.post("/map", function (req, res) {
    var search = req.body;
    res.redirect("/map");
});

// Start server
app.listen(3000, function () {
    console.log('Starting app');
});