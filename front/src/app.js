var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require("mongoose"),
    app = express();

var url = "mongodb://localhost:27017/wheelways";
mongoose.connect(url, {
    useNewUrlParser: true
});

var pointSchema = new mongoose.Schema({
    lat: Number,
    long: Number,
    rating: Number
});
// 33.9987428, 10
var Point = mongoose.model("Point", pointSchema);

Point.create({
    lat: 33.9987428,
    long: 10,
    rating: 4.5
}, function (err, point) {
    if (err) {
        console.log(err);
    } else {
        console.log("added point to database");
        console.log(point);
    }
});

app.use(bodyParser.urlencoded({
    extended: true
}));

// ROUTES
app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname + "/../public/landing.html"));
    res.redirect("/map");
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