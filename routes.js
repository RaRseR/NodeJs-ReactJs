module.exports = function (app) {
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/client/build/index.html");
    });
    app.post("/send", (req, res) => {
        res.json({ data: "aaaaaaaaaaaaa" });
    });
}