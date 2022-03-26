exports.sendData = function(req, res) {
    res.json({ newData: { id: -2, count: 100, name: "TESTED" } });
}