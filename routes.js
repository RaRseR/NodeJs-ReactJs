module.exports = function (app , path) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "/client/build/index.html"));
    });
}