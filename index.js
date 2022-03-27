// Main modules 
const express = require("express"),
    app = express(),
    path = require('path'),
    http = require("http"),

    port = process.env.PORT || 3001;

//  Server settings 
app.set("port", port);

// Used folders
app.use(express.static(path.join(__dirname, "client/build")));

//  Routes
require("./routes")(app);

// Server start
http.createServer(app).listen(app.get("port"), function() {
    console.log("Express server listening on port " + app.get("port"));
});