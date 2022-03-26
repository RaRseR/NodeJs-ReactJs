// Основные модули и константы ------------------------------------------------------------------
const express = require("express"),
    app = express(),
    path = require('path'),
    http = require("http"),
    port = process.env.PORT || 3001;

//  Настройки сервера ---------------------------------------------------------------------------
app.set("port", port);

// Пути до папок --------------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, "client/build")));

//  Роутинг -------------------------------------------------------------------------------------
require("./routes")(app);

// Запуск сервера -------------------------------------------------------------------------------
http.createServer(app).listen(app.get("port"), function() {
    console.log("Express server listening on port " + app.get("port"));
});