var express = require("express");
var body = require("body-parser");
 

var app = express();
var PORT = 8080;
 

app.use(body.json());
// app.use(body.urlencoder({ extended: true }));
app.use(body.text());
app.use(body.json({ type: "application/vnd.api+json" }));
 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
 
app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});
 
