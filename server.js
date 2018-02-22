var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 3000;

//serve static content from the public directory
app.use(express.static(__dirname + "/public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//require burgers-controller,js for the routes
const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/:id", routes);

//connect to database models
var db = require("./models");

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
