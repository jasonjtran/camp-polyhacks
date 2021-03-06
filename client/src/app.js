var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require("mongoose"),
    app = express();

var url = "mongodb://localhost:27017/yelpcamp";
mongoose.connect(url, {
    useNewUrlParser: true
});

var campSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Camp = mongoose.model("Camp", campSchema);

app.use(bodyParser.urlencoded({
    extended: true
}));

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