const mysql = require('mysql');

const conn = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "fake",
    charset: "utf8mb4",
    timezone: "+07:00"
});

conn.getConnection((error) => {
    if (error) throw error
    console.log('DB Connected');
});

module.exports = conn