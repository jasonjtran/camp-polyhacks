var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    app = express();

app.use(express.json());

app.use(cors({
    origin: true,
    credentials: true
}));

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
}

var url = "mongodb://localhost:27017/wheelways";
mongoose.connect(url, {
    useNewUrlParser: true
});

var pointSchema = new mongoose.Schema({
    name: String,
    position: {
        lat: Number,
        lng: Number
    },
    rating: String,
    comment: String
});

var Point = mongoose.model("Point", pointSchema);

// ROUTES
app.get("/", function (req, res, next) {
    // res.sendFile(path.join(__dirname + "/../public/landing.html"));
    res.redirect("/map");
});

app.get("/map", function (req, res, next) {
    Point.find(function(err, points) {
        if(err) {
            console.log(err);
        }
        else {
            res.json(points);
        }
    })
});

app.post("/map", function (req, res, next) {
    var search = req.body;
    Point.create({
        name: search.name,
        position: {
            lat: search.position.lat,
            lng: search.position.lng,
        },
        rating: search.rating,
        comment: search.comment
    }, function(err, point) {
        if (err) {
            res.status(400).send("Error when saving to database");
        }
        else {
            console.log(point);
            res.status(200).json({'message': 'Todo successfully added '});
        }
    })
 });

//  app.put("/map/:id", function(req, res, next) {
//     var id = req.query.id;
//     Point.find({_id: id}).update
//  });

// Start server
app.listen(3000, function () {
    console.log('Starting app');
});