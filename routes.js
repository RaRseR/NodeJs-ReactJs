const TextController = require('./Controllers/TextController');

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/client/build/index.html");
    });
    app.post("/lastData", (req, res) => {
        TextController.lastData(req, res);
    });
    app.post("/add", (req, res) => {
        TextController.addData(req, res);
    });
}