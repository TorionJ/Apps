var express = require('express'); //create a variable called express, notfiy the app that it needs express framework
var app = express();             //bootstrap the app to express
var port = 3000;                //run this app on port 3000

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//^^^
//body parser is a module in express package that helps apps
//parse data in http req body

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/phonebook-app");
var myContactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    number: [Number],
    message: String
});
var Contact = mongoose.model("Phonebook", myContactSchema);
//^^^^
//create a variable called mongoose
//notify the app that it needs the mongoose framework
//then connect the app to the DB in the specified location

app.get('/', (req, res) => {
    
    Contact.find((err, result) => {
        //if unable to get results
        //log the error to the cosole
        if (err) return console.log(err)
        //if success render index.ejs and assign results to
        //a templating variable named contacts that we can access
        //in index.ejs
        res.render("index.ejs", {contacts: result})
    })
})
app.get('/results', (req, res) => {
    
    Contact.find({firstName},(err, result) => {
        //if unable to get results
        //log the error to the cosole
        if (err) return console.log(err)
        //if success render index.ejs and assign results to
        //a templating variable named contacts that we can access
        //in index.ejs
        res.render('index.ejs', { link: "result.js" });
    })
})
// ^^^^^
//binding root context localhost:3000
//to GET method that responds with index.html file
//req - HTTP req made client
// res - HTTP response
// sendfile is a method in express framework that sends file back
// to the client
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

app.get('/netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js', (req, res) => {
    res.sendFile(__dirname + '/netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js');
});

app.get('/code.jquery.com/jquery-1.11.1.min.js', (req, res) => {
    res.sendFile(__dirname + '/code.jquery.com/jquery-1.11.1.min.js');
});

// inform the app to use ejs as it's view engine
app.set('view engine', 'ejs');


app.post("/saveContact", (req, res) => {
    var myData = new Contact(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});
app.listen(port, () =>{
    console.log("Server listening on port " + port);
});
//^^^
// Inform the app to listen to the port number provided up top
