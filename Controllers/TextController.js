const DB = require('../database').connection;



exports.lastData = function(req, res) {
    DB.query('SELECT * FROM texts', function(error, results) {
        if (error) throw error;
        res.json({ data: { id: results[0].id, content: results[0].content } });
    });
}

exports.addData = function(req, res) {
    DB.query(`INSERT INTO texts (content) VALUES ('${req.query.content}');`, function(error, results) {
        if (error) throw error;
        res.json({ data: { id: results.insertId, content: req.query.content } });
    });
}