var express = require('express'),
    app = express();

app.get("/", function (req, res) {
    res.send("landing");
});

app.get("/map", function (req, res) {
    res.send("map");
});

app.listen(3000, function () {
    console.log('Starting app');
});