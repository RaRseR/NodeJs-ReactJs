const mysql = require("mysql");

module.exports.connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'NodeJs'
});