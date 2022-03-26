const DB = require('../index').connection;

exports.sendData = function(req, res) {
    DB.query('SELECT * FROM texts', function(error, results) {
        if (error) throw error;
        console.log(results[0]);
        res.json({ data: { id: results[0].id, content: results[0].content } });
    });
}