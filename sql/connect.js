// mysql.js
var mysql = require("mysql");

// add connection
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Kirito123",
  port: "3306",
  database: "commodity",
  charset: "UTF8_GENERAL_CI",
});

let connect = function () {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err);
        console.log("[connect_err] - :" + err);
        return;
      }

      console.log("connected!");
      resolve(connection);
    });
  });
};

module.exports = { connect };
